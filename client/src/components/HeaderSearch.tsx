import TwetterLogo from '../assets/images/twetter.png'

const HeaderSearch = ():JSX.Element => {
    return (
        <div className='search'>
            <img className='search__logo' src={TwetterLogo} alt='tweeter' />
            <form className='search__form'>
                <input className='search__form-input' placeholder='explore' />
                <button className='search__form-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </form>
        </div>
    )
}

export default HeaderSearch