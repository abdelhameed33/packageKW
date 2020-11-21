import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToMany, ManyToOne } from "typeorm";


@Entity()
export class Category extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;


}