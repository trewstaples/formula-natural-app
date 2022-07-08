import { Box } from '@mui/system';
// background: "url('img/background-2.jpg')",
const styles = {
  secondScreenFlexWrap: {
    display: 'flex',
    maxHeight: '700px',
  },
  secondScreenMain: {
    position: 'relative',
    width: '556px',
  },
  secondScreenDogImage: {
    position: 'relative',
    right: '60%',
    bottom: '0.5%',
  },
  secondScreenInfoFlex: {
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
  secondScreenTitle: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '64px',
    lineHeight: '89.93%',
    textAlign: 'right',
    color: '#FFFFFF',
  },
  secondScreenSign: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '89.93%',
    textAlign: 'right',
    color: '#FFFFFF',
  },
  secondScreenFoodPack: {
    position: 'relative',
    right: '20%',
  },
};

const SecondScreen = () => {
  return (
    <Box sx={styles.secondScreenFlexWrap}>
      <Box sx={styles.secondScreenMain}>
        <Box component="img" src="img/dog+bg.png" alt="Картинка собаки" sx={styles.secondScreenDogImage}></Box>
      </Box>

      <Box sx={styles.secondScreenInfoFlex}>
        <Box sx={styles.secondScreenInfoItems}>
          <div>
            <Box component="p" sx={styles.secondScreenTitle}>
              human grade
            </Box>
            <Box component="p" sx={styles.secondScreenSign}>
              ингредиенты
            </Box>
          </div>

          <div>
            <Box component="p" sx={styles.secondScreenTitle}>
              28%
            </Box>
            <Box component="p" sx={styles.secondScreenSign}>
              протеина
            </Box>
          </div>

          <div>
            <Box component="p" sx={styles.secondScreenTitle}>
              натуральные
            </Box>
            <Box component="p" sx={styles.secondScreenSign}>
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
};

export { SecondScreen };
