import { registerAs } from '@nestjs/config';
import { join } from 'path';
import { DataSourceOptions } from 'typeorm';

export const databaseConfig = registerAs(
  'database',
  (): DataSourceOptions => ({
    type: 'sqlite',
    database: join(process.cwd(), 'src', 'database', 'pokemon.db'),
    entities: [join(__dirname, '..', '**', '*.entity{.ts,.js}')],
    synchronize: false,
    migrations: [join(__dirname, '..', 'database', 'migrations', '*{.ts,.js}')],
  }),
);

export default databaseConfig;
