import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Link className="header-link" to={`/`}>
                <div className='header'>COMP308 Lab2 - Jiwoong Hong (301153138)</div>
            </Link>
        </>
    )
}

export default Header;