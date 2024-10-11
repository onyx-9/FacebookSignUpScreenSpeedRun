
function Header(){
return(

    <header>
        <div className="header">
          <a className="tikkaldirma" href="https://www.facebook.com/login/identify/"><h1 className="header-title">facebook</h1></a>

            <form className="header-email" action="">
            <label><b>Email</b></label><br />
            <input className="header-input-email" type="text" />
            </form>

            <form className="header-password" action="">
            <label><b>Password</b></label><br />
            <input className="header-input-password" type="text" />
            </form>
            <a href="https://support.google.com/chrome/answer/6098869?hl=en"><button className="header-button">Login</button></a>

            <form className="header-keepme">
            <input type="checkbox" id="keepme" name="keepme" />
            <label htmlFor="keepme">Keep me logged in</label>

            <a className="header-forgot" href="https://www.facebook.com/login/identify/">Forgot your password?</a>
            </form>
        </div>
    </header>
);

}

export default Header