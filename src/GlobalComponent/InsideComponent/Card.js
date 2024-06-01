

function Card(props) {
    return(
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card bg-dark text-light p-3 mb-3">
                <div className="h1 my-3">
                    <i className={props.icon}></i>
                </div>
                <img src={props.img} className="card-img w-100" alt="Card"/>
                <div className="card-body">
                    <h3 className="card-title text-success">{props.title}</h3>
                    <p className="card-text">{props.text}</p>
                    <a href="https://www.google.com/" className="btn btn-success">Read More</a>
                </div>
            </div>
        </div>
    );
};

export default Card; 