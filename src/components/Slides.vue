<template>
<div id="slides">
    {{image.title}}
    {{image.url}}
    <div class="slideImage" :style="setbackgroundImage">

    </div>
</div>
</template>

<script>
/* eslint-disable */
export default {
  props: ['image'],
  computed: {
    setbackgroundImage() {
        return {
        backgroundImage: 'url('+this.image.url+')'
        }
    }
  }
}
</script>

<style scoped>
#slides .slideImage{
    height: 70vh;
    width: 80%;
    margin: auto;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    /* background-image: url("../assets/1.jpg"); */
}
</style>
