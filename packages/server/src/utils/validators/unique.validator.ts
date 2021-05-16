import {
  ValidationArguments,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Connection, getConnection } from 'typeorm';
import { encrypt } from '../crypto';

interface ConstraintsOptions {
  encrypted?: boolean;
  entity?: string;
}

interface UniqueValidationArguments extends ValidationArguments {
  constraints: [ConstraintsOptions];
}

export abstract class UniqueValidator implements ValidatorConstraintInterface {
  protected constructor(
    protected readonly connection: Connection = getConnection('default'),
  ) {}

  public async validate(value: string, args: UniqueValidationArguments) {
    const { encrypted, entity } = args.constraints[0];

    const count = await this.connection
      .getMongoRepository(entity || args.targetName)
      .count({
        [args.property]: { $eq: encrypted ? await encrypt(value) : value },
      });

    return count <= 0;
  }

  public defaultMessage(args: ValidationArguments) {
    const { entity } = args.constraints[0];
    return `${entity || args.targetName} with the same '${
      args.property
    }' already exist`;
  }
}
