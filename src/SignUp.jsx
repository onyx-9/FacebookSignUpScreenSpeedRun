function SignUp(){
return(
    <div className="signup">
            <form className="signup-firstname" action="">
            <label className="signup-text">First Name:</label><br />
            <input className="signup-input" type="text" />
            </form>

            <form className="signup-lastname" action="">
            <label className="signup-text">Last Name:</label><br />
            <input className="signup-input" type="text" />
            </form>

            <form className="signup-mail" action="">
            <label className="signup-text">Your Email:</label><br />
            <input className="signup-input" type="text" />
            </form>

            <form className="signup-reenter" action="">
            <label className="signup-text">Re-enter Email:</label><br />
            <input className="signup-input" type="text" />
            </form>

            <form className="signup-password" action="">
            <label className="signup-text">New Password:</label><br />
            <input className="signup-input" type="text" />
            </form>

            <form className="signup-iam" action="">
            <label className="signup-iamtext">I am:</label><br />
            <select className="signup-select">
                <option value="0">Select Sex</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Attack Helicopter</option>
            </select>
            </form>

            <form className="signup-birthday" action="">
            <label className="signup-text">Birthday:</label><br />
            <input className="signup-input" type="date" />
            </form>

            <a  className="signup-why" href="https://support.google.com/chrome/answer/6098869?hl=en">Why do i need to provide this?</a>
        
           <a  href="https://support.google.com/chrome/answer/6098869?hl=en"> <button className="signup-button">Sign Up</button></a>
            <hr className="hr"/>


            <a className="createpage2"><a className="tikkaldirma" href="https://www.facebook.com/pages/create/?ref_type=site_footer">Create a Page</a> for a celebrity, brand or business</a> 
    </div>
);
}

export default SignUp