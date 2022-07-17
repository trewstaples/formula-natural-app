import { Box } from '@mui/system';

const styles = {
  secondScreenWrap: {
    display: 'flex',
    maxHeight: '700px',
  },
  secondScreenMain: {
    position: 'relative',
    width: '556px',
  },
  secondScreenDog: {
    position: 'relative',
    right: '60%',
    bottom: '0.5%',
  },
  secondScreenInfo: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    maxWidth: '766px',
  },
  secondScreenInfoItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '504px',
    position: 'relative',
    left: '10.5%',
  },
  secondScreenText: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '64px',
    lineHeight: '89.93%',
    textAlign: 'right',
    color: '#FFFFFF',
  },
  secondScreenFoodPack: {
    position: 'relative',
    left: '8%',
  },
};

const SecondScreen = () => (
  <Box sx={styles.secondScreenWrap}>
    <Box sx={styles.secondScreenMain}>
      <Box component="img" src="img/dog+bg.png" alt="Картинка собаки" sx={styles.secondScreenDog}></Box>
    </Box>

    <Box sx={styles.secondScreenInfo}>
      <Box sx={styles.secondScreenInfoItems}>
        <div>
          <Box component="p" sx={styles.secondScreenText}>
            human grade
          </Box>
          <Box component="p" sx={{ ...styles.secondScreenText, fontSize: '20px' }}>
            ингредиенты
          </Box>
        </div>

        <div>
          <Box component="p" sx={styles.secondScreenText}>
            28%
          </Box>
          <Box component="p" sx={{ ...styles.secondScreenText, fontSize: '20px' }}>
            протеина
          </Box>
        </div>

        <div>
          <Box component="p" sx={styles.secondScreenText}>
            натуральные
          </Box>
          <Box component="p" sx={{ ...styles.secondScreenText, fontSize: '20px' }}>
            антидиоксиданты
          </Box>
        </div>
      </Box>
      <Box sx={styles.secondScreenFoodPack}>
        <img src="img/food-pack-2.png" alt="Пачка корма Food Natural" />
      </Box>
    </Box>
  </Box>
);
export { SecondScreen };
