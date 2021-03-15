import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { Priority } from '../emuns/priority.enum';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty({ example: 'do it!', required: false })
  @IsNotEmpty()
  task: string;

  @ApiProperty({ enum: Priority, example: Priority.LOW, required: false })
  @IsEnum(Priority)
  priority: Priority;
}
