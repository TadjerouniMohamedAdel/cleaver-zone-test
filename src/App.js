import './App.css';
import Header from './components/Header/Header';
import Notification from './components/Notification/Notification';
import Sidebar from './components/Sidebar/Sidebar';



function App() {
  return (
      <div className="app">
          <Header />
            <Sidebar />
            <main className="main">
              <Notification />
            </main>
      </div>
  );
}

export default App;
