import './App.css';
import Navbar from './Navbar';
import Extracurriculars from "./pages/Extracurriculars";
import Colleges from "./pages/Colleges";
import Profile from "./pages/Profile";

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = <Profile />
      break
    case "/extracurriculars":
      Component = <Extracurriculars />
      break
    case "/college-list":
      Component = <Colleges />
      break
  }
  return (
    <div className="App">
      
      <Navbar />
      {Component}
    </div>
  );
}

export default App;
