import TwetterLogo from '../assets/images/twetter.png'
import Input from '../components/Input'

const Signup = () => {
  return (
    <>
       <div className="login container">
        {/* Right Side */}
        <div className="login__right">
          <h3 className="login__right-h3">ورود</h3>
          <div className="login__inputs">
            <Input placeholder='نام کاربری' type='text' />
            <Input placeholder='رمز عبور' type='password' />
            {/* <input placeholder="نام کاربری" type='text' className="login__input" /> */}
            {/* <input placeholder="رمز عبور" type='password' className="login__input" /> */}
            <div className="login__submits">
              <button className="login__submit">ورود</button>
              <a href='/' className="login__notaccount">قبلا ثبت نام نکرده ام!</a>
            </div>
          </div>
        </div>
        {/* Left Side  */}
        <div className="login__left">
          <div className="login__twetter">
            <img src={TwetterLogo} alt='tweeter' />
          </div>
          <div className="login__brands">
            <h1 className="login__brands-brand">CLONER</h1>
            <h5 className="login__brands-slogan">ایده ها را در سراسر جهان کشف کنید</h5>
          </div>
        </div>
       </div>
    </>
  )
}

export default Signup