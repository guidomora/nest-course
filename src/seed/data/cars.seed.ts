import { Car } from "src/cars/interfaces/car.interfaces";
import { v4 as uuid4 } from 'uuid';

export const CARS_SEED:Car[] = [
    {
        id:uuid4(),
        brand: "Toyota",
        model: "Corolla"
    },
    {
        id:uuid4(),
        brand: "Honda",
        model: "Civic"
    },    {
        id:uuid4(),
        brand: "Jeep",
        model: "Cherokee"
    },
]