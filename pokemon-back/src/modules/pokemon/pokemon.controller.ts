import { Controller, Get, Post, Body } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.entity';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  findAll(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }

  @Post()
  create(@Body() pokemon: Pokemon): Promise<Pokemon> {
    return this.pokemonService.create(pokemon);
  }
}
