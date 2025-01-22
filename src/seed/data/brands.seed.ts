import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid4 } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid4(),
    name: 'Toyota',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid4(),
    name: 'Honda',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid4(),
    name: 'Jeep',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid4(),
    name: 'Tesla',
    createdAt: new Date().getTime(),
  },
];
