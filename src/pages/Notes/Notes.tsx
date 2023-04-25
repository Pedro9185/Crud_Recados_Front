import React, { useEffect, useState } from 'react';
import { Card, CardActions, CardContent, Container, Divider, Fab, Grid, IconButton, Typography } from '@mui/material';
import { Delete, Edit, Favorite, FavoriteBorder } from '@mui/icons-material';
import { useAppDispatch } from '../../store/hooks';
import { removeNote } from '../../store/modules/NotesSlice';
import BasicModal from '../../components/Modal';
import Task from '../../types/task';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';

interface DataNotesProps {
  data: Task[];
}
const Notes: React.FC<DataNotesProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const [dataLocal, setDataLocal] = useState<Task[]>([]);

  useEffect(() => {
    if (data.length) {
      setDataLocal([...data]);
    }
  }, [data]);

  const handleDelete = (itemDelete: Task) => {
    dispatch(removeNote(itemDelete.id));
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <ResponsiveAppBar />
        </Grid>
        <Grid item xs={12}>
          <Container sx={{ marginTop: '20px' }}>
            <Typography variant="h4"> Recados</Typography>
            <Divider />

            <Grid container spacing={3} marginTop={2}>
              {dataLocal.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                  <Card elevation={5}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.detail}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <IconButton color="warning" onClick={() => handleDelete(item)}>
                        <Delete />
                      </IconButton>
                      <IconButton color="success">
                        <Edit />
                      </IconButton>
                      <IconButton color={item.favorite ? 'error' : 'inherit'}>
                        {item.favorite ? <Favorite /> : <FavoriteBorder />}
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
      </Grid>
      <Fab color="primary" aria-label="add" size="medium" sx={{ position: 'fixed', right: '30px', bottom: '30px' }}>
        <BasicModal />
      </Fab>
    </>
  );
};
export default Notes;
