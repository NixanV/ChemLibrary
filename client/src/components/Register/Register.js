import { useState } from "react"
import styles from "./register.module.css"
import { useNavigate, Link } from "react-router-dom"

export const Register = () => {
    const navigate = useNavigate();

    const [data,  setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        conf_password: ''
    })

    const [error, setError] = useState({
        fisrtName_error: false,
        lastName_error: false,
        email_error: false,
        password_error: false,
        confPassword_error: false
    })

    const changeHandler = (e) => {
        setData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e, userData) => {
        e.preventDefault();
        
        // if(userData.first_name){
        //     fisrtName_error = false;
        // }
        // if(userData.last_name){
        //     lastName_error = false;
        // }

        // if(userData.password.length >= 8 && /\d/.test(userData.password) && /[!@#$%^&*]/.test(userData.password)){
        //     password_error = false;
        // }
        


    }



    return (
        <section className={styles["whole"]}>
            <div className={styles["register-plate"]}>
                Register Form
            </div>
            <div className={styles["form-wrapper"]}>
                <form onSubmit={(e) => submitHandler(e, data)} method="POST">
                    <div className={styles["firstName-div"]}>
                        <label htmlFor="first_name" className={styles["first-name-lbl"]}>
                            First Name
                        </label>
                        <input
                            className={styles["firstName-input"]}
                            type="text"
                            id={styles["fName"]}
                            name="first_name"
                            required
                            value={data.first_name}
                            onChange={(e) => changeHandler(e)} />
                        {error.fisrtName_error &&
                            <p className={styles["first-name-err"]}>Invalid first name!</p>
                        }
                    </div>
                    <div className={styles["lastName-div"]}>
                        <label htmlFor="last_name" className={styles["last-name-lbl"]}>
                            Last Name
                        </label>
                        <input
                            className={styles["lastName-input"]}
                            type="text"
                            id={styles["last-name"]}
                            name="last_name"
                            required
                            value={data.last_name}
                            onChange={(e) => changeHandler(e)} />
                    </div>
                    <div className={styles["email-div"]}>
                        <label htmlFor="email" className={styles["email-lbl"]}>
                            Email
                        </label>
                        <input
                            className={styles["email-input"]}
                            type="email"
                            id={styles["email"]}
                            name="email"
                            required
                            value={data.email}
                            onChange={(e) => changeHandler(e)} />
                    </div>
                    <div className={styles["password-div"]}>
                        <label htmlFor="password" className={styles["password-lbl"]}>
                            Password
                        </label>
                        <input
                            className={styles["password-input"]}
                            type="password"
                            id={styles["password"]}
                            name="password"
                            required
                            value={data.password}
                            onChange={(e) => changeHandler(e)} />
                    </div>
                    <div className={styles["conf-password-div"]}>
                        <label htmlFor="conf_password" className={styles["conf-password-lbl"]}>
                            Confirm Password
                        </label>
                        <input
                            className={styles["confPassword-input"]}
                            type="password"
                            id={styles["confPassword"]}
                            name="conf_password"
                            required
                            value={data.conf_password}
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>
                    <button className={styles["register-button"]}>Register</button>
                    <p className={styles["have-account"]}>
                        Do you have account? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </section>
    )
}