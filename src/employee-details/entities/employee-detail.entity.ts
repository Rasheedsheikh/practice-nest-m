import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('employee_details')
export class EmployeeDetail {
    @PrimaryGeneratedColumn('uuid')
    employee_id : string;

    @Column({ nullable : true })
    employee_name : string;

    @Column({ nullable : true })
    employee_email : string;

    @Column({ nullable : true })
    employee_mobile_number : string;

    @Column({ nullable : true })
    employee_role : string;

    @Column({ nullable : true })
    employee_aadhaar_number : string;

    @Column({ nullable : true })
    employee_pan_number : string;

    @Column({ nullable : true })
    employee_address : string;

    @Column({ nullable : true })
    employee_State : string;

    @Column({ nullable : true })
    employee_district : string;

    @Column({ nullable : true })
    employee_pincode : string;

    @Column({ nullable : true })
    created_at : Date;

    @Column({ nullable : true })
    created_by : string;
}
