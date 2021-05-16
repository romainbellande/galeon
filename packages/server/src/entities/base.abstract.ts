import { ApiResponseProperty } from '@nestjs/swagger';
import {
  CreateDateColumn,
  UpdateDateColumn,
  ObjectID,
  ObjectIdColumn,
  AfterLoad,
} from 'typeorm';

export abstract class Base {
  @ApiResponseProperty({ type: 'string' })
  @ObjectIdColumn()
  id: ObjectID | string;

  @ApiResponseProperty()
  @CreateDateColumn()
  createdAt?: Date;

  @ApiResponseProperty()
  @UpdateDateColumn()
  updatedAt?: Date;

  @AfterLoad()
  async loadEntity() {
    this.id = this.id.toString();
  }
}
