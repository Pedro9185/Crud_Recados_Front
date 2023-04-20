import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Grid, IconButton, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { addNote } from '../store/modules/NotesSlice';
import generateID from '../utils/generateID';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [description, setDescription] = useState<string>('');
  const [descriptionError, setDescriptionError] = useState<boolean>(false);
  const [detail, setDetail] = useState<string>('');
  const [detailError, setDetailError] = useState<boolean>(false);
  useEffect(() => {
    if (description.length) {
      if (description.length < 3) {
        setDescriptionError(true);
      } else {
        setDescriptionError(false);
      }
    } else {
      setDescriptionError(false);
    }
  }, [description]);

  useEffect(() => {
    if (detail.length) {
      if (detail.length < 3) {
        setDetailError(true);
      } else {
        setDetailError(false);
      }
    } else {
      setDetailError(false);
    }
  }, [detail]);

  const handleClean = () => {
    setDescription('');
    setDetail('');
  };
  const handleAdd = () => {
    dispatch(
      addNote({
        description,
        detail,
        id: generateID(),
      }),
    );
    handleClean();
    setOpen(false);
  };

  return (
    <div>
      <IconButton aria-label="delete" onClick={handleOpen}>
        <AddCircleIcon sx={{ fontSize: '50px' }} />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h4">Adicionar Recado</Typography>
          <Grid sm={12} mt={2}>
            <TextField
              id="description"
              label="Descrição"
              variant="outlined"
              onChange={(event) => setDescription(event.target.value)}
              fullWidth
              error={descriptionError}
              value={description}
              helperText={descriptionError ? 'Descrição deve ter mais que três caracteres' : ''}
            />
          </Grid>

          <Grid sm={12} mt={2}>
            <TextField
              id="detail"
              label="Detalhe"
              variant="outlined"
              fullWidth
              onChange={(event) => setDetail(event.target.value)}
              error={detailError}
              value={detail}
              helperText={detailError ? 'Detalhe deve ter mais que três caracteres' : ''}
            />
          </Grid>
          <Grid sm={12} mt={2}>
            <Button variant="contained" fullWidth onClick={handleAdd}>
              Salvar
            </Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
