import * as api from '../api'

export const getCurrentCarAction = ({ commit }) => {
    var car = {
        id: '3',
        Make: 'BMW',
        Model: 'M6',
        Year: '2018'
    }
    console.log(`Action-getCurrentCarAction->Will-commit ${car.id}`);
    commit('receivedCar', car)
}
export const getAllCarsAction = ({ commit }) => {
    api.getAllCars(cars => {
        commit('receivedAll', cars)
    })
}