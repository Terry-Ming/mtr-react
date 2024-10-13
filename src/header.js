import "./App.css";

function Header({ info, onLineClick }) {
  return (
    <div className="buttonContainer">
      {Object.keys(info).map((key) => (
        <div
          id={key}
          className="linebutton"
          key={key}
          style={{
            backgroundColor: info[key].color,
          }}
          onClick={() => onLineClick(key)}
        >
          {info[key].text}
        </div>
      ))}
    </div>
  );
}

export default Header;
