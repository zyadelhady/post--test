import './App.css';
import { AddPost } from './Components/AddPost/AddPost';
import { Posts } from './Container/Posts/Posts';

function App() {
  return (
    <div className="App">
      <AddPost />
      <Posts />
    </div>
  );
}

export default App;
