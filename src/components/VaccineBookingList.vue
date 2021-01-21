<template>
  <div class="VaccineBookingList ">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="名字" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phoneno">
        <el-input v-model="ruleForm.phoneno"></el-input>
      </el-form-item>
      <el-form-item label="身份证号" prop="credentialsno">
        <el-input v-model="ruleForm.credentialsno"></el-input>
      </el-form-item>
      <el-form-item label="家庭住址" prop="homeaddress">
        <el-input v-model="ruleForm.homeaddress"></el-input>
      </el-form-item>
      <el-form-item label="第几次" prop="injecttimes">
        <el-select v-model="ruleForm.injecttimes" placeholder="请选择第几次">
          <el-option label="第一次" value="1"></el-option>
          <el-option label="第二次" value="2"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="ruleForm.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="备注" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "VaccineBookingList",
  data() {
    return {
      ruleForm: {
        name: '',
        injecttimes: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        sex: '',
        desc: '',
        info2: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        injecttimes: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        desc: [
          { required: false, message: '请填写备注', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        var _this = this;
        this.$axios
          .get('http://localhost:8080/findAll')
          .then(res=>{
            console.log(res.data);
            _this.ruleForm = res.data[0];
            _this.ruleForm.desc = res.data[0].name;
          })
        //
        // if (valid) {
        //
        //   console.log(_this.ruleForm);
        //   alert('submit!');
        // } else {
        //   console.log('error submit!!');
        //   return false;
        // }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>

</style>
