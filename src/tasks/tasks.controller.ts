import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { EntityNotFoundExceptionFilter } from 'src/filters/entity-not-found-exception.filter';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Task } from './entities/task.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('tasks')
@UsePipes(ValidationPipe)
@UseFilters(EntityNotFoundExceptionFilter)
@ApiTags('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiCreatedResponse({ type: Task })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  @ApiOkResponse({ type: [Task] })
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Task })
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: [UpdateResult] })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: [DeleteResult] })
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
