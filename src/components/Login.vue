<template>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{ $t("Login.Login") }}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
<!-- ------Username------ -->
          <div class="form-group row">
            <label class="col-sm-3">{{ $t("Login.Username") }}</label>
            <div class="col-sm-9">
              <input v-model="form.username" type="text" class="name" placeholder="Username">
            </div>
          </div>
<!-- ------Username------ -->
<!-- ------Email------ -->
          <div class="form-group row">
            <label class="col-sm-3">{{ $t("Login.Email") }}</label>
            <div class="col-sm-9">
              <input v-model="form.email" type="email" class="email" placeholder="Email">
            </div>
          </div>
<!-- ------Email------ -->
<!-- ------Password------ -->
          <div class="form-group row">
            <label class="col-sm-3">{{ $t("Login.Password") }}</label>
            <div class="col-sm-9">
              <input v-model="form.password" type="password" class="password" placeholder="Password">
            </div>
          </div>
<!-- ------Password------ -->
<!-- ------Sign in------ -->
          <div class="form-group row">
            <div class="col-sm-12">
              <button @click="SignIn" type="submit" class="btn btn-primary">Sign in</button>
            </div>
          </div>
<!-- ------Sign in------ -->
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username:'',
        email:'',
        password:''
      }
    }
  },
   mounted() {
    let self = this;
    axios.post('/api/fangzai//resourceUnit/getUnitDonateFlow',{
      username:'',
      email:'',
      password:''
    })
    .then ( function(res){
      self.donations = res.data.datas.data;
    })
    .catch( function(error){
      // console.log('Error: ', error);
    })
  },
  methods: {
    SignIn(){
      let self = this;
      let username = this.form.username;
      let email = this.form.email;
      let password = this.form.password;
      if(username == "123" && email == "123@123" && password =="123"){
      alert(JSON.stringify(self.donations))  
      }
      else
      alert ('Wrong username or email or password!')
      this.form.username = '';
      this.form.email = '';
      this.form.password = '';
    }
    
  },
}
</script>

<style scoped>
</style>

