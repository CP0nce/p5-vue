<template>
  <div class="TiendaItem">
    <TiendaItem />
  </div>
</template>

<script>
// @ is an alias to /src
import TiendaItem from '@/components/TiendaItem.vue'
export default {
  name: 'ShopView',
  components: {
    TiendaItem
  }
}
</script>