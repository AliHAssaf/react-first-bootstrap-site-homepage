import we from './img/we.svg'

function AbotUs(){
    return(
        <section className="py-5 bg-dark text-light" id="about">
            <div className="container d-flex align-items-center justify-content-center">
                <div>
                <h2>Who Are We?</h2>
                <p className="p-3 lead">
                This work is subject to copyright. All rights are reserved by the Publisher, whether the whole or part of the
                material is concerned, specifically the rights of translation, reprinting, reuse of illustrations, recitation,
                broadcasting, reproduction on microfilms or in any other physical way, and transmission or information
                storage and retrieval, electronic adaptation, computer software, or by similar or dissimilar methodology now
                known or hereafter developed.
                </p>
                </div>
                <img src={we} alt="how we are" className="w-25 p-3 d-none d-md-block"/>
            </div>
        </section>
    );
};

export default AbotUs;