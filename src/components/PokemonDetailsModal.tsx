import * as React from 'react';
import { Modal, Card, CardContent, Typography, Button } from '@mui/material';
interface PokemonDetailsModalProps {
  pokemon: {
    id: number;
    name: string;
  };
  onClose: () => void;
}

const PokemonDetailsModal: React.FC<PokemonDetailsModalProps> = ({ pokemon, onClose }) => {
  return (
    <Modal open={true} onClose={onClose}>
      <Card>
        <CardContent>
          <Typography variant="h6">{pokemon.name}</Typography>
          <Typography>ID: {pokemon.id}</Typography>
          {/* Add more details as needed */}
          <Button variant="outlined" onClick={onClose}>
            Close
          </Button>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default PokemonDetailsModal;
