import { Module } from '@nestjs/common';
import { EmployeeDetailsService } from './employee-details.service';
import { EmployeeDetailsController } from './employee-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeDetail } from './entities/employee-detail.entity';

@Module({
  imports : [ TypeOrmModule.forFeature([EmployeeDetail]), EmployeeDetailsModule],
  controllers: [EmployeeDetailsController],
  providers: [EmployeeDetailsService],
})
export class EmployeeDetailsModule {}
