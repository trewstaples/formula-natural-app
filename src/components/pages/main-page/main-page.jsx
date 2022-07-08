import { FirstScreen } from '../first-screen';
import { SecondScreen } from '../second-screen';
import { ThirdScreen } from '../third-screen';
import { Screen } from '../../screen';
import { Container } from '../../container';

const backgrounds = ["url('img/background-1.jpg')", "url('img/background-2.jpg')", "url('img/background-3.jpg')", "url('img/background-4.jpg')"];
const FIRST_SCREEN_HEIGHT = '620px';

const MainPage = () => {
  return (
    <main>
      <Screen background={backgrounds[0]} height={FIRST_SCREEN_HEIGHT}>
        <Container>
          <FirstScreen />
        </Container>
      </Screen>

      <Screen background={backgrounds[1]}>
        <Container>
          <SecondScreen />
        </Container>
      </Screen>

      <Screen background={backgrounds[2]}>
        <Container>
          <ThirdScreen />
        </Container>
      </Screen>
    </main>
  );
};

export { MainPage };
