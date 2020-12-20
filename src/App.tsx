import React, { useState } from 'react';
import { HashRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Projects } from './pages/Projects';
import { BsXDiamondFill, BsXDiamond, BsCaretRightFill } from "react-icons/bs";
import { Animation, AnimationType } from "./components/Animation";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MenuLink = (props: { to: string, text: string, exact?: boolean }) => {
    const activeClassName = "5821-4a78";

    return (
      <>
        <NavLink
          onClick={() => setIsMenuOpen(false)}
          exact={props.exact}
          activeClassName={activeClassName}
          className="d-block mt-3 p-2 text-theme-one"
          to={props.to} component={(e) => e.className.includes(activeClassName) ? (
            <NavLink
              onClick={() => setIsMenuOpen(false)}
              exact={props.exact}
              activeClassName={activeClassName}
              className="d-block mt-3 p-2 text-theme-one"
              to={props.to}><BsCaretRightFill className="mt-n1 text-theme-two" /> {props.text}</NavLink>
          ) : (
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                exact={props.exact}
                activeClassName={activeClassName}
                className="d-block mt-3 p-2 text-theme-one"
                to={props.to}>{props.text}</NavLink>
            )}>{props.text}</NavLink>
      </>
    )
  };

  return (
    <div>
      <Router>

        {/* Header */}
        <header className="shadow fixed-top bg-base-one">
          <div className="container py-1">
            <div className="d-flex justify-content-between">
              <h1 className="my-1"><NavLink
                onClick={() => setIsMenuOpen(false)}
                className="text-decoration-none" to="/">
                <span className="text-theme-one">&#123;</span>
                <span className="text-theme-one"> Bitfoss </span>
                <span className="text-theme-one">&#125;</span>
              </NavLink></h1>
              <button className="btn shadow-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ?
                  <BsXDiamondFill size={20} className="mt-n1 text-theme-one" /> :
                  <BsXDiamond size={20} className="mt-n1 text-theme-one" />}
              </button>
            </div>

            <Animation type={AnimationType.FadeIn} hidden={!isMenuOpen}>
              <div className="text-right pb-3">
                <MenuLink to="/" exact text="Home" />
                <MenuLink to="/projects" text="Projects" />
              </div>
            </Animation>
          </div>
          <div className="bg-gradient pt-1"></div>
        </header>

        {/* Main */}
        <main className="container py-3 pt-5 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>

        {/* Footer */}
        <footer className="text-center py-3">
          <p className="text-contrast">2020 &copy; All rights reserved</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
