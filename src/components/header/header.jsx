import { Box } from '@mui/system';

import { Container } from '../container';
import { HeaderLogo } from './header-logo';
import { Menu } from '../menu';

const styles = {
  header: {
    width: '100%',
    height: '80px',
    backgroundColor: '#28abe2',
  },
  headerWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
  },

  headerMenu: {
    marginLeft: '52px',
    marginTop: '4px',
    marginBottom: '4px',
  },
};

const Header = () => {
  return (
    <Box component="header" sx={styles.header}>
      <Container>
        <Box sx={styles.headerWrap}>
          <Box>
            <HeaderLogo />
          </Box>

          <Box sx={styles.headerMenu}>
            <Menu />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export { Header };
