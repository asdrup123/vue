<template>
<div id="slider">
    <div class="arrowLeft" @click="arrowLeft()"></div>
    <Slides :image="images[this.chosenImage]"/>
    <div class="arrowRight" @click="arrowRight()"></div>
    <div class="squares">
        <div @click="squares(image.id)" v-for="image in images" :key="image.id" :class="(image.id) == chosenImage ? 'current':''"></div>
    </div>
</div>
</template>

<script>
/* eslint-disable */
import Slides from './Slides'
export default {
    components: {
        Slides
    },
    data(){
        return{
            images: [
                {
                    id: 0,
                    url: require("../assets/1.jpg"),
                    title: "japan1"
                },
                {
                    id: 1,
                    url: require("../assets/2.jpg"),
                    title: "japan2"
                },
                {
                    id: 2,
                    url: require("../assets/3.jpg"),
                    title: "japan3"
                },
                {
                    id: 3,
                    url: require("../assets/4.jpg"),
                    title: "japan4"
                }
            ],
            chosenImage: 0,
            intervalObject: null
        }
    },
    methods: {
        squares(id){
            this.chosenImage = id;
        },
        arrowLeft(){
            clearInterval(this.intervalObject);
            this.moveLeft();
            this.intervalObject = setInterval(()=>{
                this.moveLeft();
            },4000);
        },
        arrowRight(){
            clearInterval(this.intervalObject);
            this.moveRight();
            this.intervalObject = setInterval(()=>{
                this.moveRight();
            },4000);
        },
        moveLeft() {
            let flag = this.chosenImage;
            flag--;
            if(flag < 0){
                flag = (this.images.length - 1);
            }
            this.chosenImage = flag;
        },
        moveRight() {
            let flag = this.chosenImage;
            flag++;
            if(flag>=this.images.length){
                flag = 0;
            }
            this.chosenImage = flag;
        },
    },
    created() {
        this.intervalObject = setInterval(()=>{
            this.moveRight();
        },4000);
    }
}
</script>

<style scoped>
#slider{
    position: relative;
}
#slider .arrowLeft, #slider .arrowRight{
    border: 20px solid transparent;
    position: absolute;
    top: 50%;
    cursor:pointer;
}
#slider .arrowLeft{
    border-right-color: black;
    left: 50px;
}
#slider .arrowRight{
    right: 50px;
    border-left-color: black;
}
#slider .squares{
    /* background-color: black; */
    position: absolute;
    bottom: -10px;
    left: calc(50% - 60px);
}
#slider .squares div{
    height: 20px;
    width: 20px;
    margin-right: 10px;
    display: inline-block;
    background-color: gray;
    border-radius: 50%;
    cursor:pointer;
}
#slider.squares .current{
    background-color: black;
}
</style>