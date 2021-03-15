import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Priority } from '../emuns/priority.enum';

@Entity({ name: 'tasks' })
export class Task {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'do it!' })
  @Column()
  task: string;

  @ApiProperty({ enum: Priority, example: Priority.LOW })
  @Column({ type: 'enum', enum: Priority, default: Priority.LOW })
  priority: Priority;
}
