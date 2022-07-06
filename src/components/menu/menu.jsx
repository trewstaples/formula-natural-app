import { MenuIcon } from '../menu-icon';
import { MenuItem } from '../menu-item';
import { DogIcon } from './dog';
import { CatIcon } from './cat';

const menuItems = ['В магазин', 'Акции', 'Контакты', 'О производители'];
const menuIcons = [<DogIcon />, <CatIcon />];

const styles = {
  menuList: {
    display: 'flex',
    alignItems: 'center',
    gap: '48px',
  },

  menuListA: {
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
    <nav className="menu">
      <ul className="menu__list" style={styles.menuList}>
        {menuIcons.map((menuIcon) => (
          <MenuIcon menuIcon={menuIcon} styles={styles.menuListA} />
        ))}

        {menuItems.map((menuItem) => (
          <MenuItem menuItem={menuItem} styles={styles.menuListA} />
        ))}
      </ul>
    </nav>
  );
};

export { Menu };
