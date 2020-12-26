import './App.css';
import Header from './components/Header/Header';
import Notifications from './components/Notification/Notifications';
import Sidebar from './components/Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About/About';
import Services from './components/Services/Services';
import Landing from './components/Landing/Landing';
import Info from './components/Info/Info';
import Messages from './components/Messages/Messages';



function App() {
  return (
      <Router>
        <div className="app">
            <Header />
              <Sidebar />
              <main className="main">
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/services">
                            <Services />
                        </Route>
                        <Route path="/landing">
                            <Landing />
                        </Route>
                        <Route path="/info">
                            <Info />
                        </Route>
                        <Route path="/messages">
                            <Messages />
                        </Route>
                        <Route path="/">
                              <Notifications />
                        </Route>
                    </Switch>
              </main>
        </div>
      </Router>
  );
}

export default App;
