import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  InputAdornment,
} from '@material-ui/core';
import { Add, Edit, Delete } from '@material-ui/icons';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function RegisteredCards() {
  // Örnek kartlar veritabanı
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'John Doe',
      cardNumber: '1234 5678 9012 3456',
      expiryDate: '12/23',
      cvv: '123',
      phoneNumber: '+905555555555',
    },
    {
      id: 2,
      name: 'Jane Smith',
      cardNumber: '1111 2222 3333 4444',
      expiryDate: '01/25',
      cvv: '456',
      phoneNumber: '+905555555555',
    },
  ]);

  // Kart düzenleme / ekleme açılır penceresi
  const [open, setOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  const handleClickOpen = (card) => {
    setCurrentCard(card);
    setOpen(true);
  };
const handleClose = () => {
    setOpen(false);
    setCurrentCard(null);
  };
// Yeni kart ekleme
  const [newCard, setNewCard] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    phoneNumber: '',
  });

  const handleAddCard = () => {
    // Yeni kartı ekleyin
    setCards((prevCards) => [
      ...prevCards,
      {
        id: Date.now(),
        ...newCard,
      },
    ]);

    // Formu sıfırlayın ve pencereyi kapatın
    setNewCard({
      name: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      phoneNumber: '',
    });
    handleClose();
  };

  // Kart silme
  const handleDeleteCard = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="registered cards">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Card Number</TableCell>
              <TableCell align="center">Expiry Date</TableCell>
              </TableRow>
              </TableHead>
              </Table>
              </TableContainer>
              </div>
  )
}