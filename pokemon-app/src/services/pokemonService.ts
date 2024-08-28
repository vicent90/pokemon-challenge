import axios from 'axios';
import { Pokemon } from '../interfaces/pokemon.interfaces';
import { BattleResult } from '../interfaces/battle.interface';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:300';

export const getPokemons = async (): Promise<Pokemon[]> => {
  const response = await axios.get<Pokemon[]>(`${API_URL}/pokemon`);
  return response.data;
};

export const startBattle = async (pokemonId: number, opponentId: number): Promise<BattleResult> => {
  const response = await axios.post(`${API_URL}/battle`, { pokemonId, opponentId });
  return response.data;
};
