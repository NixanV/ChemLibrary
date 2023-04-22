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
                    <a href="">Home</a>
                    </li>
                    <li>
                    <a href="">Profile</a>
                    </li>
                    <li>
                    <a href="">Login</a>
                    </li>
                    <li>
                    <a href="">Logout</a>
                    </li>
                    <li>
                    <a href="">Register</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}