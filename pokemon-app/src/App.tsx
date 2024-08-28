import React, { useState, useEffect, useCallback } from 'react';
import { Container, Typography, Box } from '@mui/material';
import PokemonList from './components/PokemonList';
import BattleArena from './components/BattleArena';
import { Pokemon } from './interfaces/pokemon.interfaces';
import { getPokemons } from './services/pokemonService';

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [battle, setBattle] = useState<{ selectedPokemon: Pokemon; opponent: Pokemon } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokemons();
        setPokemons(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSelectPokemon = useCallback((pokemon: Pokemon) => {
    const availablePokemons = pokemons.filter(p => p.id !== pokemon.id);
    const randomOpponent = availablePokemons[Math.floor(Math.random() * availablePokemons.length)];
    setBattle({ selectedPokemon: pokemon, opponent: randomOpponent });
  }, [pokemons]);

  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom>
        Battle of Pokemon
      </Typography>
      
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h5" gutterBottom>
          Select your pokemon
        </Typography>
        <PokemonList pokemons={pokemons} onSelect={handleSelectPokemon} />
      </Box>

      {battle && (
        <BattleArena
          selectedPokemon={battle.selectedPokemon}
          opponent={battle.opponent}
        />
      )}
    </Container>
  );
};

export default App;
