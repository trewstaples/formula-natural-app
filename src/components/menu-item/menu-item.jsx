const MenuItem =  ({menuItem}) => {
    return (
        <li className="menu__item">
            <a href="/" class="menu__link">{menuItem}</a>
        </li>
    )
}

export {MenuItem}