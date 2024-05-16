import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Card } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';



const ProductReview = () => {


  const navigate = useNavigate();


  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [value, setValue] = React.useState(2);

  const handleClick = () => {
    if (comment.trim() === '') {
      alert('Lütfen yorum alanını doldurunuz!');
      return;
    }
    
    // Yorum alanı boş değilse
    alert('Değerlendirmeniz başarıyla gönderildi!');
    navigate('/degerlendirmelerim');
  }



  return (
    <Card sx={{ width: '450px', height: '450px', ml: '500px', mt: '70px' }}>
      <>
        <Typography marginLeft={13} mt={5} variant="h6">ÜRÜNÜ DEĞERLENDİRİN</Typography>
        <Box sx={{ borderBottom: "1px solid black ", height: "40px", width: "500px", marginInline: -3 }}></Box>
        <Box sx={{ display: 'flex', marginTop: '50px' }}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Typography sx={{ ml: 6, mb: 15 }}>Puan:</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', marginTop: -15.5, ml: '10px' }}>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ mt: -13, ml: 3, width: '400px' }}>
              <TextField
                id="comment"
                label="Yorum"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={comment}
                onChange={handleCommentChange}
              />
            </Box>
            <Box sx={{ mt: 1, ml: 6 }}>
              <input
                accept="image/*"
                id="photo"
                type="file"
                onChange={handlePhotoChange}
              />
            </Box>
            <Box sx={{ mt: -3, ml: 38 }}>
              <Button onClick={handleClick} variant="contained" color="primary" type="submit">
                Gönder
              </Button>
            </Box>
          </form>
        </Box>
      </>
    </Card>

  );
};

export default ProductReview;