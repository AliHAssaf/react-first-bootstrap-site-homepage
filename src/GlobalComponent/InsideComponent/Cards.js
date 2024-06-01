import Card from "./Card";


function Header(){
    return(
        <section className="py-5" id="first">
            <div className="container">
            <h2 className="text-center mb-4">
                Courses
            </h2>
                <div className="row text-center">
                        <Card
                            icon="bi bi-arrows-angle-contract"
                            img={require("./img/card-1.jpg")}
                            title="Card Title 1"
                            text="Wiley also publishes its books in a variety of electronic formats. Some content that appears in print may not be available in electronic books."
                        />
                        <Card
                            icon="bi bi-arrow-left-right"
                            img={require("./img/card-2.jpg")}
                            title="Card Title 2"
                            text="Wiley also publishes its books in a variety of electronic formats. Some content that appears in print may not be available in electronic books."
                        />
                        <Card
                            icon="bi bi-arrows-fullscreen"
                            img={require("./img/card-3.jpg")}
                            title="Card Title 3"
                            text="Wiley also publishes its books in a variety of electronic formats. Some content that appears in print may not be available in electronic books."
                        />
                        <Card
                            icon="bi bi-box-arrow-in-down-left"
                            img={require("./img/card-4.jpg")}
                            title="Card Title 4"
                            text="Wiley also publishes its books in a variety of electronic formats. Some content that appears in print may not be available in electronic books."
                        />
                </div>
            </div>
        </section>
    );
};

export default Header;