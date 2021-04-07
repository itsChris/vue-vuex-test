export default {
    receivedAll(state, cars) {
        cars.forEach(car => {
            addCar(state, car)
        });
    },
    receivedCar(state, car) {
        console.log(`Mutation-receivedCar->will-set-car ${car.id}`);
        state.car = car
    }
}

function addCar(state, car) {
    state.cars = {
        ...state.cars,
        [car.id]: car
    }

}