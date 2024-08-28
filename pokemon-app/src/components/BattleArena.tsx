import React, { useEffect, useState } from 'react';
import { Button, Typography, Box, CircularProgress } from '@mui/material';
import PokemonCard from './PokemonCard';
import { Pokemon } from '../interfaces/pokemon.interfaces';
import { startBattle } from '../services/pokemonService';

interface BattleArenaProps {
  selectedPokemon: Pokemon;
  opponent: Pokemon;
}

const BattleArena: React.FC<BattleArenaProps> = ({ selectedPokemon, opponent }) => {
  const [result, setResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => setResult(''), [selectedPokemon, opponent]);

  const handleStartBattle = async () => {
    try {
      setIsLoading(true);
      const { winnerId } = await startBattle(selectedPokemon.id, opponent.id);
      setResult(
        winnerId === selectedPokemon.id
          ? `${selectedPokemon.name} wins!`
          : `${opponent.name} wins!`
      );
    } catch (error) {
      console.error(error);
      setResult('Battle failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {result && (
        <Typography
          variant="h5"
          sx={{
            backgroundColor: '#cde3e9',
            p: 1.5,
            borderRadius: 1.5,
            border: 1.5,
          }}
        >
          {result}
        </Typography>
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          gap: 0.5,
        }}
      >
        <PokemonCard pokemon={selectedPokemon} />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
          <Button
            variant="contained"
            onClick={handleStartBattle}
            sx={{
              boxShadow: 5,
              backgroundColor: '#486d0d',
              px: 4,
              py: 1,
              fontSize: 'inherit',
              textTransform: 'capitalize',
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Start Battle'
            )}
          </Button>
        </Box>
        <PokemonCard pokemon={opponent} />
      </Box>
    </Box>
  );
};

export default BattleArena;
