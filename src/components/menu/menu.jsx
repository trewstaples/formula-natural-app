import { MenuIcon } from "../menu-icon"
import { MenuItem } from "../menu-item"

const menuItems = ['В магазин', 'Акции', 'Контакты', 'О производители'];

const Menu = () => {


    return (
        <nav className="menu">
            <ul className="menu__list">
                <MenuIcon />

            {menuItems.map((menuItem) =>(
                <MenuItem menuItem={menuItem}/>
            ))}
             
            </ul>
        </nav>
    )
}

export { Menu }