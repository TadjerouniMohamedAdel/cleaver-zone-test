import './App.css';
import Header from './components/Header/Header';
import Notifications from './components/Notification/Notifications';
import Sidebar from './components/Sidebar/Sidebar';



function App() {
  return (
      <div className="app">
          <Header />
            <Sidebar />
            <main className="main">
              <Notifications />
            </main>
      </div>
  );
}

export default App;
