import './App.css';
import Header from "./Header";
import Recommended from './Recommended';
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main_page">
      <Sidebar/>
      <Recommended/>
      </div>
      
    </div>
  );
}

export default App;

//Lets start by making youtube navbar first