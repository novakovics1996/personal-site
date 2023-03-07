import "./contactComponent.style.css";
import facebook from "../../assets/icons8-facebook-24.png";
import instagram from "../../assets/icons8-instagram-24.png";
import linkedin from "../../assets/icons8-linkedin-24.png";
import mail from "../../assets/icons8-mail-account-24.png";

    const ContactComponent = () => {
        return (
            <div className="footer-card">
                <h2 className="h2-footer title-h3">How to contact me:</h2>
                <div className="social-media-card">
                    <ul className="social-ul-list">
                        <li className="social-li-list"><img src={mail} alt="mail" /><a href="gmail.com">novakovics1996@gmail.com</a></li>
                        <li className="social-li-list"><img src={facebook} alt="fb" /><a href="facebook.com">Facebook</a></li>
                        <li className="social-li-list"><img src={linkedin} alt="lk" /><a href="linkedin.com">Linkedln</a></li>
                        <li className="social-li-list"><img src={instagram} alt="inst" /><a href="instagram.com">Instagram</a></li>

                    </ul>
                </div>
                <div className="title-footer">
                    <h3 className="title-h3">by Slavisa Novaković © 2021</h3>
                    <h3 className="title-h3">Built with pure HTML, CSS and JavaScript</h3>
                    

                </div>
            </div>
        )
    }
    export default ContactComponent;