import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { CreateRoom } from './pages/CreateRoom'
import './styles/global.scss'

import { AuthContextProvider } from './context/AuthContext'

function App() {


  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path='/' exact component={Home} />
        <Route path='/rooms/create' component={CreateRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
