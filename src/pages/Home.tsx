import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';


const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    const pokemonsRedux = useAppSelector((state)=>state.pokemons)
  return (
    <>
    
    </>
  );
};

export default Home;
