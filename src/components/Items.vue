<!--<template>-->
<!--  <div>-->
<!--    <h1>Товары</h1>-->
<!--    <p>Список товаров</p>-->
<!--  </div>-->
<!--</template>-->


<template>
  <div>
    <Equipment />
  </div>
</template>

<script>
import Equipment from './Equipment.vue';

export default {
  name: 'Items',
  components: {
    Equipment
  }
}
</script>