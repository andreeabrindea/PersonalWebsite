import "../App.css";
import { Link } from "react-router-dom";

function Topbar({items}) {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="page-link">
            <Link to={`/${item.toLowerCase()}`}  style={{textDecoration: "none", color: "inherit"}}>{item}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Topbar;
