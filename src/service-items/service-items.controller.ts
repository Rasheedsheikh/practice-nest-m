import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiceItemsService } from './service-items.service';
import { CreateServiceItemDto } from './dto/create-service-item.dto';
import { UpdateServiceItemDto } from './dto/update-service-item.dto';
import { ApiResponse } from 'src/API/Response';
import { ServiceItem } from './entities/service-item.entity';

@Controller('service-items')
export class ServiceItemsController {
  constructor(private readonly serviceItemsService: ServiceItemsService) {}

  @Post('createServiceItem')
  create(@Body() createServiceItemDto: CreateServiceItemDto) : Promise<ApiResponse<ServiceItem>> {
    return this.serviceItemsService.create(createServiceItemDto);
  }

  @Get('findAllServiceItems')
  findAll() : Promise<ApiResponse<ServiceItem[]>> {
    return this.serviceItemsService.findAll();
  }

  @Post('findOneServiceItem')
  findOne(@Body('itemId') id: string) {
    return this.serviceItemsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceItemDto: UpdateServiceItemDto) {
    return this.serviceItemsService.update(+id, updateServiceItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceItemsService.remove(+id);
  }
}
