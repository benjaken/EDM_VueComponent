<template lang="md">
  # Grid 栅格
  ---
  24 栅格系统。
  <div class="row demo-row">
    <div class="col-md-24 demo-col demo-col-1">
      100%
    </div>
  </div>
  <div class="row demo-row">
    <div class="col-md-6 demo-col demo-col-2">
      25%
    </div>
    <div class="col-md-6 demo-col demo-col-3">
      25%
    </div>
    <div class="col-md-6 demo-col demo-col-2">
      25%
    </div>
    <div class="col-md-6 demo-col demo-col-3">
      25%
    </div>
  </div>
  <div class="row demo-row">
    <div class="col-md-8 demo-col demo-col-4">
      33.33%
    </div>
    <div class="col-md-8 demo-col demo-col-5">
      33.33%
    </div>
    <div class="col-md-8 demo-col demo-col-4">
      33.33%
    </div>
  </div>
  <div class="row demo-row">
    <div class="col-md-12 demo-col demo-col-1">
      50%
    </div>
    <div class="col-md-12 demo-col demo-col-3">
      50%
    </div>
  </div>
  <div class="row demo-row">
    <div class="col-md-16 demo-col demo-col-4">
      66.66%
    </div>
    <div class="col-md-8 demo-col demo-col-5">
      33.33%
    </div>
  </div>
  ## 设计理念

  在多数业务情况下，EDM需要在设计区域内解决大量信息收纳的问题，因此在12栅格系统的基础上，我们将整个设计建议区域按照24等分的原则进行划分。

  划分之后的信息区块我们称之为“盒子”。建议横向排列的盒子数量最多四个，最少一个。“盒子”在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。

  ## 概述

  布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

  * 通过`row`在水平方向建立一组`column`（简写col）
  * 你的内容应当放置于`col`内，并且，只有`col`可以作为`row`的直接元素
  * `col-xs`,`col-sm`,`col-md`,`col-lg`分别对应栅格中对应`小于768px`,`大于768px`,`大于992px`,`大于1200px`对于屏幕宽度的区分
  * 栅格系统中的列是指1到24的值来表示其跨越的范围。例如，三个等宽d的列可以使用`.col-md-8`来创建
  * 如果一个`row`中的`col`总和超过24，那么多余的`col`会作为一个整体另起一行排列

  ## 组件演示
  <demo>
    <example title="基础布局">
      <div class="row">
        <v-col span='12' type='md'>.col-md-12</v-col>
        <v-col span='12' type='md'>.col-md-12</v-col>
      </div>
      <div class="row">
        <v-col span='8' type='sm'>.col-sm-8</v-col>
        <v-col span='8' type='sm'>.col-sm-8</v-col>
        <v-col span='8' type='sm'>.col-sm-8</v-col>
      </div>
      <div class="row">
        <v-col span='6' type='md'>.col-md-6</v-col>
        <v-col span='6' type='md'>.col-md-6</v-col>
        <v-col span='6' type='md'>.col-md-6</v-col>
        <v-col span='6' type='md'>.col-md-6</v-col>
      </div>
    </example>
    <example title="左右偏移">
      <div class="row">
        <v-col span='8' type='md'>.col-md-8</v-col>
        <v-col span='8' type='md' offset='8'>.col-md-8</v-col>
        <v-col span='6' type='sm' offset='6'>.col-sm-6</v-col>
        <v-col span='6' type='sm' offset='6'>.col-sm-6</v-col>
        <v-col span='12' type='md' offset='6'>.col-md-12</v-col>
      </div>
    </example>
    <example title="布局排序">
      <div class="row">
        <v-col span='16' type='md' push='8'>.col-md-16 .col-md-push-8</v-col>
        <v-col span='8' type='md' pull='16'>.col-md-8 .col-md-pull-16</v-col>
      </div>
    </example>
  </demo>
</template>
<style>
.demo-row {
    background-image: linear-gradient(90deg, #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%,  transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%,  transparent 70.83333333%, transparent 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, transparent 95.83333333%);
    overflow: hidden;
}
.row-flex {
  background: #F5F5F5;
}
.row div,
.row-flex div {
  padding: 5px 0;
  background: rgba(33, 163, 233, 0.7);
  text-align: center;
  min-height: 28px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  margin-bottom: 10px;
  color: #fff;
}

.row .demo-col {
  text-align: center;
  padding: 40px 0;
  color: #fff;
  font-size: 18px;
  border: none;
  margin-top: 0;
  margin-bottom: 0;
}
.row .demo-col-1 {
  background: rgba(33, 163, 233, 0.7);
}
.row .demo-col-2 {
  background: rgba(33, 163, 233, 0.5);
}
.row .demo-col-3 {
  background: rgba(255, 255, 255, 0.2);
  color: #999;
}
.row .demo-col-4 {
  background: rgba(33, 163, 233, 0.6);
}
.row .demo-col-5 {
  background: rgba(255, 255, 255, 0.5);
  color: #999;
}
</style>
