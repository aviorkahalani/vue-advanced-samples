<template>
  <section v-if="car" class="car-details flex flex-col items-center gap-2">
    <article>
      <p><span class="fw-bold">ID:</span> {{ car.id }}</p>
      <p><span class="fw-bold">Vendor:</span> {{ car.vendor }}</p>
      <p><span class="fw-bold">Speed:</span> {{ car.speed }}</p>
    </article>
    <button @click="goBack" class="btn btn-primary">go back</button>
  </section>
</template>

<script>
import { carService } from '../services/car-service.js'

export default {
  name: 'car-detail',
  data() {
    return {
      car: null,
    }
  },
  created() {
    const { id } = this.$route.params
    carService.getById(id).then((car) => {
      this.car = car
    })
  },
  methods: {
    goBack() {
      this.$router.push('/car')
    },
  },
}
</script>
