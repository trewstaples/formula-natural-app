const MenuIcon = ({ styles, menuIcon }) => {
  return (
    <li className="menu__item menu__item--icon">
      <a href="/" class="menu__link" style={styles} onMouseOver={(e) => (e.target.style.fill = 'black')}>
        {menuIcon}
      </a>
    </li>
  );
};

export { MenuIcon };
