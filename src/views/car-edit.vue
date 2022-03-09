<template>
  <section v-if="carToEdit" class="car-edit py-2">
    <form @submit.prevent="saveCar" class="form">
      <div class="form-control">
        <label for="txt" class="form-label">Car Vendor</label>
        <input
          required
          v-model="carToEdit.vendor"
          id="txt"
          type="text"
          class="form-input"
          placeholder="Enter your car vendor here..."
        />
      </div>
      <div class="form-control">
        <label for="speed" class="form-label">Car Speed</label>
        <input
          required
          v-model.number="carToEdit.speed"
          id="speed"
          type="number"
          class="form-input"
        />
      </div>
      <div class="btn-group">
        <button @click="saveCar" class="btn btn-info">save</button>
        <button @click="goBack" class="btn btn-danger-text">go back</button>
      </div>
    </form>
  </section>
</template>

<script>
import { carService } from '../services/car-service'

export default {
  name: 'car-edit',
  data() {
    return {
      carToEdit: null,
    }
  },
  created() {
    const { id } = this.$route.params
    if (id) {
      carService.getById(id).then((car) => {
        this.carToEdit = car
      })
    } else this.carToEdit = carService.getEmptyCar()
  },
  methods: {
    goBack() {
      this.$router.push('/car')
    },
    saveCar() {
      this.$store.dispatch({ type: 'saveCar', car: this.carToEdit }).then(() => {
        this.$router.push('/car')
      })
    },
  },
}
</script>
