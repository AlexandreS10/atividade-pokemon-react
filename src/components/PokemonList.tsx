import * as React from 'react';
// import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/hooks';

const PokemonList: React.FC = () => {
  // const dispatch = useDispatch();
  const pokemonsRedux = useAppSelector((state) => state.pokemons);

  return <></>;
};

export default PokemonList;
