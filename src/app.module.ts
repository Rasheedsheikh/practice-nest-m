import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // or your preferred database
      host: 'localhost',
      port: 5433,
      password: 'First@1234',
      username: 'postgres',
      database: 'postgres',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}