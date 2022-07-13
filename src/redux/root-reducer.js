import { combineReducers } from 'redux'
import { carReducer } from './cars/car.reducer'

export default combineReducers({
  cars: carReducer
})