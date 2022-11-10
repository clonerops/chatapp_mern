import HeaderSearch from "../components/HeaderSearch"
import profile from '../assets/images/profile.png'
import Users from "../components/Users"
import Message from "../components/Message"
import MessageReceiver from "../components/MessageReceiver"
import InputEmoji from "react-input-emoji";
const Room = (): JSX.Element => {
    return (
        <div className="room container">
            <HeaderSearch />
            <div className="room__box">
                <div className="room__box-users container">
                    <h1 className="room__box-users--title">کاربران</h1>
                    <Users />
                    <Users />
                    <Users />
                    <Users />
                    <Users />
                    <Users />
                    <Users />
                    <Users />
                    <Users />
                </div>
                <div className="room__box-conversation">
                    <div className="room__box-conversation--header">
                        <img src={profile} alt='messages' className='room__box-conversation--header---img' />
                        <span className="room__box-conversation--header---title ">ابوالفضل معصومی</span>
                    </div>
                    <div className="room__box-conversation--body">
                        <Message />
                        <MessageReceiver />
                        <Message />
                        <MessageReceiver />
                        <MessageReceiver />
                        <MessageReceiver />
                        <MessageReceiver />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                    </div>
                    <div className="room__box-conversation--footer">
                        <form className="room__box-conversation--footer---inputs">
                            <span className="room__box-conversation--footer---span">+</span>
                            <InputEmoji
                                fontFamily='IRANSans'
                                placeholder="پیام خود را وارد کنید..."
                            />
                            <button className="room__box-conversation--footer---button">ارسال</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Room