import { MigrationInterface, QueryRunner } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';

export class PopulatePokemonTable1724814539113 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const filePath = path.join(__dirname, '..', 'pokemon.json');
    const data = fs.readFileSync(filePath, 'utf8');
    const pokemons = JSON.parse(data).pokemon;

    for (const pokemon of pokemons) {
      await queryRunner.query(
        `
        INSERT INTO pokemon (name, hp, attack, defense, speed, type, imageUrl) VALUES
        (?, ?, ?, ?, ?, ?, ?)
      `,
        [
          pokemon.name,
          pokemon.hp,
          pokemon.attack,
          pokemon.defense,
          pokemon.speed,
          pokemon.type,
          pokemon.imageUrl,
        ],
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM pokemon`);
  }
}
