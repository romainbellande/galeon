import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Config } from './config';

import * as entities from './entities';

console.log('Config.DATABASE_URL :>> ', Config.DATABASE_URL);

const ormConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: Config.DATABASE_URL,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  entities: Object.values(entities),
  migrations: ['dist/migrations/*{.ts,.js}'],
  migrationsRun: true,
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default ormConfig;
