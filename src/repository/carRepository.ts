import db from "../config/database.js";
import prisma from '../config/database.js'

async function getCars() {
  return await prisma.cars.findMany()
}

async function getCar(id: number) {
  const data = await prisma.cars.findFirst({
    where: { id: id }
  })
  // const data = await db.query(`SELECT * FROM cars WHERE id = $1`, [id]);
  return data;
}

async function getCarWithLicensePlate(licensePlate: string) { // e eu esse aqui
  const data = await prisma.cars.findFirst({
    where: { licensePlate: licensePlate }
  })
  // const data = await db.query(`SELECT * FROM cars WHERE "licensePlate" = $1`, [licensePlate]);
  return data;
}

async function createCar(model: string, licensePlate: string, year: string, color: string) {
  await prisma.cars.create({
    data: {model, licensePlate, year, color}
  })
}

async function upsertCar(body) {
  return await prisma.cars.upsert({
    where:{
      id: body.id || 0
    },
    update: body,
    create:body
  })
}

async function deleteCar(id: number) {
  await prisma.cars.delete({
    where: {
      id: id,
    }
  })
}
  const carRepository = {
    getCar,
    getCarWithLicensePlate,
    getCars,
    createCar,
    upsertCar,
    deleteCar
  }

  export default carRepository;