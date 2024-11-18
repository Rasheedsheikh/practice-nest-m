import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('service_items')
export class ServiceItem {
    @PrimaryGeneratedColumn('uuid')
    item_id : string;

    @Column({ nullable : true })
    item_name : string;

    @Column({ nullable : true })
    item_img : string;

    @Column({ nullable : true })
    created_at : Date;

    @Column({ nullable : true })
    created_by : string;
}
