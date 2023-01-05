import SideBar from "./components/SideBar";
import "./App.css";
import MainTitle from "./components/MainTitle";
import InternTable from "./components/InternTable";
import Intern from "./components/Intern";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="App-main">
        <MainTitle />
        <Intern />
        <InternTable />
      </div>
    </div>
  );
}

export default App;
