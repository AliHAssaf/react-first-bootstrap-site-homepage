import QA from "./QA";

function FAQ(){
    return(
        <section className="py-5" id="faq">
            <div className="container">
                <h2 className="text-center mb-3">Frequently Asked Quesitons</h2>
                <div className="accordion accordion-flush" id="qa-faq">
                    <QA
                        questionId="q-one"
                        callAnswerId="#a-one"
                        questionTitle="First Question"
                        answerId="a-one"
                        answer="Introductory concepts: Introduction, definition, objectives, Life cycle – Requirements analysis and specification. Design and Analysis: Cohesion and coupling, Data flow oriented Design: Transform centered design, Transaction centered design. Analysis of specific systems like Inventory control, Reservation system."
                    />
                    <QA
                        questionId="q-two"
                        callAnswerId="#a-two"
                        questionTitle="Second Question"
                        answerId="a-two"
                        answer="Object-oriented Design: Object modeling using UML, use case diagram, class diagram, interaction diagrams: activity diagram, unified development process."
                    />
                    <QA
                        questionId="q-three"
                        callAnswerId="#a-three"
                        questionTitle="Third Question"
                        answerId="a-three"
                        answer="Implementing and Testing: Programming language characteristics, fundamentals, languages, classes, coding style efficiency. Testing: Objectives, black box and white box testing, various testing strategies, Art of debugging. Maintenance, Reliability and Availability: Maintenance: Characteristics, controlling factors, maintenance tasks, side effects, preventive maintenance – Re Engineering – Reverse Engineering – configuration management – Maintenance tools and techniques. Reliability: Concepts, Errors, Faults, Repair and availability, reliability and availability models. Recent trends and developments."
                    />
                    <QA
                        questionId="q-four"
                        callAnswerId="#a-four"
                        questionTitle="Fourth Question"
                        answerId="a-four"
                        answer="Software quality: SEI CMM and ISO-9001. Software reliability and fault-tolerance, software project planning, monitoring, and control. Computer-aided software engineering (CASE), Component model of software development, Software reuse."
                    />
                </div>
            </div>
        </section>
    );
};

export default FAQ;