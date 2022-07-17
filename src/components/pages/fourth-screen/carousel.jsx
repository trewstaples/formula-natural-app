import { Box } from '@mui/system';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Container } from '../../container';

const styles = {
  window: {
    width: '100%',
    height: '100%',
    overflow: 'scroll',
  },
  pagesContainer: {
    display: 'flex',
    height: '100%',
  },
};

const Carousel = ({ children }) => {
  const handleBackClick = () => {
    console.log('0');
  };

  const handleForwardClick = () => {
    console.log('0');
  };
  return (
    <Container flexStyles={{ display: 'flex', alignItems: 'center' }}>
      <ArrowBackIosIcon onClick={handleBackClick} />
      <Box sx={styles.window}>
        <Box sx={styles.pagesContainer}>{children}</Box>;
      </Box>
      <ArrowForwardIosIcon onClick={handleForwardClick} />
    </Container>
  );
};

export { Carousel };
