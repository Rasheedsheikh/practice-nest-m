import { Module } from '@nestjs/common';
import { ServiceItemsService } from './service-items.service';
import { ServiceItemsController } from './service-items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceItem } from './entities/service-item.entity';

@Module({
  imports : [ TypeOrmModule.forFeature([ ServiceItem ]), ServiceItemsModule],
  controllers: [ServiceItemsController],
  providers: [ServiceItemsService],
})
export class ServiceItemsModule {}
