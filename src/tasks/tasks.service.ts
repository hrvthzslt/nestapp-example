import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private readonly tasksRepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.save(createTaskDto);
  }

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  findOne(id: number): Promise<Task> {
    return this.tasksRepository.findOneOrFail(id);
  }

  update(id: number, updateTaskDto: UpdateTaskDto): Promise<UpdateResult> {
    return this.tasksRepository.update(id, updateTaskDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.tasksRepository.delete(id);
  }
}
