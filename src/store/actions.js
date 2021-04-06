import * as api from '../api'

export const getAllCars = ({ commit }) => {
    api.getAllCars(cars => {
        commit('receivedAll', cars)
    })
}