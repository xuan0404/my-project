<template>
  <div class="home">
    <el-row>
      <el-col :span="12">左边</el-col>
      <el-col :span="12">右边</el-col>
    </el-row>
    <div id="wrapper">
      <div id="box1">1</div>
      <div id="box2">2</div>
      <div id="box3">3</div>
    </div>
    <div>
      <h2>flex-wrap定义子元素多行显示还是单行显示</h2>
      <h3>flex-wrap: nowrap(默认值)</h3>
      <div class="wraper1">
        <div class="red">1</div>
        <div class="green">2</div>
        <div class="blue">3</div>
      </div>
      <h3>flex-wrap: wrap</h3>
      <div class="wraper2">
        <div class="red">1</div>
        <div class="green">2</div>
        <div class="blue">3</div>
      </div>
      <h3>flex-wrap: wrap-reverse</h3>
      <div class="wraper3">
        <div class="red">1</div>
        <div class="green">2</div>
        <div class="blue">3</div>
      </div>
    </div>
    <div>
      <h1>justity-content水平对齐方式</h1>
      <h3>1.flex-start</h3>
      <div class="flex start">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
      </div>
      <h3>2.flex-center</h3>
      <div class="flex center">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
      </div>
      <h3>3.flex-end</h3>
      <div class="flex end">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
      </div>
      <h3>4.space-between</h3>
      <div class="flex space-between">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
      </div>
      <h3>5.space-around</h3>
      <div class="flex space-around">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.home {
  #wrapper {
    display: flex;
    width: 200px;
    height: 150px;
    background: green;
    // 排列方向。子元素竖排或横排
    // row(横排) row-reverse 横向反排，column 纵向，column-reverse 纵向反排列
    flex-direction: row-reverse;
    #box1,
    #box2,
    #box3 {
      // width: 100px;
      // flex-basis针对弹性盒子（父）下的子元素，两种取值,一个是auto,即该子元素的宽度根据内容的多少来定，另外一种是长度值，可以为px,em,百分比等，
      // width与flex-basis 同时存在时，flex-basis覆盖width;
      flex-basis: 100px;
      // flex语法糖 默认值 flex：0, 1, auto;
      // flex: grow,shrink basis;
    }
    #box1 {
      background: red;
      // 子元素小于父元素宽度，子元素针对父剩余宽度的放大比例
      // flex-grow: 1;
      // 子元素大于父元素宽度，子元素针对父超出宽度的缩小比例
      flex-shrink: 0;
    }
    #box2 {
      background: blue;
      // flex-grow: 2;
      flex-shrink: 1;
    }
    #box3 {
      background: orange;
      // flex-grow: 1;
      flex-shrink: 3;
    }
  }
  // flex-flow：direction wrap 语法糖那
  // order子元素的排列顺序
  .wraper1,
  .wraper2,
  .wraper3 {
    display: flex;
    color: white;
    font-size: 24px;
    width: 400px;
    height: 100px;
    line-height: 50px;
    border: 1px solid gray;
    text-align: center;
  }
  .wraper1 div,
  .wraper2 div,
  .wraper3 div {
    height: 50%;
    width: 50%;
  }
  .red {
    background: red;
  }
  .green {
    background: green;
  }
  .blue {
    background: blue;
  }
  .wraper1 {
    flex-wrap: nowrap;
    .red {
      order: 3;
    }
    .green {
      order: 1;
    }
    .blue {
      order: 2;
    }
  }
  .wraper2 {
    flex-wrap: wrap;
  }
  .wraper3 {
    flex-wrap: wrap-reverse;
  }
  .flex{
    display: flex;
    flex-flow: row wrap;
    background: lightskyblue;
    margin-bottom: 5px;
  }
  .item {
    width: 80px;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
  }
  .start {
    justify-content: flex-start;
  }
  .center{
    justify-content: center;
  }
  .end {
    justify-content: flex-end;
  }
  .space-between {
    justify-content: space-between;
  }
  .space-around {
    justify-content: space-around;
  }
}
</style>
