import { ServiceItem } from "src/service-items/entities/service-item.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('order-details')
export class OrderDetail {
    @PrimaryGeneratedColumn('uuid')
    order_id : string;

    @ManyToOne(() => ServiceItem)
    @JoinColumn({ name : 'item_id' })
    service_item_id : string;

    @Column({ nullable : true })
    customer_first_name : string;

    @Column({ nullable : true })
    customer_last_name : string;

    @Column({ nullable : true })
    email : string;
    
    @Column({ nullable : true })
    contact_number : string;
    
    @Column({ nullable : true })
    door_number : string;
    
    @Column({ nullable : true })
    street : string;
    
    @Column({ nullable : true })
    city : string;
    
    @Column({ nullable : true })
    district : string;
    
    @Column({ nullable : true })
    pincode : string;
    
    @Column({ nullable : true })
    category : string;
    
    @Column({ nullable : true })
    type_load : string;
    
    @Column({ nullable : true })
    brand_name : string;
    
    @Column({ nullable : true })
    problems : string;
    
    @Column({ nullable : true })
    date_of_service : Date;
    
    @Column({ nullable : true })
    follow_date : Date;
    
    @Column({ nullable : true })
    technician : string;
    
    @Column({ nullable : true })
    payment_details : string;
    
    @Column({ nullable : true })
    complete_details : string;
    
    @Column({ nullable : true })
    inspect_date : Date;
    
    @Column({ nullable : true })
    spare_value : string;
    
    @Column({ nullable : true })
    total_bill : string;
    
    @Column({ nullable : true })
    in_time : string;
    
    @Column({ nullable : true })
    out_time : string;
    
    @Column({ nullable : true })
    review : string;
    
    @Column({ nullable : true })
    created_at : Date;
    
    @Column({ nullable : true })
    updated_at : Date;
    
    @Column({ nullable : true })
    updated_by : string;
}
