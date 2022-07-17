import { Box } from '@mui/system';

const styles = {
  width: '1312px',
  margin: 'auto',
  border: '2px solid black',
};

const Container = ({ children }) => {
  return <Box sx={styles}>{children}</Box>;
};

export { Container };
