import "./blockpromo.scss";
import logo from "../../man1.svg"
import man2 from "../../man2.svg"
import man3 from "../../man3.svg"

const blockpromo = ({ aspect, title }) => {
    return (
      <div className="BlockPromo">
        <div className="Text1">
        <p>
        Узнай какое занятие подойдет вашему ребёнку
        </p>
        </div>
        <div className="man1">
        <img src={logo} alt="logo"/>
        </div>
        <div className="man2">
            <img src={man2} alt="man2"/>
        </div>
        <div className="man3">
            <img src={man3} alt="man3"/>
        </div>
        <div className="Button">
            <div className="Text2">
                <p>Узнать</p>
            </div>
        </div>
        

      </div>
    );
  };
  
  export default blockpromo;