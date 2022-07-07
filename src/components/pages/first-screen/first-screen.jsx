import { Box } from '@mui/system';

const styles = {
  firstScreen: {
    width: '100%',
    height: '620px',
    background: "url('img/background-1.jpg')",
    backgroundSize: '100% 100%',
  },

  container: {
    width: '1312px',
    margin: 'auto',
  },

  firstScreenWrap: {
    display: 'flex',
    height: '620px',
    marginTop: '32px',
  },

  firstScreenInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '761px',
  },
  firstScreenInfoItems: {
    marginTop: '72px',
  },
  firstScreenTitle: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '96px',
    lineHeight: '89.93%',
    color: '#28ABE2',
  },
  firstScreenSign: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '34px',
    lineHeight: '89.93%',
    color: '#28ABE2',
  },
  firstScreenMainWrap: {
    width: '828px',
    height: '558px',
  },
};

const FirstScreen = () => {
  return (
    <Box sx={styles.firstScreen}>
      <Box sx={styles.container}>
        <Box sx={styles.firstScreenWrap}>
          <Box sx={styles.firstScreenInfo}>
            <Box sx={styles.firstScreenInfoItems}>
              <Box component="p" sx={styles.firstScreenTitle}>
                Передовое <br />
                питание
              </Box>
              <Box component="p" sx={styles.firstScreenSign}>
                корма класса супер премиум
              </Box>
            </Box>
            <Box>
              <img src="img/brazil.png" width="296" height="56" alt="Сделано в Бразилии" />
            </Box>
          </Box>

          <Box sx={styles.firstScreenMainWrap}>
            <div>
              <img src="img/food-pack-1.png" alt="Две пачкм корма Food Natural" />
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { FirstScreen };
