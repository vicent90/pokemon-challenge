import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePokemonAndBattleTables1724814402741
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE pokemon (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(255) NOT NULL,
        hp INTEGER NOT NULL,
        attack INTEGER NOT NULL,
        defense INTEGER NOT NULL,
        speed INTEGER NOT NULL,
        type VARCHAR(50),
        imageUrl VARCHAR(255)
      )
    `);

    await queryRunner.query(`
      CREATE TABLE battle (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        pokemon1Id INTEGER NOT NULL,
        pokemon2Id INTEGER NOT NULL,
        winnerId INTEGER NOT NULL,
        battleLog TEXT NOT NULL,
        FOREIGN KEY (pokemon1Id) REFERENCES pokemon(id),
        FOREIGN KEY (pokemon2Id) REFERENCES pokemon(id),
        FOREIGN KEY (winnerId) REFERENCES pokemon(id)
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE battle`);
    await queryRunner.query(`DROP TABLE pokemon`);
  }
}
