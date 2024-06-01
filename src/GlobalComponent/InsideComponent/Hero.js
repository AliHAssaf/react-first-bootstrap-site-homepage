import heroImg from './img/hero-img.svg';

function Hero(){
    return(
        <section id="homepage" className="bg-dark text-light text-center text-md-start py-5">
            <div className="container">
                <div className="d-sm-flex align-items-center justify-content-center">
                    <div className="pb-4">
                        <h1 className="display-2">First <span className="text-success">Heading</span></h1>
                        <p className="py-1 lead">
                            Wiley also publishes its books in a variety of electronic formats. Some content that appears in print may
                            not be available in electronic books.Wiley also publishes its books in a variety of electronic formats. Some content that appears in print may
                            not be available in electronic books.
                        </p>
                        <button className="btn btn-success">Start With Us</button>
                    </div>
                    <img src={heroImg} className="d-none d-md-block img-fluid w-50 mx-1" alt="Hero-img"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;