import { Entity, Column } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Base } from './base.abstract';
import { Planet as IPlanet } from '@galeon/data';
import { Buildings } from './buildings.embed';

@Entity()
export class Planet extends Base implements IPlanet {
  @Column()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Homeworld' })
  name: string;

  @Column({ nullable: false })
  ownerId: string;

  @ApiProperty()
  @Column(() => Buildings)
  buildings: Buildings;
}
