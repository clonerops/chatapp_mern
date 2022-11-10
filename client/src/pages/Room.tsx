import HeaderSearch from "../components/HeaderSearch"

const Room = () => {
    return (
        <div className="room container">
            <HeaderSearch />
            <div className="room__box">
                <div className="room__box-users"></div>
                <div className="room__box-conversation"></div>
            </div>
        </div>
    )
}

export default Room