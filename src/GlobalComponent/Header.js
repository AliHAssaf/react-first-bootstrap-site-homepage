import Hero from "./InsideComponent/Hero";
import Nav from "./InsideComponent/Nav";


function Header(){
    return(
        <header>
            <Nav />
            <Hero />
        </header>
    );
};

export default Header;