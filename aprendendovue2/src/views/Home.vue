<template>
  <div class="home">
    <BaseLayout>
        <template v-slot:header>
          <h1>Estou no header</h1>
        </template>

        <h1>Estou denro do slot</h1>

        <template v-slot:footer>
          <h1>Estou no footer</h1>
        </template>
    </BaseLayout>

  </div>
</template>

<script>

import BaseLayout from  '@/components/BaseLayout';  


export default {
  name: 'Home',
  components: {
    BaseLayout
  }
}
</script>

<style scoped>
h1 {
  color:green;
}
</style>
