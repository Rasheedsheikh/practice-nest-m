import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeDetailsService } from './employee-details.service';
import { CreateEmployeeDetailDto } from './dto/create-employee-detail.dto';
import { UpdateEmployeeDetailDto } from './dto/update-employee-detail.dto';
import { ApiResponse } from 'src/API/Response';
import { EmployeeDetail } from './entities/employee-detail.entity';

@Controller('employee-details')
export class EmployeeDetailsController {
  constructor(private readonly employeeDetailsService: EmployeeDetailsService) {}

  @Post('createEmployeeDetails')
  create(@Body() createEmployeeDetailDto: CreateEmployeeDetailDto) : Promise<ApiResponse<EmployeeDetail>> {
    return this.employeeDetailsService.create(createEmployeeDetailDto);
  }

  @Get('findAllEmployeeDetails')
  findAll() : Promise<ApiResponse<EmployeeDetail[]>> {
    return this.employeeDetailsService.findAll();
  }

  @Post('findOneEmployeeDetail')
  findOne(@Body('employeeId') id: string) : Promise<ApiResponse<EmployeeDetail>> {
    return this.employeeDetailsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDetailDto: UpdateEmployeeDetailDto) {
    return this.employeeDetailsService.update(+id, updateEmployeeDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeDetailsService.remove(+id);
  }
}
