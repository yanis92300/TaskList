import Button from "./Button";

const Header = (props) => {
  return (
    <div>
      <h1
        className="header" /*style={{ color: "red", backgroundColor: "black" }}*/
      >
        {props.title}
      </h1>
      {/* <Button color="green" text="Hello" /> */}
      <Button
        color="blue"
        text={props.showAddTask ? "Close" : "Add"}
        onClick={props.onAdd}
      />
    </div>
  );
};

export default Header;
