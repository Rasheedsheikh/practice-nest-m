import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { ServiceItemsModule } from './service-items/service-items.module';
import { ServiceItem } from './service-items/entities/service-item.entity';
import { OrderDetailsModule } from './order-details/order-details.module';
import { OrderDetail } from './order-details/entities/order-detail.entity';
import { EmployeeDetailsModule } from './employee-details/employee-details.module';
import { EmployeeDetail } from './employee-details/entities/employee-detail.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // or your preferred database
      host: '3.106.236.250',
      port: 5432,
      schema : 'public',
      password: 'mithra@1234',
      username: 'mithratech',
      database: 'mithradb',
      entities: [User, ServiceItem, OrderDetail, EmployeeDetail],
      synchronize: true,
    }),
    UserModule,
    ServiceItemsModule,
    OrderDetailsModule,
    EmployeeDetailsModule,
  ],
})
export class AppModule {}