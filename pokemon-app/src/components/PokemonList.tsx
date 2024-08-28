import React from 'react';
import { Card, CardContent, CardMedia, Box, Typography } from '@mui/material';
import { Pokemon } from '../interfaces/pokemon.interfaces';

interface PokemonListProps {
  pokemons: Pokemon[];
  onSelect: (pokemon: Pokemon) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons, onSelect }) => {
  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'space-between',
        margin: '0 auto' 
        }}
      >
      {pokemons.map((pokemon) => (
        <Box key={pokemon.id} sx={{ minWidth: '150px' }}>
          <Card 
            onClick={() => onSelect(pokemon)} 
            sx={{
              cursor: 'pointer', 
              boxShadow: 5,
              borderRadius: 2,
              aspectRatio: '1 / 1',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.05)',
              }
            }}
          >
            <CardContent>
              <CardMedia
                  component="img"
                  alt={pokemon.name}
                  height={100}
                  image={pokemon.imageUrl}
                  title={pokemon.name}
                  style={{ objectFit: 'contain' }}
              />
              <Typography variant="h6">{pokemon.name}</Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default PokemonList;
