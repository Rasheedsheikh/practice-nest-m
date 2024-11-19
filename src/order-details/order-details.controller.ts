import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { ApiResponse } from 'src/API/Response';
import { OrderDetail } from './entities/order-detail.entity';

@Controller('order-details')
export class OrderDetailsController {
  constructor(private readonly orderDetailsService: OrderDetailsService) {}

  @Post('createOrder')
  create(@Body() createOrderDetailDto: CreateOrderDetailDto) : Promise<ApiResponse<OrderDetail>> {
    return this.orderDetailsService.create(createOrderDetailDto);
  }

  @Get('findAllOrders')
  findAll() : Promise<ApiResponse<OrderDetail[]>> {
    return this.orderDetailsService.findAll();
  }

  @Post('findOneByServiceItem')
  findOneByServiceItem(@Body('itemId') id: string) : Promise<ApiResponse<OrderDetail[]>> {
    return this.orderDetailsService.findOneByServiceItem(id);
  }

  @Post('findOneOrderDetail')
  findOne(@Body('orderId') id: string) : Promise<ApiResponse<OrderDetail>> {
    return this.orderDetailsService.findOne(id);
  }

  @Post('updateOrderDetails')
  update(@Body() updateOrderDetailDto: UpdateOrderDetailDto) {
    return this.orderDetailsService.update( updateOrderDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderDetailsService.remove(+id);
  }
}
