import { Box } from '@mui/system';
import { nanoid } from 'nanoid';

const FOOD_PACKAGE_URL = 'img/food-pack-3.png';

const BENEFITS = [
  { alt: 'Иконка колоса', src: 'img/corn.svg' },
  { alt: 'Иконка шерсти', src: 'img/wool.svg' },
  { alt: 'Иконка суставов', src: 'img/joints.svg' },
  { alt: 'Иконка юкки', src: 'img/yucca.svg' },
];

const CHECKLIST_ICONS = [
  { alt: 'Иконка 1 килограмм', src: 'img/1-killo.svg' },
  { alt: 'Иконка 2,5 килограмм', src: 'img/2,5-killo.svg' },
  { alt: 'Иконка 7 килограмм', src: 'img/7-killo.svg' },
  { alt: 'Иконка 15 килограмм', src: 'img/15-killo.svg' },
  { alt: 'Иконка фракционной упаковки', src: 'img/fraction-package.png' },
];

const styles = {
  fourthScreenWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fourthScreenInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '836px',
  },
  fourthScreenDescription: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '720px',
    height: '580px',
    border: '2px solid red',
  },
  fourthScreenText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '76.4px',
    lineHeight: '89.93%',

    letterSpacing: ' -0.04em',
    textTransform: 'uppercase',

    color: '#28ABE2',
  },
  fourthScreenMain: {
    width: '436px',
    border: '2px solid blue',
  },
};

const FourthScreen = () => (
  <Box sx={styles.fourthScreenWrap}>
    <Box sx={styles.fourthScreenInfo}>
      <Box sx={styles.fourthScreenDescription}>
        <div>
          <p sx={styles.fourthScreenText}>Cобаки</p>
          <p sx={{ ...styles.fourthScreenText, fontSize: '26.4px' }}>маленьких и мини пород</p>
        </div>

        <div>
          <ul>
            {BENEFITS.map((benefit) => (
              <li key={nanoid()}>
                <button>
                  <img src={benefit.src} width="85.56" height="86.56" alt={benefit.alt} />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button type="submit">Заказать сейчас</button>
        </div>
      </Box>

      <div>
        <ul>
          {CHECKLIST_ICONS.map((icon) => (
            <li key={nanoid()}>
              <img src={icon.src} alt={icon.alt} />
            </li>
          ))}
        </ul>
      </div>
    </Box>

    <Box sx={styles.fourthScreenMain}>
      <img src={FOOD_PACKAGE_URL} alt="Пачка корма Formula Natural" />
    </Box>
  </Box>
);
export { FourthScreen };
