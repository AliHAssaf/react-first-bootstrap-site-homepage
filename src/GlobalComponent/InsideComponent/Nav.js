

function Nav(){
    return(
        <nav className="navbar navbar-expand-md bg-dark navbar-dark text-white fixed-top">
            <div className="container">
                <a href="#" className="navbar-brand">My First Website</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navMenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#homepage" className="nav-link">Homepage</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="https://www.goole.com/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">first</a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#first" className="dropdown-item">First</a>
                                </li>
                                <li>
                                    <a href="#second" className="dropdown-item">Second</a>
                                </li>
                                <li>
                                    <a href="#next" className="dropdown-item">Next</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#faq" className="nav-link">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;