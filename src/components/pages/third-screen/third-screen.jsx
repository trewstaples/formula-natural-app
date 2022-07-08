import { Box } from '@mui/system';

//NOTE: Как добавлять стили, если вдруг вспомнил, что нужно добавить? Нужно каждый раз переводить на Box

const styles = {
  thirdScreenWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '13px',
    paddingTop: '100px',
    paddingBottom: '100px',
    maxHeight: '700px',
    // backgroundColor: '#E7F3FF', //NOTE: Как это реализовать?
  },
  thirdScreenMain: {
    width: '822px',
  },
  thirdScreenInfo: {
    width: '490px',
    height: '478px',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '32px',
    lineHeight: '112.43%',

    textAlign: 'right',
    letterSpacing: '-0.04em',

    color: '#28ABE2',
  },
};

const ThirdScreen = () => (
  <Box sx={styles.thirdScreenWrap}>
    <Box sx={styles.thirdScreenMain}>
      <img src="img/granule.png" width="736" height="484" alt="Картинка гранулы" />
    </Box>

    <Box sx={styles.thirdScreenInfo}>
      <p>
        Корма <b>Fórmula Natural</b> разработаны под контролем команды ветеринаров. <br />
        <br />
        Продуман до мелочей не только состав, но и форма. Каждый крокет спроектирован для комфортного жевания, что позволяет зубам и деснам животного
        оставаться здоровыми. <br />
        <br />
        <b>Fórmula Natural</b> — формула заботы и здоровья для питомца
      </p>
    </Box>
  </Box>
);
export { ThirdScreen };
