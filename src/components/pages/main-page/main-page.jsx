import { Screen } from '../../screen';
import { Container } from '../../container';
import { FirstScreen } from '../first-screen';
import { SecondScreen } from '../second-screen';
import { ThirdScreen } from '../third-screen';
import { FourthScreen } from '../fourth-screen';

const BACKGROUND_URLS = ["url('img/background-1.jpg')", "url('img/background-2.jpg')", "url('img/background-3.jpg')", "url('img/background-4.jpg')"];
const FIRST_SCREEN_HEIGHT = '620px';

const MainPage = () => {
  return (
    <main>
      <Screen background={BACKGROUND_URLS[0]} height={FIRST_SCREEN_HEIGHT}>
        <Container>
          <FirstScreen />
        </Container>
      </Screen>

      <Screen background={BACKGROUND_URLS[1]}>
        <Container>
          <SecondScreen />
        </Container>
      </Screen>

      <Screen background={BACKGROUND_URLS[2]}>
        <Container>
          <ThirdScreen />
        </Container>
      </Screen>

      <Screen background={BACKGROUND_URLS[3]}>
        <Container>
          <FourthScreen />
        </Container>
      </Screen>
    </main>
  );
};

export { MainPage };
