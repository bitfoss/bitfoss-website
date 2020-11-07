import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="container py-5">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-theme">Bitfoss</h1>
        </header>

        {/* Main */}
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>

        {/* Footer */}
        <footer></footer>
      </div>
    </Router>
  );
}

export default App;
