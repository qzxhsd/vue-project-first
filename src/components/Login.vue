<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>后台管理系统</span>
      </div>
      <el-form :model="form" status-icon ref="form" label-width="80px">
        <el-form-item
          label="用户名"
          prop="username"
          :rules="[
            { required: true, message: '请输入用户名', tigger: 'blur' },
            {
              min: 4,
              max: 10,
              message: '长度在4-10位之间',
              tigger: 'blur'
            }
          ]"
        >
          <el-input type="text" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          :rules="[{ required: true, message: '请输入密码', tigger: 'blur' }]"
        >
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { validate } from 'json-schema'

export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$router.push('/')
        } else {
          console.error(this.form)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #409eff;
  .box-card {
    width: 450px;
    margin: 200px auto;
    .el-card__header {
      font-size: 34px;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>
