import { Injectable } from '@nestjs/common';
import { CreateEmployeeDetailDto } from './dto/create-employee-detail.dto';
import { UpdateEmployeeDetailDto } from './dto/update-employee-detail.dto';
import { ApiResponse, ApiResponseStatus } from 'src/API/Response';
import { EmployeeDetail } from './entities/employee-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeDetailsService {
  constructor (@InjectRepository(EmployeeDetail) private employeeDetailRepository : Repository<EmployeeDetail>, ){}

  async create(createEmployeeDetailDto: CreateEmployeeDetailDto) : Promise<ApiResponse<EmployeeDetail>> {

    const { employeeName, employeeEmail, employeeMobileNumber, employeeRole, employeeAadhaarNumber, employeePanNumber, employeeAddress, employeeState, employeeDistrict, employeePincode, created_by } = createEmployeeDetailDto;

    const employeeDetails = this.employeeDetailRepository.create({
      employee_name : employeeName,
      employee_email : employeeEmail,
      employee_mobile_number : employeeMobileNumber,
      employee_role : employeeRole,
      employee_aadhaar_number : employeeAadhaarNumber,
      employee_pan_number : employeePanNumber,
      employee_address : employeeAddress,
      employee_State : employeeState,
      employee_district : employeeDistrict,
      employee_pincode : employeePincode,
      created_at : new Date(),
      created_by : created_by
    });

    const savedItem = await this.employeeDetailRepository.save(employeeDetails);

    const result : ApiResponse<EmployeeDetail> = {
      status : ApiResponseStatus.SUCCESS,
      statuscode : 200,
      data : savedItem
    }

    return result;
  }

  async findAll() : Promise<ApiResponse<EmployeeDetail[]>> {
    let employeeDetails = await this.employeeDetailRepository.find();

    if( employeeDetails ){
      let result : ApiResponse<EmployeeDetail[]> = {
        status: ApiResponseStatus.SUCCESS,
        statuscode : 200,
        data : employeeDetails
      }
      return result;
    } else{
      let result : ApiResponse<EmployeeDetail[]> = {
        status: ApiResponseStatus.ERROR,
        statuscode : 400,
        data : []
      }
      return result;
    }
  }

  async findOne(id: string) {
    let employeeDetails = await this.employeeDetailRepository.findOne({ where : { employee_id : id } })

    if( employeeDetails ){
      let result : ApiResponse<EmployeeDetail> = {
        status: ApiResponseStatus.SUCCESS,
        statuscode : 200,
        data : employeeDetails
      }
      return result;
    } else{
      let result : ApiResponse<EmployeeDetail> = {
        status: ApiResponseStatus.ERROR,
        statuscode : 400,
        data : []
      }
      return result;
    }
  }

  update(id: number, updateEmployeeDetailDto: UpdateEmployeeDetailDto) {
    return `This action updates a #${id} employeeDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeeDetail`;
  }
}
