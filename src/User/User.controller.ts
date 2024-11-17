// src/user/user.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userData: Partial<User>): Promise<User> {
    return this.userService.create(userData);
  }
  
  @Get() // Add this line for the GET endpoint
  async findAll(): Promise<User[]> {
    return this.userService.findAll(); // Call the service method to get all users
  }

}
