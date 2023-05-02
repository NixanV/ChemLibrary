import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import style from './header.module.css'
import { Link } from "react-router-dom"

export const Header = () => {
    const { user } = useContext(AuthContext);

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
                    {user?.accessToken ? (
                        <>
                            <li>
                                <a className={style["links"]} href="">Profile</a>
                            </li>
                            <li>
                                <Link className={style["links"]} to="/logout">Logout</Link>
                            </li>
                        </>

                    ) : (
                        <>
                            <li>
                                <Link className={style["links"]} to="/login">Login</Link>
                            </li>

                            <li>
                                <a className={style["links"]} href="">Register</a>
                            </li>
                        </>

                    )}


                </ul>
            </div>
        </header>
    )
}