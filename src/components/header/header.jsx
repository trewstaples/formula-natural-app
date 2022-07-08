import { Box } from '@mui/system';

import { Screen } from '../screen';
import { Container } from '../container';
import { HeaderLogo } from './header-logo';
import { Menu } from '../menu';

const socials = [
  { src: 'img/phone-logo.svg', href: '/', alt: 'Иконка телефонного звонка' },
  { src: 'img/vk-logo.svg', href: 'https://vk.com/formulanatural', alt: 'Иконка Вконтакте' }, //NOTE Лучше делать иконки в чистом svg или в img норм?
];

const HEADER_PARAMETS = {
  HEIGHT: '80px',
  BACKGROUND: '#28abe2',
};

const styles = {
  header: {
    width: '100%',
    height: '80px',
    backgroundColor: '#28abe2',
    backgroundSize: '100% 100%',
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

  headerSocial: {
    marginLeft: '164px',
    marginTop: '8px',
    marginBottom: '8px',
  },

  socialIconsList: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
};

const Header = () => {
  return (
    <Screen height={HEADER_PARAMETS.HEIGHT} background={HEADER_PARAMETS.BACKGROUND}>
      <Container>
        <Box component="header" sx={styles.header}>
          <Box sx={styles.headerWrap}>
            <div>
              <HeaderLogo />
            </div>

            <Box sx={styles.headerMenu}>
              <Menu />
            </Box>

            <Box sx={styles.headerSocial}>
              <Box component="ul" sx={styles.socialIconsList}>
                {socials.map((social) => (
                  <li>
                    <a href={social.href}>
                      <img src={social.src} alt={social.alt}></img>
                    </a>
                  </li>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Screen>
  );
};

export { Header };
