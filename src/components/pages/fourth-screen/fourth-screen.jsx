import { Box } from '@mui/system';
import { nanoid } from 'nanoid';

const BENEFITS = [
  { alt: 'Иконка колоса', src: 'img/corn.svg' },
  { alt: 'Иконка шерсти', src: 'img/wool.svg' },
  { alt: 'Иконка суставов', src: 'img/joints.svg' },
  { alt: 'Иконка юкки', src: 'img/yucca.svg' },
];

const CHECKLIST_ICONS = [
  { alt: 'Иконка 15 килограмм', src: 'img/15-killo.svg' },
  { alt: 'Иконка 7 килограмм', src: 'img/7-killo.svg' },
  { alt: 'Иконка 2,5 килограмм', src: 'img/2,5-killo.svg' },
  { alt: 'Иконка 1 килограмм', src: 'img/1-killo.svg' },
  // { alt: 'Иконка фракционной упаковки', src: 'img/fraction-pack.svg' },
];

const styles = {
  fourthScreenWrap: {
    display: 'flex',
    // justifyContent: 'space-between',
    marginTop: '17px',
  },
  fourthScreenInfo: {
    display: 'flex',
    flexDirection: 'column',
    width: '620px',
    height: '586px',
    paddingLeft: '122px',

    border: '2px solid red',
  },
  infoTitle: {
    width: '400px',
    height: '100px',
    marginBottom: '60px',
  },
  fourthScreenIconsList: {
    display: 'flex',
    marginBottom: '68px',
    marginRight: '100px',
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
  fourthScreenButton: {
    width: '278px',
    height: '66px',
    background: 'none',
    border: '1.91398px solid #28ABE2',
    borderRadius: '47.8495px',

    fontFamily: 'Museo Sans Cyrl',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '30.6237px',
    lineHeight: '89.93%',

    letterSpacing: '-0.04em',

    color: '#28ABE2',
  },
  fourthScreenMain: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '592px',
    // border: '2px solid blue',
  },
};

const FourthScreen = ({ packageUrl }) => (
  <Box sx={styles.fourthScreenWrap}>
    <Box sx={styles.fourthScreenInfo}>
      <Box sx={styles.infoTitle}>
        <Box component="p" sx={styles.fourthScreenText}>
          Cобаки
        </Box>
        <Box component="p" sx={{ ...styles.fourthScreenText, fontSize: '26.4px' }}>
          маленьких и мини пород
        </Box>
      </Box>

      <div>
        <Box component="ul" sx={styles.fourthScreenIconsList}>
          {BENEFITS.map((benefit) => (
            <li key={nanoid()}>
              <img src={benefit.src} alt={benefit.alt} onClick={() => console.log(0)} />
            </li>
          ))}
        </Box>
      </div>

      <div>
        <Box component="button" sx={styles.fourthScreenButton}>
          заказать сейчас
        </Box>
        {/* <button type="submit">Заказать сейчас</button> */}
      </div>
    </Box>

    <Box sx={styles.fourthScreenMain}>
      <div>
        <ul>
          {CHECKLIST_ICONS.map((icon) => (
            <li key={nanoid()}>
              <img src={icon.src} alt={icon.alt} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <img src={packageUrl} alt="Пачка корма Formula Natural" />
      </div>
    </Box>
  </Box>
);
export { FourthScreen };
