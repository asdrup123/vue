<template>
  <div class="content">
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        <input :checked="!anyRemaining" @change="checkAll" type="checkbox" class="input0">
        <div>Name</div>
      </div>
      <ul class="namelist">
        <li v-for="participant in participants" v-bind:key="participant">
          <input v-model="participant.off" type="checkbox" class="input1">
          <div
            v-if="!participant.pick"
            :class="{ off : participant.off }"
            class="names"
          >{{ participant.name }}</div>
          <div v-else class="pick">{{ participant.name }}</div>
        </li>
      </ul>
    </div>
    <div class="result">
      <!-- <div class="title">設定中獎人數</div>
        <div class="winnerSumBox">
          <button @click="minus" class="btn btn-info btn-sm">-</button>
          <input v-model="value" class="input">
          <button @click="add" class="btn btn-info btn-sm">+</button>
      </div>-->
      <button @click="picker" class="btn btn-success btn-sm" :disabled="btnDisable">開始抽</button>
      <button @click="clear" class="btn btn-danger btn-sm">清除結果</button>
      <div class="display">
        <p>{{chosenName}}</p>
        <p>{{newArray}}</p>
        <p>{{count}}</p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Draw",
  data() {
    return {
      count: 0,
      btnDisable: false,
      chosenName: "",
      newArray: [],
      value: 1,
      participants: [
        {
          id: 1,
          name: "Jenny",
          off: false,
          pick: false
        },
        {
          id: 2,
          name: "Monkey",
          off: false,
          pick: false
        },
        {
          id: 3,
          name: "QQ",
          off: false,
          pick: false
        },
        {
          id: 4,
          name: "Eddie",
          off: false,
          pick: false
        },
        {
          id: 5,
          name: "Jessica",
          off: false,
          pick: false
        },
        {
          id: 6,
          name: "Eric",
          off: false,
          pick: false
        },
        {
          id: 7,
          name: "Ray",
          off: false,
          pick: false
        },
        {
          id: 8,
          name: "Lucifers",
          off: false,
          pick: false
        }
      ]
    };
  },
  computed: {
    remaining() {
      return this.participants.filter(participant => !participant.off).length;
    },
    anyRemaining() {
      return this.remaining != 0;
    }
  },
  methods: {
    clear() {
     this.newArray= [],
     this.participants.forEach(participant => (participant.pick = false));
    },
    picker() {
      this.clear();
      for (let i = 0; i < 2; i++) {
        let chosenNumber = Math.floor(Math.random() * this.participants.length);
        while (this.participants[chosenNumber].off || this.newArray.indexOf(this.participants[chosenNumber].name) >= 0) {
          chosenNumber = Math.floor(Math.random() * this.participants.length);
        }
        this.newArray.push(this.participants[chosenNumber].name);
        this.participants[chosenNumber].pick = true;
      }
      
      
      // this.chosenName = this.participants[chosenNumber].name;
      // newArray.push(this.participants[chosenNumber].name);
    },
    checkAll() {
      this.participants.forEach(
        participant => (participant.off = event.target.checked)
      );
      this.btnDisable = event.target.checked;
    }
    // add() {
    //   this.value =
    //     this.value++ >= this.participants.length ? this.participants.length : this.value++;
    // },
    // minus() {
    //   this.value = this.value-- <= 1 ? 1 : this.value--;
    // }
  }
};
</script>

<style scoped>
li {
  display: flex;
}
.content {
  display: flex;
  justify-content: center;
}
.card {
  display: flex;
  margin-left: 60px;
}
.card-header {
  display: flex;
  align-items: center;
  padding: 20px 15px;
}
.input0 {
  margin-right: 10px;
}
.namelist {
  display: inline-block;
  align-items: center;
}
.names {
  padding: 10px 5px;
  border: 1px solid #eee;
  margin: 5px;
}
.input1 {
  align-self: center;
}
/* .attend {
  display: flex;
  border: 1px solid black;
} */
.input2 {
  width: 80px;
  height: 30px;
  margin-left: 30px;
}
.result {
  margin-left: 10px;
}
.winnerSumBox {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.btn-info {
  margin: 0px 5px;
}
.off {
  text-decoration: line-through;
  color: grey;
}
.pick {
  padding: 10px 5px;
  border: 1px solid #eee;
  margin: 5px;
  background-color: cadetblue;
  color: khaki;
}
.input {
  width: 50px;
  text-align: center;
}
</style>
