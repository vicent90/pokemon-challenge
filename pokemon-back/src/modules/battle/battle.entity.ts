import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Battle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pokemon1Id: number;

  @Column()
  pokemon2Id: number;

  @Column()
  winnerId: number;

  @Column()
  battleLog: string;
}
