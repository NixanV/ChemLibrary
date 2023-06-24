import style from "./login.module.css"
import {useState, useContext} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import * as service from '../../services/userService'
import { AuthContext } from "../../context/AuthContext"

export const Login = () => {
    const navigate = useNavigate();

    const {userLogin} = useContext(AuthContext)
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const onChangeHandler = (e) => {
        setData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmitHandler = (ev, userInfo) => {
        ev.preventDefault();
        console.log(userInfo.password);


        if(userInfo.email === "" || userInfo.password === ""){
            alert("Should fill inputs!")
        }
        else{
            const pattern = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$");
            try{
                if(pattern.test(userInfo.email)){
                    service.login(userInfo)
                        .then(res => {
                            if(!res.message){
                                userLogin(res);
                                console.log(res);
                                navigate('/');
                            }else{
                                alert("Invalid email or password");
                            }
                        })
                } 
            }
            catch{
                alert('error message')
            }
            
        }
    }

    return(
        <section className={style["wrapper"]}>
            <div className={style["sign-in-table"]}>
                <h2>Sign in</h2>
            </div>
            <div className={style["form-wrapper"]}>
                <form onSubmit={(ev) => onSubmitHandler(ev, data)}>
                    <div className={style["email-div"]}>
                        
                        <input
                            type="email"
                            id={style["login-email"]}
                            className={style["email-input"]}
                            name="email"
                            value={data.email}
                            onChange={(e) => onChangeHandler(e)}
                            required
                            />
                        <label htmlFor="email" className={style["email-label"]}>Email</label>
                    </div>

                
                    <div className={style["password-div"]}>
                        <input
                            type="password"
                            id={style["login-password"]}
                            className={style["password-input"]}
                            name="password"
                            value={data.password}
                            onChange={(e) => onChangeHandler(e)}
                            required
                            />
                        <label htmlFor="password" className={style["password-label"]}>Password</label>

                    </div>

                    <div className="button-div">
                        <input type="submit" className={style["login-button"]} value="Login"/>
                        <p className={style["dont-have-acc"]}>Don't have an account?
                        <Link to="/register" className={style["register-btn"]}>Register</Link>
                        </p>
                    </div>

                </form>

            </div>

        </section>
    )
}