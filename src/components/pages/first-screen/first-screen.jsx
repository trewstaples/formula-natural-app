import { Box } from '@mui/system';

const styles = {
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
  firstScreenText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '96px',
    lineHeight: '89.93%',
    color: '#28ABE2',
  },
  firstScreenMainWrap: {
    width: '828px',
    height: '558px',
  },
};

const FirstScreen = () => (
  <Box sx={styles.firstScreenWrap}>
    <Box sx={styles.firstScreenInfo}>
      <Box sx={styles.firstScreenInfoItems}>
        <Box component="p" sx={styles.firstScreenText}>
          Передовое <br />
          питание
        </Box>
        <Box component="p" sx={{ ...styles.firstScreenText, fontSize: '34px' }}>
          корма класса супер премиум
        </Box>
      </Box>
      <div>
        <img src="img/brazil.png" width="296" height="56" alt="Сделано в Бразилии" />
      </div>
    </Box>

    <Box sx={styles.firstScreenMainWrap}>
      <div>
        <img src="img/food-packs.png" alt="Две пачки корма Food Natural" />
      </div>
    </Box>
  </Box>
);
export { FirstScreen };
