import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BattleService } from './battle.service';
import { BattleController } from './battle.controller';
import { Battle } from './battle.entity';
import { PokemonModule } from '../pokemon/pokemon.module';

@Module({
  imports: [TypeOrmModule.forFeature([Battle]), PokemonModule],
  providers: [BattleService],
  controllers: [BattleController],
})
export class BattleModule {}
