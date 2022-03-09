import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'

const KEY = 'cars_db'
_createCars()

export const carService = {
  query,
  getById,
  remove,
  save,
  getEmptyCar,
}

function query() {
  return storageService.query(KEY)
}

function getById(carId) {
  return storageService.get(KEY, carId)
}

function remove(carId) {
  return storageService.remove(KEY, carId)
}

function save(car) {
  if (car.id) return storageService.put(KEY, car)
  return storageService.post(KEY, car)
}

function getEmptyCar() {
  return {
    vendor: '',
    speed: 0,
  }
}

function _createCars() {
  let cars = utilService.loadFromStorage(KEY)
  if (!cars || !cars.length) {
    cars = [
      { id: utilService.makeId(), vendor: 'Fiat', speed: 30 },
      { id: utilService.makeId(), vendor: 'Honda', speed: 87 },
      { id: utilService.makeId(), vendor: 'Toyota', speed: 54 },
    ]
    utilService.saveToStorage(KEY, cars)
  }
  return cars
}
