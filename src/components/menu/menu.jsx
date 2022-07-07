import { Box } from '@mui/system';

import { MenuItem } from '../menu-item';
import { DogIcon } from './dog';
import { CatIcon } from './cat';

const menuItems = [<DogIcon />, <CatIcon />, 'В магазин', 'Акции', 'Контакты', 'О производители'];

const styles = {
  menuList: {
    display: 'flex',
    alignItems: 'center',
    gap: '48px',
  },

  menuItem: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '15px',
    lineHeight: '18px',
    textTransform: 'uppercase',
    color: 'white',
  },
};

const Menu = () => {
  return (
    <Box component="nav">
      <Box component="ul" sx={styles.menuList}>
        {menuItems.map((menuItem) => {
          return <MenuItem menuItemStyle={styles.menuItem} menuItem={menuItem} />;
        })}
      </Box>
    </Box>
  );
};

export { Menu };
