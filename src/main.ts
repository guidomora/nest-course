import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // solo deja recibir la data que espero, si alguien manda algo de mas no lo recibimos
      forbidNonWhitelisted: true, // si recibimos data de mas, arroja un error
    })
  )

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
