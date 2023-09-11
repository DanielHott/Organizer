import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Registrate } from './components/registrate';
import { Login } from './components/login';
import { Main } from './components/main';
import { UserContextProvider } from './contexts/UserContext';
import { EditAccount } from './components/editAccount';

function App() {
  return (
    <UserContextProvider>
    <Routes>
        <Route path="/registrate" element={ <Registrate /> } />
        <Route path="/" element={ <Login /> } />
        <Route path="/main" element={ <Main /> } />
        <Route path="/edit" element={ <EditAccount /> } />
    </Routes>
    </UserContextProvider>
  );
}

export default App;