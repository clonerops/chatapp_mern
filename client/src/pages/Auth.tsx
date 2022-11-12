import { useState, useCallback } from 'react'
import TwetterLogo from '../assets/images/twetter.png'
import Button from '../components/Button'
import Input from '../components/Input'
import { LoginUser, RegisterUser } from '../services/httpApi'
import { toast } from 'react-toastify'
import { loginUserAction, registerUserAction } from '../store/actions/auth'
import { error, success } from '../utils/Toast'
import { useNavigate } from 'react-router'

const Auth = (): JSX.Element => {

  const navigate = useNavigate()

  const [mode, setMode] = useState<boolean>(false)
  const [value, setValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const onChangeHandler = useCallback(({ target: { name, value } }:
    { target: { name: string; value: string; } }) =>
    setValue(state => ({ ...state, [name]: value })), [])

  const changeMode = () => {
    setValue({ firstName: '', lastName: '', email: '', password: '' })
    setMode(prev => !prev)
  }

  const RegisterValidation = () => {
    const { firstName, lastName, email, password } = value
    if (firstName.length < 3 || lastName.length < 3) {
      error('نام و نام خانوادگی باید بیش از 3 کاراکتر باشد')
      return false;
    }
    if (email === '') {
      error('آدرس ایمیل اجباری می باشد')
      return false;
    }
    if (password === '') {
      error('وارد کردن رمز عبور اجباری می باشد')
      return false;
    }
    return true;
  }
  const LoginValidation = () => {
    const { email, password } = value
    if (email === '') {
      error('آدرس ایمیل اجباری می باشد')
      return false;
    }
    if (password === '') {
      error('وارد کردن رمز عبور اجباری می باشد')
      return false;
    }
    return true;
  }


  const registerUser = async () => {
    try {
      if (RegisterValidation()) {
        const { firstName, lastName, email, password } = value
        const data = {
          firstName, lastName, email, password
        }
        const res = await RegisterUser(data)
        if (res?.status == 200)
        await registerUserAction(res.data)
        success('ثبت نام با موفقیت انجام شد')
        setMode(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const loginUser = async () => {
    try {
      console.log(LoginValidation())
      if (LoginValidation()) {
        console.log('login yes')
        const { email, password } = value
        const data = {
          email, password
        }
        console.log('data', data)
        const res = await LoginUser(data)
        if (res?.status == 200)
          await loginUserAction(res.data)
          
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    if (mode) registerUser()
    else loginUser()
  }

  return (
    <>
      <div className="auth container">
        {/* Right Side */}
        <div className="auth__right">
          <h3 className="auth__right-h3">{mode ? 'ثبت نام' : 'ورود'}</h3>
          <div className="auth__inputs">
            {mode ? (
              <>
                <Input
                  value={value.firstName}
                  onChange={onChangeHandler}
                  name='firstName'
                  placeholder='نام' type='text' />
                <Input
                  value={value.lastName}
                  onChange={onChangeHandler}
                  name='lastName'
                  placeholder='نام خانوادگی' type='text' />
                <Input
                  value={value.email}
                  onChange={onChangeHandler}
                  name='email'
                  placeholder='ایمیل' type='email' />
                <Input
                  value={value.password}
                  onChange={onChangeHandler}
                  name='password'
                  placeholder='رمز عبور' type='password' />
              </>
            ) : (
              <>
                <Input
                  value={value.email}
                  onChange={onChangeHandler}
                  name='email'
                  placeholder='نام کاربری' type='text' />
                <Input
                  value={value.password}
                  onChange={onChangeHandler}
                  name='password'
                  placeholder='رمز عبور' type='password' />
              </>
            )}
            <div className="auth__submits">
              <Button onClick={handleSubmit} title={mode ? 'ثبت نام' : 'ورود'} />
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

export default Auth