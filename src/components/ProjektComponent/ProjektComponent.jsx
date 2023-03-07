import "./projektComponent.style.css";
import noLimit from "../../assets/logo3.png";
import secondProject from "../../assets/logo-min-512.png";

    const ProjektComponent = () => {
        return (
            <div className="my-projects">
                <hr />
                <h2 className="title-projects">My projects</h2>
                <div className="card-projects">
                    <div className="no-limit-card">
                        <img src={noLimit} className="no-limit-img" alt="limit" />
                        <p className="no-limit-p">This is my first project as an initial Frontend Developer, which I designed in 2021. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique esse dolorem incidunt, eligendi voluptatibus consectetur. Voluptates nihil omnis dolore architecto laudantium impedit voluptatum ipsam, repellat temporibus neque beatae consequatur velit.</p>
                    </div>
                    <div className="second-card-start no-limit-card">
                        <p className="second-p">This is my other project as an initial Frontend Developer, which I designed in 2021. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, cupiditate quia! Dignissimos illo officiis corporis laboriosam quas soluta debitis nulla earum dolore.
                        <img src= {secondProject} className="no-limit-img" alt="sec" />
</p>
                    </div>
                </div>
            </div>
        )
    }
    export default ProjektComponent;