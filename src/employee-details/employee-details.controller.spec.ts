import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeDetailsController } from './employee-details.controller';
import { EmployeeDetailsService } from './employee-details.service';

describe('EmployeeDetailsController', () => {
  let controller: EmployeeDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeDetailsController],
      providers: [EmployeeDetailsService],
    }).compile();

    controller = module.get<EmployeeDetailsController>(EmployeeDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
