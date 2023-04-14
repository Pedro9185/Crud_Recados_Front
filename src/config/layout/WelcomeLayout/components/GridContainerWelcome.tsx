import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import bg from '../../../../assets/images/welcome-background.jpg';

const GridContainerWelcome = styled(Grid)({
  height: '100vh',
  background: `url(${bg}) center top / contain repeat-x`,
});

export default GridContainerWelcome;
