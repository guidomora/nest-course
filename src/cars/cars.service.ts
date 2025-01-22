import { BadGatewayException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interfaces';
import { v4 as uuid4 } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';



@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid4(),
    //   brand: 'Toyota',
    //   model: 'Corolla'
    // },
    // {
    //   id: uuid4(),
    //   brand: "Honda",
    //   model: 'Civic'
    // },
    // {
    //   id: uuid4(),
    //   brand: 'Jeep',
    //   model: 'Cherokee'
    // },
  ];

  findAll() {
    return this.cars
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id == id)
    if (!car) {
      throw new NotFoundException(`car with ${id} not found`)
    }
    return car
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid4(),
      ...createCarDto
    }

    this.cars.push(car)

    return car
  }

  update(id:string, updateCarDto:UpdateCarDto){
    let carDb = this.findOneById(id)

    if (updateCarDto.id && carDb.id !== id)
      throw new BadGatewayException('Car id is not valid inside body')

    this.cars = this.cars.map(car => {
      if (car.id === id) {
        carDb = {
          ...carDb,
          ...updateCarDto,
          id
        }
        return carDb
      }
      return car 
    })

    return carDb
  }


  delete(id:string){
    let carDb = this.findOneById(id)

    this.cars = this.cars.filter(car =>
      car.id !== id
    )

    return {
      message:'deleted success',
      deletedCar: carDb
    }
  }

  fillCarsWithSeedData(cars:Car[]){
    this.cars = cars
  }
}
