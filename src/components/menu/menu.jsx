import { Box } from '@mui/system';

import { DogIcon } from './dog';
import { CatIcon } from './cat';

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
//NOTE: Как сделать fill у svg?
const menuItems = [<DogIcon />, <CatIcon />, 'В магазин', 'Акции', 'Контакты', 'О производителе'];

const Menu = () => {
  return (
    <nav>
      <Box component="ul" sx={styles.menuList}>
        {menuItems.map((menuItem) => {
          return (
            <li>
              <Box component="a" href="/" sx={styles.menuItem}>
                {menuItem}
              </Box>
            </li>
          );
        })}
      </Box>
    </nav>
  );
};

export { Menu };
