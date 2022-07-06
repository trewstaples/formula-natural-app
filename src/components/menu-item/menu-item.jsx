const MenuItem = ({ menuItem, styles }) => {
  return (
    <li className="menu__item">
      <a href="/" class="menu__link" style={styles}>
        {menuItem}
      </a>
    </li>
  );
};

export { MenuItem };
