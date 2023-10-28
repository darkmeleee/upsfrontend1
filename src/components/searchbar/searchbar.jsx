import "./searchbar.scss";
import SearchBar from "../../Search.svg"

const searchbar = ({ aspect, title }) => {
    return (
      <div className="SearchBar">
            
            <div className="textBar">
                <div className="searchIco">
                <img src={SearchBar} alt="searchico"></img>
                </div>
                <div className="searchText1">
                    <p>Введите название секции или кружка</p>
                </div>
            </div>
            <div className="findButton">
                <div className="findText">
                <p>Найти</p>
                </div>
            </div>
            

      </div>
    );
  };
  
  export default searchbar;