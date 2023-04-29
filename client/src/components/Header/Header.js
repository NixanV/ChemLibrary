import style from './header.module.css'
import {Link} from "react-router-dom"

export const Header = () => {
    return (
        <header className={style["nav-bar"]}>
            <div>
                <p className={style["heading"]}>ChemLib</p>
            </div>
            <div className={style["navigation"]}>
                <ul className={style["nav-list"]}>
                    <li>
                    <Link className={style["links"]} to="">Home</Link>
                    </li>
                    <li>
                    <a className={style["links"]} href="">Profile</a>
                    </li>
                    <li>
                    <Link className={style["links"]} to="/login">Login</Link>
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