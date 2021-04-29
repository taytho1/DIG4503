import logo from './logo.svg';
import './App.css';
import NameSearch from "./components/NameSearch";
import AgeSearch from "./components/AgeSearch";
import ReportingArea from "./components/ReportingArea";
import PositionSearch from "./components/PositionSearch";
import Title from "./components/title";
import './myStyles.css';

function App() {
  return (
    <div className="App">
      <Title />
      <NameSearch/>
      <AgeSearch/>
      <PositionSearch />
      <ReportingArea/>
    </div>
  );
}

export default App;
