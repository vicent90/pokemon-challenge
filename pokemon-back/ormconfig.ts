import { ConfigModule } from '@nestjs/config';
import databaseConfig from './src/config/database.config';

ConfigModule.forRoot({
  isGlobal: true,
  load: [databaseConfig],
});

export default databaseConfig();
