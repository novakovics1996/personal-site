import "./tenthComponent.style.css";
import arrow from "../../assets/arrow-button.gif";

    const TenthComponent = () => {
        return(
            <div class="meni-tag">
            <div class="card-tag-img">
            <img src={arrow} class="meni-img" alt="arrow-pic" />
            </div>
              <ul class="meni-ul">
                 <button class="button-li"><li class="li-tag">Home</li></button>
                 <button class="button-li"><li class="li-tag">About</li></button>
                 <button class="button-li"><li class="li-tag">Tool</li></button>
                 <button class="button-li"><li class="li-tag">My projects</li></button>
                 <button class="button-li"><li class="li-tag">Contact</li></button>
              </ul>
          </div>
        )
    }
    export default TenthComponent;