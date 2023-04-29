import style from "./login.module.css"

export const Login = () => {
    return(
        <section className={style["wrapper"]}>
            <div className={style["form-wrapper"]}>
                <form>
                <div className={style["email-div"]}>
                        <input
                            type="email"
                            id={style["login-email"]}
                            className={style["email-input"]}
                            name="email"
                            placeholder="Enter email"
                            required
                            />

                        <label className={style["form-label"]} htmlFor="email">Email address</label>
                    </div>

                
                    <div className={style["password-div"]}>
                        <input
                            type="password"
                            id={style["login-password"]}
                            placeholder="Enter password"
                            name="password"
                            required
                            />

                        <label className={style["form-label"]} htmlFor="password">Password</label>
                    </div>

                    <div className="button-div">
                        <input type="submit" className={style["login-button"]} value="Login"/>
                        <p className="dont-have-account">Don't have an account?</p>
                    </div>

                </form>

            </div>

        </section>
    )
}