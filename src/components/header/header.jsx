import { HeaderLogo } from './header-logo';
import { Menu } from '../menu';

// .header {
//     width: 100%;
//     max-height: 80px;
//     background-color: rgb(40, 171, 226);
// }

const styles = {
  header: {
    width: '100%',
    maxHeight: '80px',
    backgroundColor: ' rgb(40, 171, 226)',
  },

  container: {
    width: '1312px',
    margin: 'auto',
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
    <header className="header" style={styles.header}>
      <div className="container" style={styles.container}>
        <div className="header__wrap" style={styles.headerWrap}>
          <div className="header__logo-wrap">
            <HeaderLogo />
          </div>

          <div className="header__menu" style={styles.headerMenu}>
            <Menu />
          </div>

          <div className="header__social"></div>
        </div>
      </div>
    </header>
  );
};

export { Header };
