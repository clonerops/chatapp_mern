import { useState } from 'react'
import TwetterLogo from '../assets/images/twetter.png'
import Button from '../components/Button'
import Input from '../components/Input'

const Signup = ():JSX.Element => {

  const [mode, setMode] = useState<boolean>(false)

  const changeMode = () => setMode(prev => !prev)

  return (
    <>
      <div className="auth container">
        {/* Right Side */}
        <div className="auth__right">
          <h3 className="auth__right-h3">{mode ? 'ثبت نام' : 'ورود'}</h3>
          <div className="auth__inputs">
            {mode ? (
              <>
                <Input placeholder='نام' type='text' />
                <Input placeholder='نام خانوادگی' type='text' />
                <Input placeholder='ایمیل' type='email' />
                <Input placeholder='رمز عبور' type='password' />
              </>
            ) : (
              <>
                <Input placeholder='رمز عبور' type='password' />
                <Input placeholder='نام کاربری' type='text' />
              </>
            )}
            <div className="auth__submits">
              <Button title={mode ? 'ثبت نام' : 'ورود'} />
              <span className="auth__notaccount" onClick={changeMode}>{mode ? 'قبلا ثبت نام کرده ام' : 'در سامانه ثبت نام نکرده اید؟'}</span>
            </div>
          </div>
        </div>
        {/* Left Side  */}
        <div className="auth__left">
          <div className="auth__twetter">
            <img src={TwetterLogo} alt='tweeter' />
          </div>
          <div className="auth__brands">
            <h1 className="auth__brands-brand">CLONER</h1>
            <h5 className="auth__brands-slogan">ایده ها را در سراسر جهان کشف کنید</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup