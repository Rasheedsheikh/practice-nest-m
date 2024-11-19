import { Injectable } from '@nestjs/common';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetail } from './entities/order-detail.entity';
import { Repository } from 'typeorm';
import { ApiResponse, ApiResponseStatus } from 'src/API/Response';

@Injectable()
export class OrderDetailsService {
  constructor(@InjectRepository(OrderDetail) private orderDetailRepository: Repository<OrderDetail>, ){}

  async create(createOrderDetailDto: CreateOrderDetailDto) : Promise<ApiResponse<OrderDetail>> {

    const { serviceItemId, customerFirstName, customerLastName, email, contactNumber, doorNumber, street, city, district, pinCode } = createOrderDetailDto;

    const orderItems = this.orderDetailRepository.create({
      item_id : serviceItemId,
      customer_first_name : customerFirstName,
      customer_last_name : customerLastName,
      email : email,
      contact_number : contactNumber,
      door_number : doorNumber,
      street : street,
      city : city,
      district : district,
      pincode : pinCode,
      created_at : new Date()
    })

    const savedItem = await this.orderDetailRepository.save(orderItems);

    console.log(savedItem, 'savedItem')

    const result : ApiResponse<OrderDetail> = {
      status : ApiResponseStatus.SUCCESS,
      statuscode : 200,
      data : savedItem
    }

    return result;
  }

  async findAll(): Promise <ApiResponse<OrderDetail[]>> {

    let orderItems = await this.orderDetailRepository.find({ order : { created_at : 'DESC' } });

    if( orderItems ){
      let result : ApiResponse<OrderDetail[]> = {
        status: ApiResponseStatus.SUCCESS,
        statuscode : 200,
        data : orderItems
      }
      return result;
    } else{
      let result : ApiResponse<OrderDetail[]> = {
        status: ApiResponseStatus.ERROR,
        statuscode : 400,
        data : []
      }
      return result;
    }
  }

  async findOneByServiceItem(id: string) : Promise<ApiResponse<OrderDetail[]>> {

    let orderItems = await this.orderDetailRepository.find({ where : { item_id : id }, order : { created_at : 'DESC' } });

    if( orderItems ){
      let result : ApiResponse<OrderDetail[]> = {
        status: ApiResponseStatus.SUCCESS,
        statuscode : 200,
        data : orderItems
      }
      return result;
    } else{
      let result : ApiResponse<OrderDetail[]> = {
        status: ApiResponseStatus.ERROR,
        statuscode : 400,
        data : []
      }
      return result;
    }
  }

  async findOne(id: string) : Promise<ApiResponse<OrderDetail>> {

    let orderItems = await this.orderDetailRepository.findOne({ where : { order_id : id } });

    if( orderItems ){
      let result : ApiResponse<OrderDetail> = {
        status: ApiResponseStatus.SUCCESS,
        statuscode : 200,
        data : orderItems
      }
      return result;
    } else{
      let result : ApiResponse<OrderDetail> = {
        status: ApiResponseStatus.ERROR,
        statuscode : 400,
        data : []
      }
      return result;
    }
  }

  async update(updateOrderDetailDto: UpdateOrderDetailDto) {

    let orderDetail = await this.orderDetailRepository.findOne({ where : { order_id : updateOrderDetailDto.orderId } });

    orderDetail.category = updateOrderDetailDto.category;
    orderDetail.type_load = updateOrderDetailDto.typeLoad;
    orderDetail.brand_name = updateOrderDetailDto.brandName;
    orderDetail.problems = updateOrderDetailDto.problems;
    orderDetail.date_of_service = updateOrderDetailDto.dateOfService;
    orderDetail.follow_date = updateOrderDetailDto.followDate;
    orderDetail.technician = updateOrderDetailDto.technician;
    orderDetail.payment_details = updateOrderDetailDto.paymentDetails;
    orderDetail.complete_details = updateOrderDetailDto.completeDetails;
    orderDetail.inspect_date = updateOrderDetailDto.inspectDate;
    orderDetail.spare_value = updateOrderDetailDto.spareValue;
    orderDetail.total_bill = updateOrderDetailDto.totalBill;
    orderDetail.in_time = updateOrderDetailDto.inTime;
    orderDetail.out_time = updateOrderDetailDto.outTime;
    orderDetail.review = updateOrderDetailDto.Review;
    orderDetail.updated_at = new Date();
    orderDetail.updated_by = updateOrderDetailDto.updatedBy;

    let updatedData = await this.orderDetailRepository.save(orderDetail);

    let response : ApiResponse<OrderDetail> = {
      status : ApiResponseStatus.SUCCESS,
      statuscode : 200,
      data : [ updatedData ]
    }


    return response;
  }

  remove(id: number) {
    return `This action removes a #${id} orderDetail`;
  }
}
