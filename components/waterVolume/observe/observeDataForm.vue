<template>
  <section>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="选择时段" required>
          <el-date-picker
            v-model="formInline.value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      formInline: {
        value1: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  },
  mounted() {}
}
</script>

<style lang='scss' scoped>
</style>
