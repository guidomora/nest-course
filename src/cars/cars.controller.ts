import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  // ParseIntPipe es un decorador de Nest que se encarga de parsear a un numero
  // en caso de que se mande algo distinto a un numero en formato string, arroja un mensaje de error
  // diciendo que se esperaba un numeric string y un status 400
  // ParseUUIDPipe no lo parsea, solo verifica que sea un uuid y que sea la version correcta
  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    console.log(id);
    return this.carsService.findOneById(id);
  }

  //el tipo de data a recibir en el body ya casi que viene autimaticamente configurada por nest
  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id') id: string,
    @Body()
    updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string ) {
    return this.carsService.delete(id);
  }
}
