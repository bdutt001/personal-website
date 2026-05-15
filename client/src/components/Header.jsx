import Nav from "./Nav";
import Icon from "../assets/favicon.svg";

export default function Header() {

  return (
    <header className="header">
        <div className="row name">
          <img src={Icon} className="icon"/>
          <h1>Benjamin Dutton</h1>
        </div>
        <Nav />
    </header>
  );
}