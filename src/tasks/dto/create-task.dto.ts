import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { Priority } from '../emuns/priority.enum';

export class CreateTaskDto {
  @ApiProperty({ example: 'do it!', required: true })
  @IsNotEmpty()
  task: string;

  @ApiProperty({ enum: Priority, example: Priority.LOW, required: false })
  @IsEnum(Priority)
  priority: Priority;
}
