import { Column } from 'typeorm';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Building as IBuilding } from '@galeon/data';

export class Building implements IBuilding {
  @Column()
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 1 })
  level: number;

  @Column()
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 1 })
  resourceAmount: number;
}
