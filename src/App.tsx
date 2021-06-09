import Sidebar from 'components/organisms/Sidebar';
import Feed from 'components/organisms/Feed';
import Widgets from 'components/organisms/Widgets';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
