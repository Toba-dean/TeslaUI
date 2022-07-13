import carData from '../../carInfo.json'

const INITIAL_STATE = {
  carlist: carData
}

export const carReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default: 
    return state;
  }
}