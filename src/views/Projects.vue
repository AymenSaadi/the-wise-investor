<script>
export default {
  name:'Projects',
  props:["projects"],
  components:{
  },
  methods:{
    handlePath(name,data){
      this.$router.push({name:name,params:{data:data}})
    }
  }
}
</script>
<template>

<div class="parent">
    <div v-for="project in projects" :key='project.id'>
       <div class="card" style="width: 18rem;" >
    <div class ="a">
  <img class="card-img-top" v-bind:src="project.image">
  <div class="card-body"  >
    <h2 class="card-title"> {{project.title}}</h2>
    <h3 class="card-text">{{project.field}}</h3>
    <h3 class="card-text">{{project.budget +"$"}}</h3>
    <button @click="handlePath('Tuto','project')">tutorial</button>
  </div>
    </div>
        <!-- <div>{{message}}</div> -->
</div>
      </div>
    </div>
     <!-- <div v-for="project in projects" :key='project.id'> -->
      <!-- <Tuto :project="project"/> -->
      <!-- </div> -->
    
</template>
<style >
.parent {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 50px;
grid-row-gap: 50px;
}

</style>