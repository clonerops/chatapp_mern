import HeaderSearch from "../components/HeaderSearch"
import profile from '../assets/images/profile.png'
import Users from "../components/Users"

const Room = () => {
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
                <div className="room__box-conversation"></div>
            </div>
        </div>
    )
}

export default Room