import "./thirdComponent.style.css";
import myimage from '../../assets/IMG_0081.jpg'
    const ThirdComponent = () => {
        return (
            <div className="treca-komponenta">
                <div className="cards">
                    <div className="img-card">
                     <img src = {myimage} className="myPhoto" alt="images" />
                    </div>
                    <div className="text-card">
                    <button className="btn-card">Web Developer</button>
                    <h1>Slavisa Novakovic</h1>
                    <h4>mojsajt.com</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quos aperiam earum repudiandae molestias dolor ipsa voluptate consectetur adipisci, aut sunt quod officia pariatur praesentium, hic perferendis quasi. Possimus, vel.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo commodi architecto a autem, libero deleniti incidunt doloribus, saepe nisi nihil dolor aperiam magnam? Ipsam quia eveniet nostrum error reiciendis!</p>
                    <div className="contact-cards">
                        <button className="btn-contact">Kontakt</button>
                        <button className="btn-contact btn-color">Facebook</button>
                    </div>
                </div>
                </div>

            </div>
        )
    }

    export default ThirdComponent;