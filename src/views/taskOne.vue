<template>
  <div class="home">
    <TaskOne msg="Statistics"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskOne from '@/components/TaskOne.vue'

export default {
  name: 'taskOne',
  components: {
    TaskOne
  }
}
</script>
