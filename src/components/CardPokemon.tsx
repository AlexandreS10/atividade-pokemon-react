import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { useAppSelector } from '../store/hooks';

const CardPokemon: React.FC = () => {
  const pokemonsRedux = useAppSelector((state) => state.pokemon);

  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia sx={{ height: 200 }} image={pokemonsRedux.pokemons.map((item)=>
        item.types.map(item=>item.type.url)
      )} title="imagem-Pokemon" /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemonsRedux.pokemons.map((item) => item.name)}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          ID:{pokemonsRedux.pokemons.map((item) => item.id)}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Height{pokemonsRedux.pokemons.map((item) => item.height)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Detalhes</Button>
      </CardActions>
    </Card>
  );
};

export default CardPokemon;
