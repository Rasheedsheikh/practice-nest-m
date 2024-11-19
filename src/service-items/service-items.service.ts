import { Injectable } from '@nestjs/common';
import { CreateServiceItemDto } from './dto/create-service-item.dto';
import { UpdateServiceItemDto } from './dto/update-service-item.dto';
import { ApiResponse, ApiResponseStatus } from 'src/API/Response';
import { ServiceItem } from './entities/service-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceItemsService {
  constructor ( @InjectRepository(ServiceItem) private serviceItemRepository : Repository<ServiceItem>, ){}

  async create(createServiceItemDto: CreateServiceItemDto) : Promise <ApiResponse<ServiceItem>> {

    const { itemImg, itemName } = createServiceItemDto;

    const serviceItems = this.serviceItemRepository.create({
      item_name : itemName,
      item_img : itemImg,
      created_at : new Date()
    })

    const savedItem = await this.serviceItemRepository.save(serviceItems);

    const result : ApiResponse<ServiceItem> = {
      statuscode : 200,
      status: ApiResponseStatus.SUCCESS,
      data : savedItem
    }

    return result;
  }

  async findAll(): Promise <ApiResponse<ServiceItem[]>> {

    let serviceItems = await this.serviceItemRepository.find();
    if( serviceItems ){
      let result : ApiResponse<ServiceItem[]> = {
        status: ApiResponseStatus.SUCCESS,
        statuscode : 200,
        data : serviceItems
      }
      return result;
    } else{
      let result : ApiResponse<ServiceItem[]> = {
        status: ApiResponseStatus.ERROR,
        statuscode : 400,
        data : []
      }
      return result;
    }
  }

  async findOne(id: string) {
    let serviceItems = await this.serviceItemRepository.findOne({ where : { item_id : id } });
    if( serviceItems ){
      let result : ApiResponse<ServiceItem> = {
        status: ApiResponseStatus.SUCCESS,
        statuscode : 200,
        data : serviceItems
      }
      return result;
    } else{
      let result : ApiResponse<ServiceItem> = {
        status: ApiResponseStatus.ERROR,
        statuscode : 400,
        data : []
      }
      return result;
    }
  }

  update(id: number, updateServiceItemDto: UpdateServiceItemDto) {
    return `This action updates a #${id} serviceItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceItem`;
  }
}
