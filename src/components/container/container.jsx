import { Box } from '@mui/system';

const styles = {
  width: '1312px',
  margin: 'auto',
};

const Container = ({ children }) => {
  return <Box sx={styles}>{children}</Box>;
};

export { Container };
