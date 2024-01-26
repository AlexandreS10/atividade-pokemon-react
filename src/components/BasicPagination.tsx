/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface BasicPaginationProps {
  pageCount: number;
  onChange: (page: number) => void;
  currentPage: number;
}
export const BasicPagination: React.FC<BasicPaginationProps> = ({ pageCount, onChange }) => {
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    onChange(value);
  };

  return (
    <Stack spacing={2}>
      {/* Use o componente Pagination do Material-UI */}
      <Pagination count={pageCount} color="primary" onChange={handleChange} />
    </Stack>
  );
};
