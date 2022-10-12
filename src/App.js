import img from './components/IMG_1754.jpg';
import './App.css';
import { Textfit } from 'react-textfit';


function App() {
  return (
    <div className="App">
      <div className='bingo'>
        <img src={img} alt="background img"/>
            </div>
        <a
          className="App-link"
          href="https://www.instagram.com/hotweil/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          follow for more updates
        </a>
  
      <header className="App-header">
        <Textfit><h2> Kyle and Ella</h2>
        <h3>October 14 2023</h3>
        <h3>LA</h3>
        </Textfit>
      </header>
    </div>
  );
}

export default App;
