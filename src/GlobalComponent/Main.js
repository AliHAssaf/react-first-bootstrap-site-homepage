import Cards from './InsideComponent/Cards';
import WhatToLearn from './InsideComponent/WhatToLearn';
import FAQ from './InsideComponent/FAQ';


import learn from './InsideComponent/img/learn.svg'
import next from './InsideComponent/img/next.svg'

function Main(){
    return(
        <main>
            <Cards />
            <WhatToLearn
                id="second"
                classes="py-5 bg-dark text-light"
                row="row align-items-center justify-content-center"
                image={learn}
                title="Learn The Basics"
            />
            <WhatToLearn
                id="next"
                classes="py-5"
                row="row align-items-center justify-content-center flex-row-reverse"
                image={next}
                title="What Next?"
            />
            <FAQ />
        </main>
    );
};

export default Main;