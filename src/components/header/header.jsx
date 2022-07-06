import { HeaderLogo } from "./header-logo";
import { Menu } from "../menu";

const Header = () => {
    return (
      <header className="header">
        <div className="container">
            <div className="header__wrap">
                <div className="header__logo-wrap">
                <HeaderLogo />
                </div>

                <div className="header__menu">
                    <Menu />
                </div>
            </div>
        </div>
      </header>
    );
  };
  
  export { Header };
  