import { Box } from '@mui/system';

import { CatIcon } from './cat';
import { DogIcon } from './dog';

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
const MENU_ITEMS = [<DogIcon />, <CatIcon />, 'В магазин', 'Акции', 'Контакты', 'О производителе'];

const Menu = () => {
  return (
    <nav>
      <Box component="ul" sx={styles.menuList}>
        {MENU_ITEMS.map((menuItem) => {
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
