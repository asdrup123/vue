<template>
  <div class="container">
    <form action="mailto:sky192901106@yahoo.com.tw">
      <div class="row">
        <div class="col-sm">
          <div class="row form">
            <div class="col-sm-6 first">
              <div class="col-sm-6">姓名:</div>
              <input v-model="form.name" class="col-sm-6" type="text" name="name" />
            </div>
            <div class="col-sm-6 first">
              <div class="col-sm-6">連絡電話:</div>
              <input v-model="form.tel" class="col-sm-6" type="tel" name="tel" />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 first">
              <div class="col-sm-6">手機號碼:</div>
              <input v-model="form.mobile" class="col-sm-6" type="tel" name="mobile" />
            </div>
            <div class="col-sm-6 first">
              <div class="col-sm-6">E-Mail:</div>
              <input v-model="form.email" class="col-sm-6" type="email" name="email" />
            </div>
          </div>
          <div class="row second">
              <div class="col-sm-3">聯絡主題:</div>
              <input v-model="form.subject" class="col-sm-9" type="text" name="subject">
          </div>
          <div class="row">
              <div class="col-sm-3">訊息內容:</div>
              <textarea v-model="form.text" class="form-control col-sm-9" aria-label="With textarea"></textarea>
          </div>
          <div class="row buttonrow">
            <button class="btn btn-info">送出</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        tel: '',
        mobile: '',
        email: '',
        subject: '',
        text: ''
      }
    }
  }
}
</script>
<style scoped>
.form {
  display: flex;
  justify-content: center;
}
.first {
  display: flex;
  justify-content: space-between;
}
.second {
  display: flex;
  justify-content: flex-start;
}
input{
    margin: 5px 0px;
}
textarea{
    margin: 5px 0px;
}
.buttonrow{
    display: flex;
    justify-content: flex-end;
}
.btn{
    margin-right: 15px;
}
input,textarea{
    background-color: #e0dede;
    border: 0;
}
</style>
