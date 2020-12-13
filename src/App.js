import 'antd/dist/antd.css'
import './App.scss';
import TopBar from './components/TopBar';
import LeftBar from './components/LeftBar';
import Category from './pages/Category';


function App() {
  return (
    <div className="App">
      <TopBar/>
      <LeftBar/>
      <div className="contant">
          <Category/>
      </div>
    </div>
  );
}

export default App;
