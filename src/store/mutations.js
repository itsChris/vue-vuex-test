export default {
    receivedAll(state, cars) {
        cars.forEach(car => {
            addCar(state, car)
        });
    }
}

function addCar(state, car) {
    state.cars = {
        ...state.cars,
        [car.id]: car
    }

}