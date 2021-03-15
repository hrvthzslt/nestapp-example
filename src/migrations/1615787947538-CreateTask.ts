import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTask1615787947538 implements MigrationInterface {
  name = 'CreateTask1615787947538';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "tasks_priority_enum" AS ENUM('low', 'high')`,
    );
    await queryRunner.query(
      `CREATE TABLE "tasks" ("id" SERIAL NOT NULL, "task" character varying NOT NULL, "priority" "tasks_priority_enum" NOT NULL DEFAULT 'low', CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tasks"`);
    await queryRunner.query(`DROP TYPE "tasks_priority_enum"`);
  }
}
