<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <el-button type="success" @click="beginStep">开始填写</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'home',
    components: {
        HelloWorld
    },
    methods: {
        // 开始填写
        beginStep () {
            this.$router.push('/resumefirst?step=1');
        }
    }
};
</script>
