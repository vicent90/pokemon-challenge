import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Battle } from './battle.entity';
import { PokemonService } from '../pokemon/pokemon.service';

@Injectable()
export class BattleService {
  constructor(
    @InjectRepository(Battle)
    private readonly battleRepository: Repository<Battle>,
    private readonly pokemonService: PokemonService,
  ) {}

  async fight(pokemonId: number, opponentId: number): Promise<Battle> {
    const pokemon1 = await this.pokemonService.findOne(pokemonId);
    const pokemon2 = await this.pokemonService.findOne(opponentId);

    let attacker =
      pokemon1.speed !== pokemon2.speed
        ? pokemon1.speed > pokemon2.speed
          ? pokemon1
          : pokemon2
        : pokemon1.attack > pokemon2.attack
          ? pokemon1
          : pokemon2;

    let defender = attacker === pokemon1 ? pokemon2 : pokemon1;
    let battleLog = '';

    while (pokemon1.hp > 0 && pokemon2.hp > 0) {
      const damage = Math.max(attacker.attack - defender.defense, 1);
      defender.hp -= damage;

      battleLog += `${attacker.name} attacks ${defender.name} and deals ${damage} damage. ${defender.name} has ${defender.hp} HP remaining.\n`;

      if (defender.hp <= 0) break;

      [attacker, defender] = [defender, attacker];
    }

    const winner = pokemon1.hp > 0 ? pokemon1 : pokemon2;

    const battle = this.battleRepository.create({
      pokemon1Id: pokemon1.id,
      pokemon2Id: pokemon2.id,
      winnerId: winner.id,
      battleLog,
    });

    return this.battleRepository.save(battle);
  }
}
