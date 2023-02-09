import "./sixthComponent.style.css";
import toolLogo from "../../assets/2.png";

    const SixthComponent = () => {
        return (
            
            <div className="can-i-do-card">
                <h2>What can I do</h2>
                <p>We can very easily digitize and promote your company on the Internet with a very high quality design, all you have to do is contact, half the work has already been done by yourself. We will use these tools:</p>
                <img src={toolLogo} alt="" />
            </div>
            
        )
    }

    export default SixthComponent;