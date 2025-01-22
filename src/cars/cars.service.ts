import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interfaces';
import { v4 as uuid4 } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';


@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid4(),
      brand: 'Toyota',
      model: 'Corolla'
    },
    {
      id: uuid4(),
      brand: "Honda",
      model: 'Civic'
    },
    {
      id: uuid4(),
      brand: 'Jeep',
      model: 'Cherokee'
    },
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
}
