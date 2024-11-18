import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDetailDto } from './create-employee-detail.dto';

export class UpdateEmployeeDetailDto extends PartialType(CreateEmployeeDetailDto) {
    employeeId?: string;
}
