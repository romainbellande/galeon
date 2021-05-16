import { Entity, Column, BeforeInsert, AfterLoad } from 'typeorm';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  Validate,
} from 'class-validator';
import { decrypt, encrypt } from '@/utils/crypto';
import { hash } from '@/utils/hash';
import { ApiProperty } from '@nestjs/swagger';
import { IsUnique } from '@/utils/validators/is-unique';
import { Base } from './base.abstract';
import { User as IUser } from '@galeon/data';
import { Exclude } from 'class-transformer';

@Entity()
export class User extends Base implements IUser {
  @Column()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'kikoo9000' })
  pseudo: string;

  @Column({ unique: true })
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ example: 'jdoe@example.com' })
  @Validate(IsUnique, [{ encrypted: true }])
  email: string;

  @Column()
  @IsNotEmpty()
  @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, {
    message:
      'password must have at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character',
  })
  @Exclude()
  @ApiProperty()
  password: string;

  @BeforeInsert()
  async beforeInsert() {
    this.password = await hash(this.password);
    this.pseudo = await encrypt(this.pseudo);
    this.email = await encrypt(this.email);
  }

  @AfterLoad()
  async loadEntity() {
    this.pseudo = await decrypt(this.pseudo);
    this.email = await decrypt(this.email);
    this.id = this.id.toString();
  }
}
