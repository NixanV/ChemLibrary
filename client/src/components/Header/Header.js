import style from './header.module.css'

export const Header = () => {
    return (
        <header className={style["nav-bar"]}>
            <div>
                <p className={style["heading"]}>ChemLib</p>
            </div>
            <div className={style["navigation"]}>
                <ul className={style["nav-list"]}>
                    <li>
                    <a className={style["links"]} href="">Home</a>
                    </li>
                    <li>
                    <a className={style["links"]} href="">Profile</a>
                    </li>
                    <li>
                    <a className={style["links"]} href="">Login</a>
                    </li>
                    <li>
                    <a className={style["links"]} href="">Logout</a>
                    </li>
                    <li>
                    <a className={style["links"]} href="">Register</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}