import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsService: CarsService
  ) { }

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }


  // ParseIntPipe es un decorador de Nest que se encarga de parsear a un numero
  // en caso de que se mande algo distinto a un numero en formato string, arroja un mensaje de error
  // diciendo que se esperaba un numeric string y un status 400
  @Get(":id")
  getCarById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return this.carsService.findOneById(id)

  }

  //el tipo de data a recibir en el body ya casi que viene autimaticamente configurada por nest
  @Post()
  create(@Body() body: any) {
    return body
  }


  @Patch(':id')
  updateCar(
    @Param('id', ParseIntPipe)
    @Body() body: any) {
    return body
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id
    }
  }
}
