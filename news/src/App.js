import './App.css';
import Navbar from './Navbar';
import DivComponent from './DivComponent';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar></Navbar>
        <DivComponent className={'bigPhotoDiv'}></DivComponent>
        <DivComponent className={'bigText'}>
          <h1>The Bright Future of Web 3.0?</h1>
        </DivComponent>
      </div>
    </>
  );
}

export default App;
