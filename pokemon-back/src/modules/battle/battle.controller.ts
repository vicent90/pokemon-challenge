import { Controller, Post, Body } from '@nestjs/common';
import { BattleService } from './battle.service';
import { Battle } from './battle.entity';

@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Post()
  fight(
    @Body() fightDto: { pokemonId: number; opponentId: number },
  ): Promise<Battle> {
    return this.battleService.fight(fightDto.pokemonId, fightDto.opponentId);
  }
}
