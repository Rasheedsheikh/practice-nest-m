// src/user/dto/create-user.dto.ts
import { IsString, IsEmail, IsEmpty } from 'class-validator';
import { isEmpty } from 'rxjs';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  address: string;

  @IsString() 
  @IsEmpty()// Add validation for issue
  issue: string;
}
