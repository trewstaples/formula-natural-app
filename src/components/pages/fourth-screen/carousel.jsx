import { Box } from '@mui/system';

import { Container } from '../../container';

const styles = {
  window: {
    width: '100%',
    height: '100%',
  },
  pagesContainer: {
    display: 'flex',
    height: '100%',
  },
};

const Carousel = ({ children }) => (
  <Container>
    <Box sx={styles.window}>
      <Box sx={styles.pagesContainer}>{children}</Box>;
    </Box>
  </Container>
);

export { Carousel };
