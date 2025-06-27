import { Outlet, Link } from "react-router-dom";
import type { FC } from "react";
import "./sheet/layout.css"

const Layout = () => {
  return (
    <>
    <header>
      <nav>
        <div className="navBar">
          <Lien lien="/" texte="Home" />
          <Lien lien="/projet" texte="Projets" />
          <Lien lien="/autres" texte="Autres" />
        </div>
      </nav>
      </header>

      <Outlet />
      <footer>Hébergé par GitHub Page !</footer>
    </>
  )
};

interface LienProps {
  lien: string,
  texte: string
};

const Lien: FC<LienProps> = ({lien, texte}) => {
  return (
  <span>
    <Link to={lien} className="link">{texte}</Link>
  </span>
        );
}

export default Layout;
