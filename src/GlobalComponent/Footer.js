import AbotUs from "./InsideComponent/AboutUs";
import ContactUs from "./InsideComponent/ContactUs";
import FinalFooter from "./InsideComponent/FinalFooter";

function Footer(){
    return(
        <footer>
            <AbotUs />
            <ContactUs />
            <FinalFooter />
        </footer>
    );
};

export default Footer;