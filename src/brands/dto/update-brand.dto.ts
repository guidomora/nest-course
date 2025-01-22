import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import { IsString, MinLength } from 'class-validator';

// PartialType siginfica que se extiende la clase pero de forma opcional
// export class UpdateBrandDto extends PartialType(CreateBrandDto) {
export class UpdateBrandDto { 
      @IsString()
      @MinLength(1)
      name: string;
}
