import logo from "./logo.svg";
import "./App.css";
import CustomDropDown from "./components/CustomDropDown";
import { dropDownProps } from "./constants";
import { dropDownMenu } from "./constants";
function App() {
  return (
    <div className="App">
      <CustomDropDown />
      <br></br>
      <br></br>
      <CustomDropDown
        color={dropDownProps.city.color}
        text={dropDownProps.city.text}
        options={dropDownProps.city.options}
      />
      <br></br>
      <br></br>
      <CustomDropDown {...dropDownProps.team} />
    </div>
  );
}


export default App;
