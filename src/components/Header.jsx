
import { Link } from "react-router-dom";
const randColour = () =>
  ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

function Header({ setSearch }) {

  return (
    <header
      className="header"
      style={{ "--border-colour": `var(--${randColour()})` }}
    >
      <Link to={"/"}>
        <div className="header__logo" style={{ color: `var(--${randColour()})` }}>
          Hoxbay
        </div>
      </Link>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to='/products'>Home</Link>

          </li>
          <li>
            <Link to='/categories'>Categories</Link>

          </li>
          <li>
            <Link to='/basket'>Basket</Link>

          </li>
        </ul>

      </nav>
      <input className="search-input" type={'search'} placeholder="Search an item" onChange={event => setSearch(event.target.value)} />
    </header>
  );
}
export default Header;
