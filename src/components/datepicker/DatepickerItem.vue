<template>
<div class="date-picker">
  <div class="input" type="text" @click="togglePanel" v-text="range ? value[0] + ' -- ' + value[1] : value"></div>
  <div v-show="panelState">
    <div class="date-panel" :style="coordinates" v-show="panelType !== 'time'" transition="toggle">
      <div class="panel-header" v-show="panelType !== 'year'">
        <div class="arrow-left" @click="prevMonthPreview()">&lt;</div>
        <div class="year-month-box">
          <div class="year-box" @click="chType('year')" v-text="tmpYear"></div>
          <div class="month-box" @click="chType('month')" v-text="tmpMonth + 1 | month language"></div>
        </div>
        <div class="arrow-right" @click="nextMonthPreview()">&gt;</div>
      </div>
      <div class="panel-header" v-show="panelType === 'year'">
        <div class="arrow-left" @click="chYearRange(0)">&lt;</div>
        <div class="year-range">
          <span v-text="yearList[0]"></span> - <span v-text="yearList[yearList.length - 1]"></span>
        </div>
        <div class="arrow-right" @click="chYearRange(1)">&gt;</div>
      </div>
      <div class="type-year" v-show="panelType === 'year'">
        <ul class="year-list">
          <li v-for="item in yearList" v-text="item" :class="{selected: isSelected('year', item), invalid: validateYear(item)}" @click="selectYear(item)">
          </li>
        </ul>
      </div>
      <div class="type-month" v-show="panelType === 'month'">
        <ul class="month-list">
          <li v-for="item in monthList" v-text="item | month language" :class="{selected: isSelected('month', $index), invalid: validateMonth($index)}" @click="selectMonth($index)">
          </li>
        </ul>
      </div>
      <div class="type-date" v-show="panelType === 'date'">
        <ul class="weeks">
          <li v-for="item in weekList" v-text="item | week language"></li>
        </ul>
        <ul class="date-list">
          <li v-for="item in dateList" v-text="item.value" :class="{preMonth: item.previousMonth, nextMonth: item.nextMonth,
                              selected: isSelected('date', item), invalid: validateDate(item)}" @click="selectDate(item)">
          </li>
        </ul>
        <div class="footer">
          <a @click="selectToday" :class="{'fl': showTime}">今天</a>
          <a @click="chType('time')" class="fr" v-if="showTime">选择时间</a>
        </div>
      </div>
    </div>
    <div class="date-panel type-time toggle-transition" v-show="panelType === 'time'">
      <div class="panel-header">
        <span>{{tmpYear}}年 {{tmpMonth + 1 | month language}} {{tmpEndDate}}日</span>
      </div>
      <ul class="timepicker">
        <li class="hour"><ul><li v-for="i in 24" :class="'active': isSelected('date', i)">{{i | fix}}</li></ul></li>
        <li class="minute"><ul><li v-for="i in 60">{{i | fix}}</li></ul></li>
        <li class="second"><ul><li v-for="i in 60">{{i | fix}}</li></ul></li>
      </ul>
      <div class="footer">
        <a @click="selectToday" class="fl">今天</a>
        <a @click="chType('date')">选择日期</a>
        <a class="fr">确定</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    let now = new Date()
    return {
      panelState: false,
      panelType: 'date',
      coordinates: {},
      year: new Date(this.value).getFullYear(),
      month: new Date(this.value).getMonth(),
      date: new Date(this.value).getDate(),
      tmpYear: now.getFullYear(),
      tmpMonth: now.getMonth(),
      tmpStartYear: now.getFullYear(),
      tmpStartMonth: now.getMonth(),
      tmpStartDate: now.getDate(),
      tmpEndYear: now.getFullYear(),
      tmpEndMonth: now.getMonth(),
      tmpEndDate: now.getDate(),
      yearList: Array.from({
        length: 12
      }, (value, index) => new Date().getFullYear() + index),
      monthList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      weekList: [0, 1, 2, 3, 4, 5, 6],
      rangeStart: false
    }
  },
  props: {
    language: {
      default: 'ch'
    },
    min: {
      default: '1970-01-01'
    },
    max: {
      default: '3016-01-01'
    },
    showTime: {
      type: Boolean,
      default: false
    },
    minYear: Number,
    minMonth: Number,
    minDate: Number,
    maxYear: Number,
    maxMonth: Number,
    maxDate: Number,
    value: [String, Array],
    range: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectToday () {
      this.value = moment().format('YYYY-MM-DD')
      this.togglePanel()
    },
    togglePanel() {
      this.panelState = !this.panelState
      this.rangeStart = false
    },
    isSelected(type, item) {
      switch (type) {
        case 'year':
          if (!this.range) return item === this.tmpYear
          return (new Date(item, 0).getTime() >= new Date(this.tmpStartYear, 0).getTime() &&
            new Date(item, 0).getTime() <= new Date(this.tmpEndYear, 0).getTime())
        case 'month':
          if (!this.range) return item === this.tmpMonth && this.year === this.tmpYear
          return (new Date(this.tmpYear, item).getTime() >= new Date(this.tmpStartYear, this.tmpStartMonth).getTime() &&
            new Date(this.tmpYear, item).getTime() <= new Date(this.tmpEndYear, this.tmpEndMonth).getTime())
        case 'date':
          if (!this.range) return this.date === item.value && this.month === this.tmpMonth && item.currentMonth
          let month = this.tmpMonth
          item.previousMonth && month--
          item.nextMonth && month++
          return (new Date(this.tmpYear, month, item.value).getTime() >= new Date(this.tmpStartYear, this.tmpStartMonth, this.tmpStartDate).getTime() &&
                  new Date(this.tmpYear, month, item.value).getTime() <= new Date(this.tmpEndYear, this.tmpEndMonth, this.tmpEndDate).getTime())
      }
    },
    chType(type) {
      this.panelType = type
    },
    chYearRange(next) {
      if (next) {
        this.yearList = this.yearList.map((i) => i + 12)
      } else {
        this.yearList = this.yearList.map((i) => i - 12)
      }
    },
    prevMonthPreview() {
      this.tmpMonth = this.tmpMonth === 0 ? 0 : this.tmpMonth - 1
    },
    nextMonthPreview() {
      this.tmpMonth = this.tmpMonth === 11 ? 11 : this.tmpMonth + 1
    },
    selectYear(year) {
      if (this.validateYear(year)) return
      this.tmpYear = year
      this.panelType = 'month'
    },
    selectMonth(month) {
      if (this.validateMonth(month)) return
      this.tmpMonth = month
      this.panelType = 'date'
    },
    selectDate(date) {
      setTimeout(() => {
        if (this.validateDate(date)) return
        if (date.previousMonth) {
          if (this.tmpMonth === 0) {
            this.year -= 1
            this.tmpYear -= 1
            this.month = this.tmpMonth = 11
          } else {
            this.month = this.tmpMonth - 1
            this.tmpMonth -= 1
          }
        } else if (date.nextMonth) {
          if (this.tmpMonth === 11) {
            this.year += 1
            this.tmpYear += 1
            this.month = this.tmpMonth = 0
          } else {
            this.month = this.tmpMonth + 1
            this.tmpMonth += 1
          }
        }
        if (!this.range) {
          this.year = this.tmpYear
          this.month = this.tmpMonth
          this.date = date.value
          this.value = `${this.tmpYear}-${('0' + (this.month + 1)).slice(-2)}-${('0' + this.date).slice(-2)}`
          this.panelState = false
        } else if (this.range && !this.rangeStart) {
          this.tmpEndYear = this.tmpStartYear = this.tmpYear
          this.tmpEndMonth = this.tmpStartMonth = this.tmpMonth
          this.tmpEndDate = this.tmpStartDate = date.value
          this.rangeStart = true
        } else if (this.range && this.rangeStart) {
          this.tmpEndYear = this.tmpYear
          this.tmpEndMonth = this.tmpMonth
          this.tmpEndDate = date.value
          let d1 = new Date(this.tmpStartYear, this.tmpStartMonth, this.tmpStartDate).getTime()
          let d2 = new Date(this.tmpEndYear, this.tmpEndMonth, this.tmpEndDate).getTime()
          if (d1 > d2) {
            let tmpY, tmpM, tmpD
            tmpY = this.tmpEndYear
            tmpM = this.tmpEndMonth
            tmpD = this.tmpEndDate
            this.tmpEndYear = this.tmpStartYear
            this.tmpEndMonth = this.tmpStartMonth
            this.tmpEndDate = this.tmpStartDate
            this.tmpStartYear = tmpY
            this.tmpStartMonth = tmpM
            this.tmpStartDate = tmpD
          }
          let RangeStart = `${this.tmpStartYear}-${('0' + (this.tmpStartMonth + 1)).slice(-2)}-${('0' + this.tmpStartDate).slice(-2)}`
          let RangeEnd = `${this.tmpEndYear}-${('0' + (this.tmpEndMonth + 1)).slice(-2)}-${('0' + this.tmpEndDate).slice(-2)}`
          this.value = [RangeStart, RangeEnd]
          this.rangeStart = false
          this.panelState = false
        }
      }, 0)
    },
    validateYear(year) {
      return (year > this.maxYear || year < this.minYear) ? 1 : 0
    },
    validateMonth(month) {
      if (new Date(this.tmpYear, month).getTime() >= new Date(this.minYear, this.minMonth - 1).getTime() &&
        new Date(this.tmpYear, month).getTime() <= new Date(this.maxYear, this.maxMonth - 1).getTime()) {
        return false
      }
      return true
    },
    validateDate(date) {
      let mon = this.tmpMonth
      if (date.previousMonth) {
        mon -= 1
      } else if (date.nextMonth) {
        mon += 1
      }
      if (new Date(this.tmpYear, mon, date.value).getTime() >= new Date(this.minYear, this.minMonth - 1, this.minDate).getTime() &&
        new Date(this.tmpYear, mon, date.value).getTime() <= new Date(this.maxYear, this.maxMonth - 1, this.maxDate).getTime()) {
        return false
      }
      return true
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.panelState = false
        this.rangeStart = false
      }
    }
  },
  watch: {
    min(v) {
      let minArr = v.split('-')
      this.minYear = Number(minArr[0])
      this.minMonth = Number(minArr[1])
      this.minDate = Number(minArr[2])
    },
    max(v) {
      let maxArr = v.split('-')
      this.maxYear = Number(maxArr[0])
      this.maxMonth = Number(maxArr[1])
      this.maxDate = Number(maxArr[2])
    }
  },
  computed: {
    dateList() {
      let currentMonthLength = new Date(this.tmpYear, this.tmpMonth + 1, 0).getDate()
      let dateList = Array.from({
        length: currentMonthLength
      }, (val, index) => {
        return {
          currentMonth: true,
          value: index + 1
        }
      })
      let startDay = new Date(this.year, this.tmpMonth, 1).getDay()
      let previousMongthLength = new Date(this.year, this.tmpMonth, 0).getDate()
      for (let i = 0, len = startDay; i < len; i++) {
        dateList = [{
          previousMonth: true,
          value: previousMongthLength - i
        }].concat(dateList)
      }
      for (let i = dateList.length, item = 1; i < 42; i++, item++) {
        dateList[dateList.length] = {
          nextMonth: true,
          value: item
        }
      }
      return dateList
    }
  },
  filters: {
    fix (val) {
      return val < 10 ? '0' + val : val
    },
    week(item, lang) {
      switch (lang) {
        case 'en':
          return {
            0: 'Su',
            1: 'Mo',
            2: 'Tu',
            3: 'We',
            4: 'Th',
            5: 'Fr',
            6: 'Sa'
          }[item]
        case 'ch':
          return {
            0: '日',
            1: '一',
            2: '二',
            3: '三',
            4: '四',
            5: '五',
            6: '六'
          }[item]
        default:
          return item
      }
    },
    month(item, lang) {
      switch (lang) {
        case 'en':
          return {
            1: 'Jan',
            2: 'Feb',
            3: 'Mar',
            4: 'Apr',
            5: 'May',
            6: 'Jun',
            7: 'Jul',
            8: 'Aug',
            9: 'Sep',
            10: 'Oct',
            11: 'Nov',
            12: 'Dec'
          }[item]
        case 'ch':
          return {
            1: '一月',
            2: '二月',
            3: '三月',
            4: '四月',
            5: '五月',
            6: '六月',
            7: '七月',
            8: '八月',
            9: '九月',
            10: '十月',
            11: '十一月',
            12: '十二月'
          }[item]
        default:
          return item
      }
    }
  },
  ready() {
    if (this.$el.parentNode.offsetWidth + this.$el.parentNode.offsetLeft - this.$el.offsetLeft <= 300) {
      this.coordinates = {
        left: '0',
        top: `${window.getComputedStyle(this.$el.children[0]).offsetHeight + 4}px`
      }
    } else {
      this.coordinates = {
        left: '0',
        top: `${window.getComputedStyle(this.$el.children[0]).offsetHeight + 4}px`
      }
    }
    let minArr = this.min.split('-')
    this.minYear = Number(minArr[0])
    this.minMonth = Number(minArr[1])
    this.minDate = Number(minArr[2])
    let maxArr = this.max.split('-')
    this.maxYear = Number(maxArr[0])
    this.maxMonth = Number(maxArr[1])
    this.maxDate = Number(maxArr[2])
    if (this.range) {
      let rangeStart = this.value[0].split('-')
      let rangeEnd = this.value[1].split('-')
      this.tmpStartYear = Number(rangeStart[0])
      this.tmpStartMonth = Number(rangeStart[1]) - 1
      this.tmpStartDate = Number(rangeStart[2])
      this.tmpEndYear = Number(rangeEnd[0])
      this.tmpEndMonth = Number(rangeEnd[1]) - 1
      this.tmpEndDate = Number(rangeEnd[2])
    }
    if (!this.value) {
      this.value = `${this.tmpYear}-${('0' + (this.month + 1)).slice(-2)}-${('0' + this.date).slice(-2)}`
    }
    window.addEventListener('click', this.close)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.close)
  }
}
</script>
