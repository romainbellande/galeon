import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsOptional, IsString } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Board } from './board.entity';
import { List } from './list.entity';

@Entity()
export class Card {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @IsString()
  @Column()
  title: string;

  @ApiProperty()
  @Column('float')
  @IsEmpty()
  pos: number;

  @ApiProperty()
  @IsOptional()
  @Column()
  description?: string;

  @ApiProperty()
  @IsOptional()
  @Column('boolean', { default: false })
  closed: boolean;

  @ManyToOne(() => Board, (board) => board.cards)
  board: Board;

  @ApiProperty()
  @ManyToOne(() => List)
  list: List;

  @ApiProperty()
  @CreateDateColumn()
  createdAt?: string;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt?: string;
}
