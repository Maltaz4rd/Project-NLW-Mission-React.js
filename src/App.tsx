import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { CreateRoom } from './pages/CreateRoom'
import './styles/global.scss'

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/rooms/create' component={CreateRoom} />
    </BrowserRouter>
  );
}

export default App;
