import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {
    @Get()
    getAllCars() {
      return ['car1', 'car2', 'car3'];
    }
}
