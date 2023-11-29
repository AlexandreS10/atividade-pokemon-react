import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
// import { useAppDispatch } from '../store/hooks';
import { Grid } from '@mui/material';
// import { useEffect } from 'react';
// import { getPokemon } from '../store/pokemons/pokemonSlice';

const Home: React.FC = () => {
  // const dispatch = useAppDispatch();
  // const pokemonsRedux = useAppSelector((state) => state.pokemons);

  //   useEffect(() => {
  //     dispatch(getPokemon());
  // },[]);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: 'red' }}>
            <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', sm: 'block' } }}
            >
              <CatchingPokemonIcon style={{ fontSize: '50px' }} />
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container spacing={2}></Grid>
    </>
  );
};

export default Home;
