import './App.css';
import { useEffect, useState } from 'react';
import { getUser } from './api/getData';
import UserCard from './components/UserCard';
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getUser().then((posts) => setData(posts.results[0]));
  }, [])

  return (
    <div className='App'>
      {
        data ? <UserCard first={data.name.first} last={data.name.last} thumbnail={data.picture.thumbnail} /> : <p></p>
      }

    </div>
  );
}

export default App;
