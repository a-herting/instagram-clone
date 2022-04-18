import "../styles/App.scss";
import Navigation from "./Navigation";
import Cards from "./Cards";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className='App'>
      {/* Inserting navigation bar component into the app */}
      <Navigation />
      <main>
        <div className='container'>
          {/* Inserting cards and sidebar component of the app */}
          <Cards />
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
