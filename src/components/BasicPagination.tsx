/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getPokemons } from '../store/pokemons/pokemonSlice';
import { useEffect } from 'react';

interface BasicPaginationProps {
  pageCount: number;
  onChange: (page: number) => void;
}
export const BasicPagination: React.FC<BasicPaginationProps> = ({ pageCount, onChange }) => {
  // const pokemonsRedux = useAppSelector((state) => state.pokemons);

  // const dispatch = useAppDispatch();
  // const [page, setPage] = React.useState(1);

  // const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  //   if (event) {
  //     event.preventDefault();
  //   }

  //   onChange(value);

  //   setPage(value);
  // };
  // useEffect(() => {
  //   dispatch(getPokemons(`https://pokeapi.co/api/v2/pokemon?offset=&limit=20`));
  // }, []);

  return (
    <Stack spacing={2}>
      <Pagination count={pageCount} color="primary" />=
    </Stack>
  );
};
