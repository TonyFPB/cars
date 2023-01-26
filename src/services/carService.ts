import notFoundError from "../errors/notFoundError.js";
import conflictError from "../errors/conflictError.js";
import carRepository from "../repository/carRepository.js";

async function getCars() {
  const cars = await carRepository.getCars();
  return cars;
}

async function getCar(id: number) {
  const car = await carRepository.getCar(id);
  if (!car) {
    throw notFoundError();
  }

  return car;
}

async function createCar(model: string, licensePlate: string, year: string, color: string,) {
  const car = await carRepository.getCarWithLicensePlate(licensePlate);
  // if (car && car.id !== carId) {
  //   throw conflictError(`Car with license plate ${licensePlate} already registered.`)
  // }

  await carRepository.createCar(model, licensePlate, year, color);
}

async function createOrUpdateCar(body) {
  const car = await carRepository.getCarWithLicensePlate(body.licensePlate);
  if (car && car.id !== body.id) {
    throw conflictError(`Car with license plate ${body.licensePlate} already registered.`)
  }
  
  await carRepository.upsertCar(body)
}

async function deleteCar(id: number) {
  await getCar(id);
  await carRepository.deleteCar(id);
}

const carService = {
  getCars,
  getCar,
  createOrUpdateCar,
  createCar,
  deleteCar
}

export default carService;