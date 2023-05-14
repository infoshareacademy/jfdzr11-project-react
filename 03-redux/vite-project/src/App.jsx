import AddPost from './components/AddPost/AddPost';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='header'>
        <AddPost />
      </div>
      <div className='post_content'></div>
    </div>
  );
}

export default App;
