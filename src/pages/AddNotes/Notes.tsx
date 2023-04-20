import React, { useEffect, useMemo, useState } from 'react';
import { Button, Card, CardActions, CardContent, Grid, List, Typography } from '@mui/material';
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

  const listMemo = useMemo(() => {
    return dataLocal.map((item) => {
      return (
        <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
          <Grid key={item.id} xs={12}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.detail}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Editar</Button>
                <Button size="small" onClick={() => handleDelete(item)}>
                  Excluir
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      );
    });
  }, [dataLocal]);

  return (
    <>
      <ResponsiveAppBar />
      <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" sx={{ margin: '10px' }}>
        <List sx={{ bgcolor: 'background.paper' }}>
          {dataLocal.length ? listMemo : <Typography variant="body1">Nenhum recado cadastrado.</Typography>}
        </List>
        <Grid
          sx={{
            position: 'fixed',
            right: '0',
            bottom: '0',
          }}
        >
          <BasicModal />
        </Grid>
      </Grid>
    </>
  );
};
export default Notes;
