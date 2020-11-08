import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>

      {/* Header */}
      <header className="text-center shadow">
        <div className="bg-theme py-1">
          <h1 className="m-0">Bitfoss</h1>
        </div>
      </header>

      {/* Main */}
      <main className="container py-3">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>

      {/* Footer */}
      <footer className="text-center py-3">
        <p className="text-muted">2020 &copy; All rights reserved</p>
      </footer>
    </Router>
  );
}

export default App;
