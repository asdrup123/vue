<template>
   <div class="todolist">
       <h3>{{ msg }}</h3>
       <input class="todo" type="text" placeholder="What needs to be done" v-model="newTodo" @keyup.enter="addTodo">
       <div class="item" v-for="(todo, index) in todos" :key="todo.id" >
           <div class="todo-item-left" >
               <input type="checkbox" v-model="todo.completed">
               <div v-if="!todo.editing" class="todo-item-label" :class="{ completed : todo.completed}">{{todo.title}}</div>
               <input v-else class="todo-item-edit" type="text"  v-model="todo.title" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)" v-focus>
            </div>
            <div>
                <button class="btn btn-success btn-sm" @click="editTodo(todo)">編輯</button>
                <button class="btn btn-danger btn-sm" @click="remove(index)">刪除</button>
            </div>
       </div>

       <div class="extra-container">
           <div><label><input class="checkall" type="checkbox" :checked="!anyRemaining" @change="checkAllTodos">Check All</label></div>
           <button class="btn btn-warning btn-sm" @click="clearComplete">Clear Completed</button>
           <!-- <div>{{remaining}} item left</div> -->
       </div>
   </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'TodoList',
  data () {
    return {
        msg:'TodoList',
        newTodo:'',
        idForTodo:3,
        beforeEditCache:'',
        todos:[
            {
                'id':1,
                'title':'閱讀一本書',
                'completed':false,
                'editing':false
            },
            {
                'id':2,
                'title':'預訂車票',
                'completed':false,
                'editing':false
            },          
        ]
    }
},
  computed:{
      remaining(){
          return this.todos.filter(todo => !todo.completed).length
      },
      anyRemaining(){
          return this.remaining != 0
      }
  },
  directives: {
    focus: {
        // directive definition
        inserted: function (el) {
        el.focus()
            }
        }
    },
  methods:{
    addTodo(){
        if(this.newTodo.trim().length == 0){
            return
        }
        this.todos.push({
            id:this.idForTodo,
            title:this.newTodo,
            completed:false,
        })
        this.newTodo = '';
        this.idForTodo++
    },
    editTodo(todo){
        this.beforeEditCache = todo.title
        todo.editing = true
    },
    doneEdit(todo){
        if(todo.title.trim().length == 0){
            todo.title = this.beforeEditCache
        }
        todo.editing = false
    },
    cancelEdit(todo){
        todo.title = this.beforeEditCache
        todo.editing = false
    },
    remove(index){
        this.todos.splice(index,1)
    },
    checkAllTodos(){
        this.todos.forEach((todo) => todo.completed = event.target.checked)
    },
    clearComplete(){
        this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todolist{
    width: 100%;
}
.todo{
    width: 80%;
    padding: 10px 18px;
    margin-bottom: 16px;
}
.item{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.todo-item-left{
    display: flex;
    align-items: center;
}
.todo-item-label{
    padding: 10px 5px;
    border: 1px solid white;
    margin-left: 5px;
}
.todo-item-edit{
    font-size: 18px;
    color: #999;
    margin-left: 12px;
    margin-bottom: 15px;
    width: 100%;
}
.completed{
    text-decoration: line-through;
    color: grey;
}
.extra-container {
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    border-top: 1px solid lightgrey;
    padding-top: 14px;
    margin-bottom: 14px;
}
.checkall{
    margin-right: 5px;
}
</style>
