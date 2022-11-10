import profile from '../assets/images/profile.png'

const Users = () => {
    return (
        <div className="users">
            <div className="users__avatar">
                <img className="users__avatar--img" src={profile} />
            </div>
            <div className="users__usename">
                <p className="users__username--name">ابوالفضل معصومی</p>
                <p className="users__username--status">آنلاین</p>
            </div>
        </div>
    )
}

export default Users