
function WhatToLearn(props){
    return(
        <section id={props.id} className={props.classes}>
            <div className="container">
                <div className={props.row}>
                    <div className="col-md">
                        <img src={props.image} alt="learn" className="img-fluid"/>
                    </div>
                    <div className="col-md py-4">
                        <h2>{props.title}</h2>
                        <p>
                            This is an unofficial free book created for educational purposes and is not
                            affiliated with official React JS group(s) or company(s) nor Stack Overflow. All
                            trademarks and registered trademarks are the property of their respective
                            company owners
                        </p>
                        <p>
                            The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatToLearn;