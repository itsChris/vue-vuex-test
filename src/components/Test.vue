<template>
  <div class="root">
    <h1>Just a test</h1>
    <div>
      <label>currentCar Make:{{ car.Make }}</label>
    </div>
    <div>
      <label>currentCar Model: {{ car.Model }}</label>
    </div>
    <div>
      <input type="text"  
      v-model="car.Make"
      />
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="car in cars" :key="car.id">
          <td>{{ car.id }}</td>
          <td>{{ car.Make }}</td>
          <td>{{ car.Model }}</td>
          <td>{{ car.Year }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Test",
  setup() {
    const list = ref(null);

    const store = useStore();

    const text = ref("");

    const car = computed(() => store.getters.currentCar);
    const cars = computed(() => store.getters.sortedCars);

    return {
      list,
      text,
      cars,
      car,
    };
  },
};
</script>
