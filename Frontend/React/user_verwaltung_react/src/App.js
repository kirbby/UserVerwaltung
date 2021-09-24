import React, { useEffect, useState } from 'react';
import './App.css';
import userDetail from './components/UserDetail';
import Loading from './components/Loading';

function App() {
  const UserLoading = Loading(userDetail);
  const [appState, setAppState] = useState({
    loading: false,
    user: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const userId = 1;
    const apiUrl = 'https://localhost:5001/Users/' + userId;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((user) => {
        setAppState({ loading: false, user: user });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>Loaded User</h1>
      </div>
      <div className='user-container'>
        <UserLoading isLoading={appState.loading} user={appState.user} />
      </div>
    </div>
  );
}

export default App;