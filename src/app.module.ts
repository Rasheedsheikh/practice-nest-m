import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceItemsModule } from './service-items/service-items.module';
import { ServiceItem } from './service-items/entities/service-item.entity';
import { OrderDetailsModule } from './order-details/order-details.module';
import { OrderDetail } from './order-details/entities/order-detail.entity';
import { EmployeeDetailsModule } from './employee-details/employee-details.module';
import { EmployeeDetail } from './employee-details/entities/employee-detail.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the configuration globally available
      envFilePath: '.env', // Specify the path to the .env file
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: configService.get<'postgres'>('DB_TYPE'),
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        schema: configService.get<string>('DB_SCHEMA'),
        entities: [ServiceItem, OrderDetail, EmployeeDetail],
        synchronize: false
      }),
    }),
    ServiceItemsModule,
    OrderDetailsModule,
    EmployeeDetailsModule,
  ],
})
export class AppModule {}
