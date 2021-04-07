export const cars = state => state.cars

export const currentCar = state => {
  return state.car
}

export const currentCars = state => {
    return state.cars
  }

  export const sortedCars = (state, getters) => {
    const cars = getters.currentCars
    return cars
  }