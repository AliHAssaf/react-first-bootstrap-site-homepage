

function ContactUs(){
    return(
        <section className="py-5" id="contact">
            <div className="container">
                <h2>For Contact Us:</h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label">First Name:</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name:</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <h3 className="form-label">Enter Your Messege:</h3>
                        <textarea cols="50" rows="10" className="form-control"></textarea>
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="btn btn-success w-25"/>
                    </div>
                </form>
                <div className=" py-3 bg-dark text-light rounded d-flex justify-content-around align-items-center text-center">
                    <div>
                        <span className="h4">Our Email:</span>
                        <a href="a1@gmail.com" className="btn btn-success lead fst-italic mx-2 w-75 mt-1"> a1@gmail.com</a>
                    </div>
                    <div>
                        <span className="h4">
                            Our Phone Number:
                        </span>
                        <span className="btn btn-success lead fst-italic mx-2 w-75 mt-1">
                            +963 934 843 912
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;