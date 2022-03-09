<template>
  <section class="car-app container flex flex-col gap-1">
    <button @click="goToEdit" class="btn btn-secondary">Add a new car</button>
    <car-filter @setFilter="setFilter" />
    <car-list @removeCar="removeCar" v-if="cars" :cars="carsToShow" />
  </section>
</template>

<script>
import { carService } from '../services/car-service.js'
import carFilter from '../components/car-filter.vue'
import carList from '../components/car-list.vue'

export default {
  name: 'car-app',
  data() {
    return {
      filterBy: null,
    }
  },
  computed: {
    cars() {
      return this.$store.getters.cars
    },
    carsToShow() {
      if (!this.filterBy) return this.cars
      const regex = new RegExp(this.filterBy.vendor, 'i')
      return this.cars.filter((car) => regex.test(car.vendor))
    },
  },
  created() {},
  methods: {
    loadCars() {
      carService.query().then((cars) => (this.cars = cars))
    },
    setFilter(filterBy) {
      this.filterBy = filterBy
    },
    goToEdit() {
      this.$router.push(`/car/edit`)
    },
    removeCar(carId) {
      this.$store.dispatch({ type: 'removeCar', id: carId })
    },
  },
  components: {
    carList,
    carFilter,
  },
}
</script>
