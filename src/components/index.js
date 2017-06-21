import vAffix from './affix'
import vAlert from './alert'
import vAutoComplete from './auto-complete'
import vBacktop from './backtop'
import vBadge from './badge'
import vBreadcrumb from './breadcrumb'
import vButton from './button/Button'
import vButtonGroup from './button/ButtonGroup'
import vCalendar from './calendar'
import vCard from './card'
import vCol from './grid/Col'
// import vCarousel from './carousel'
import vCheckbox from './checkbox'
import vCollapse from './collapse'
import vDatepicker from './datepicker'
import vDropdown from './dropdown'
import vForm from './form/Form'
import vFormItem from './form/FormItem'
import vRow from './grid/Row'
import vIcon from './iconfont'
import vInput from './input'
import vInputNumber from './inputnumber'
import vLayout from './layout'
import vMenu from './menu'
// import vMessage from './message'
import vModal from './modal'
import vPagination from './pagination'
import vPopover from './popover'
import vProgress from './progress'
import vRadio from './radio/Radio'
import vRadioItem from './radio/RadioItem'
import vRate from './rate'
import vSelect from './select'
import vSlider from './slider'
import vSpin from './spin'
import vStep from './steps/Step'
import vStepItem from './steps/StepItem'
import vSwitch from './switch'
import vTable from './table'
import vTabs from './tabs'
import vTag from './tag'
import vTimeline from './timeline/TimeLine'
import vTimelineItem from './timeline/TimeLineItem'
import vTransfer from './transfer'
import vUpload from './upload'

const edmComponent = {
  vAffix,
  vAlert,
  vAutoComplete,
  vBacktop,
  vBadge,
  vBreadcrumb,
  vButton,
  vButtonGroup,
  vCalendar,
  vCard,
  vCol,
  // vCarousel,
  vCheckbox,
  vCollapse,
  vDatepicker,
  vDropdown,
  vForm,
  vFormItem,
  vIcon,
  vInput,
  vInputNumber,
  vLayout,
  vMenu,
  // vMessage,
  vModal,
  vPagination,
  vPopover,
  vProgress,
  vRadio,
  vRadioItem,
  vRate,
  vRow,
  vSelect,
  vSlider,
  vSpin,
  vStep,
  vStepItem,
  vSwitch,
  vTable,
  vTabs,
  vTag,
  vTimeline,
  vTimelineItem,
  vTransfer,
  vUpload
}

const install = function (Vue, opts = {}) {
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  Object.keys(edmComponent).forEach((key) => {
    Vue.component(key, edmComponent[key])
  })

  Vue.prototype.$loading = vSpin
  // Vue.prototype.$Message = Message
  // Vue.prototype.$Modal = Modal
  // Vue.prototype.$Notice = Notice
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = Object.assign(edmComponent, {install})   // eslint-disable-line no-undef
