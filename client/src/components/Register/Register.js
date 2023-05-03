import styles from "./register.module.css"

export const Register = () => {
    return (
        <div className={styles["whole"]}>
        <div className={styles["form-wrapper"]}>
            <form onSubmit={(e) => submitHandler(e, data)} method="POST">
                <div className={styles["firstName-div"]}>
                    <label htmlFor="first_name" className={styles["first-name-lbl"]}>
                    First Name
                    </label>
                    <input
                    type="text"
                    id={styles["fName"]}
                    name="first_name"
                    required
                    value={data.first_name}
                    onChange={(e) => changeHandler(e)} />
                </div>
                <div className={styles["lastName-div"]}>
                    <label htmlFor="last_name" className={styles["last-name-lbl"]}>
                    Last Name
                    </label>
                    <input
                    type="text"
                    id={styles["last-name"]}
                    name="last_name" 
                    required
                    value={data.last_name}
                    onChange={(e) => changeHandler(e)}/>
                </div>
                <div className={styles["email-div"]}>
                    <label htmlFor="email" className={styles["email-lbl"]}>
                    Email
                    </label>
                    <input
                    type="email"
                    id={styles["email"]}
                    name="email"
                    required
                    value={data.email} 
                    onChange={(e) => changeHandler(e)}/>
                </div>
                <div className={styles["password-div"]}>
                    <label htmlFor="password" className={styles["password-lbl"]}>
                    Password
                    </label>
                    <input
                    type="password"
                    id={styles["password"]}
                    name="password" 
                    required
                    value={data.password}
                    onChange={(e) => changeHandler(e)}/>
                </div>
                <div className={styles["conf-password-div"]}>
                    <label htmlFor="conf_password" className={styles["conf-password-lbl"]}>
                    Confirm Password
                    </label>
                    <input
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
    </div>
    )
}