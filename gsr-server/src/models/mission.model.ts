import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Exclude } from 'class-transformer';
@Entity()
export class Mission {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column()
  reward: number;

  @Column()
  active: boolean;

  @Exclude() @Column() createdAt: Date = new Date();
  @Exclude() @Column() createdBy: string = 'user';
  @Exclude() @Column() isDeleted: boolean = false;
}
