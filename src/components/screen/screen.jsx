import { Box } from '@mui/system';

const REGULAR_SCREEN_HEIGHT = '700px';

const styles = {
  width: '100%',
  backgroundSize: '100% 100%',
};

const Screen = ({ children, background = '', height = REGULAR_SCREEN_HEIGHT, component = 'div' }) => {
  return (
    <Box component={component} sx={{ background: background, height: height, ...styles }}>
      {children}
    </Box>
  );
};

export { Screen };
