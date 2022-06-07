import { withRouter } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

function _AppHeader(props) {
  const onBack = () => {
    props.history.goBack();
  };

  return (
    <header className="app-header">
      <h3 className="logo">Mister Bitcoin</h3>
      <section className="back">
        <button onClick={onBack}>Back</button>
      </section>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
    </header>
  );
}

export const AppHeader = withRouter(_AppHeader);
