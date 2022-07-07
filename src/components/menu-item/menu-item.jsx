import { Box } from '@mui/system';

const MenuItem = ({ menuItemStyle, menuItem }) => {
  return (
    <li className="menu__item">
      <Box component="a" sx={menuItemStyle}>
        {menuItem}
      </Box>
    </li>
  );
};

export { MenuItem };
