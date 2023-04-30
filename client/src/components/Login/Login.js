import style from "./login.module.css"

export const Login = () => {
    return(
        <section className={style["wrapper"]}>
            <div className={style["sign-in-table"]}>
                <h2>Sign in</h2>
            </div>
            <div className={style["form-wrapper"]}>
                <form>
                    <div className={style["email-div"]}>
                        
                        <input
                            type="email"
                            id={style["login-email"]}
                            className={style["email-input"]}
                            name="email"
                            required
                            />
                        <label htmlFor="email" className={style["email-label"]}>Email</label>
                    </div>

                
                    <div className={style["password-div"]}>
                        <input
                            type="password"
                            id={style["login-password"]}
                            placeholder="Password"
                            name="password"
                            required
                            />

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