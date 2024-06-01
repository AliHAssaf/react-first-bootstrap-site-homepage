

function QA(props){
    return(
        <div className="accordion-item">
            <h4 className="accordion-header" id={props.questionId}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={props.callAnswerId}>
                    {props.questionTitle}
                </button>
            </h4>
            <div className="accordion-collapse collapse" id={props.answerId} data-bs-parent="#qa-faq">
                <div className="accordion-body">
                    {props.answer}
                </div>
            </div>
        </div>
    );
};

export default QA;