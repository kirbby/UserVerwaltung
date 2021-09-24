import React, { useState } from 'react';
import './App.css';
import userDetail from './components/UserDetail';
import Loading from './components/Loading';

let userId = 1;


function App() {
  const User = GetUser();

  return (
    <div className='App'>
      <div className='container'>
        <h1>Loaded User</h1>
      </div>
      <User />
    </div>
  );
}

const GetUser = () => {
  const UserLoading = Loading(userDetail);

  const [appState, setAppState] = useState({
    loading: false,
    user: null,
  });

  const handleClick = (e) => {
    setAppState({ loading: true });

    userId++;

    if (userId > 3) {
      userId = 1;
    }

    const apiUrl = 'https://localhost:5001/Users/' + userId;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((user) => {
        setAppState({ loading: false, user: user });
      });
  }

  return class extends React.Component {
    render() {
      return (
        <div className='user-container'>
          <UserLoading isLoading={appState.loading} user={appState.user} />
          <button variant="contained" onClick={handleClick}>Get Random User</button>
        </div>
      );
    }
  };
}

export default App;