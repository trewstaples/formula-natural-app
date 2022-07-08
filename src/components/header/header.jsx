import { Box } from '@mui/system';

import { Container } from '../container';
import { HeaderLogo } from './header-logo';
import { Menu } from '../menu';
import { Screen } from '../screen';

const HEADER_PARAMETS = {
  BACKGROUND: '#28abe2',
  HEIGHT: '80px',
  TAG: 'header',
};

const SOCIALS = [
  { src: 'img/phone-logo.svg', href: '/', alt: 'Иконка телефонного звонка' },
  { src: 'img/vk-logo.svg', href: 'https://vk.com/formulanatural', alt: 'Иконка Вконтакте' }, //NOTE Лучше делать иконки в чистом svg или в img норм?
];

const styles = {
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
    <Screen background={HEADER_PARAMETS.BACKGROUND} height={HEADER_PARAMETS.HEIGHT} component={HEADER_PARAMETS.TAG}>
      <Container>
        <Box sx={styles.headerWrap}>
          <div>
            <HeaderLogo />
          </div>

          <Box sx={styles.headerMenu}>
            <Menu />
          </Box>

          <Box sx={styles.headerSocial}>
            <Box component="ul" sx={styles.socialIconsList}>
              {SOCIALS.map((social) => (
                <li>
                  <a href={social.href}>
                    <img src={social.src} alt={social.alt}></img>
                  </a>
                </li>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Screen>
  );
};

export { Header };
