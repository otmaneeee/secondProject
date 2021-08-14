import { Dropdown } from "react-bootstrap";
import { dropDownProps } from "../../constants";
import { dropDownMenu } from "../../constants";
const index = (props) => {
  const { color, text, options } = props;
  return (
    <Dropdown>
      <Dropdown.Toggle variant={color} id="dropdown-basic">
        {text}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((item) => (
          <Dropdown.Item href={item.link}>{item.action}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
index.defaultProps = {
  ...dropDownProps.defaut
};
export default index;
