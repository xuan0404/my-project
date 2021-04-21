<template>
  <div class="home">
    <el-row>
      <el-col :span="12">左边</el-col>
      <el-col :span="12">右边{{target.a}}</el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name:"home",
  data() {
    return {
      target: { a: 1, b: 2 },
      source: { b: 4, c: 5 },
      returnedTarget: Object.assign(this.target, this.source)
    }
  },
  mounted() {
    console.log(this.returnedTarget );
  }
}
</script>
