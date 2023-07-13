import React from 'react'

const Login = () => {
  return (
        <div className="LoginPageContainer">
    <div className="LoginPageInnerContainer">
        <div className="ImageContianer">
            <img src="https://i.imgur.com/MYZd7of.png" className="GroupImage" alt='images'/>
        </div>
        <div className="LoginFormContainer">
            <div className="LoginFormInnerContainer">
                <div className="LogoContainer">
                    <img src="https://www.pngkey.com/png/full/529-5291672_sample-logo-png-transparent-background.png" className="logo" alt='images'/>
                </div>
                <header className="header">Log in</header>
                <header className="subHeader">Welcome to <b>animal planet!</b> Please Enter your Details</header>

                <form>
                    <div className="inputContainer">
                        <label className="label" for="emailAddress"><img src="https://i.imgur.com/Hn13wvm.png" className="labelIcon" alt='images'/><span>Email
                                Address*</span></label>
                        <input type="email" className="input" id="emailAddress" placeholder="Enter your Email Address"/>
                    </div>
                    <div className="inputContainer">
                        <label className="label" for="emailAddress"><img src="https://i.imgur.com/g5SvdfG.png"
                                className="labelIcon" alt='images'/><span>Password*</span></label>
                        <input type="password" className="input" id="emailAddress" placeholder="Enter your Password"/>
                    </div>
                    <div className="OptionsContainer">
                        <div className="checkboxContainer">
                            <input type="checkbox" id="RememberMe" className="checkbox"/> <label for="RememberMe">Remember
                                me</label>
                        </div>
                        <a href="#" className="ForgotPasswordLink">Forgot Password?</a>
                    </div>
                    <button className="LoginButton">Login</button>
                </form>
            </div>
        </div>
    </div>
</div>
    
  )
}

export default Login