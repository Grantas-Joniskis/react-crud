import {
  Box, IconButton, InputAdornment, TextField,
} from '@mui/material';
import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import createId from 'uniqid';

const initialIds = [createId()];

const ImagesField = () => {
  const [imgFieldsIds, setImgFieldsIds] = React.useState<string[]>(initialIds);

  const addImgField = () => setImgFieldsIds([...imgFieldsIds, createId()]);
  const removeImgField = (id: string) => {
    if (imgFieldsIds.length > 1) {
      setImgFieldsIds(imgFieldsIds.filter((imgId) => imgId !== id));
    }
  };

  return (
    <Box sx={{ width: 1 }}>
      {imgFieldsIds.map((id) => (
        <TextField
          key={id}
          label="Image"
          name="images"
          fullWidth
          variant="filled"
          size="small"
          color="error"
          InputProps={imgFieldsIds.length > 1 ? {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => removeImgField(id)}
                  sx={{ color: '#424242', '&:hover': { color: 'error.main' } }}
                >
                  <CancelIcon />
                </IconButton>
              </InputAdornment>
            ),
          } : undefined}
        />
      ))}
      <IconButton
        onClick={() => addImgField()}
        sx={{ color: '#424242' }}
      >
        <AddPhotoAlternateIcon />
      </IconButton>
    </Box>
  );
};

export default ImagesField;
