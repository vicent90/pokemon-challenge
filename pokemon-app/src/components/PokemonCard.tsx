import React from 'react';
import { Card, CardContent, Typography, CardMedia, Divider } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Pokemon } from '../interfaces/pokemon.interfaces';
import styled from '@emotion/styled';

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#d4dbc8',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#9add2e',
  },
}));

const mapStatToProgress = (stat: number) => Math.min((stat / 6) * 100, 100);

const PokemonCard: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <Card sx={{
      minWidth: 300,
      boxShadow: 5,
      borderRadius: 2,
    }}>
      <CardContent>
        <CardMedia
          component="img"
          alt={pokemon.name} 
          image={pokemon.imageUrl}
          title={pokemon.name}
          height={200}
          style={{ objectFit: 'contain' }}
        />
        <Typography mt={1} variant="h5">{pokemon.name}</Typography>
        <Divider />
        <Typography mt={0.5} variant="body2">HP</Typography>
        <BorderLinearProgress variant="determinate" value={mapStatToProgress(pokemon.hp)} />
        <Typography mt={0.5} variant="body2">Attack</Typography>
        <BorderLinearProgress variant="determinate" value={mapStatToProgress(pokemon.attack)} />
        <Typography mt={0.5} variant="body2">Defense</Typography>
        <BorderLinearProgress variant="determinate" value={mapStatToProgress(pokemon.defense)} />
        <Typography mt={0.5} variant="body2">Speed</Typography>
        <BorderLinearProgress variant="determinate" value={mapStatToProgress(pokemon.speed)} />
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
