
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './styles/App.scss'
import { Authorization } from './pages/Authorization/Authorization'
import { Lobby } from './pages/Lobby/Lobby'
import { Friends } from './pages/Friends/Friends'
import { Information } from './pages/Information/Information'
import { Puzzle } from './pages/Games/Puzzle/Puzzle'
import { Lending } from './pages/Lending/Lending'
import { Users } from './pages/Users/Users'
import { Profile } from './pages/Profile/Profile'
import {observer} from "mobx-react-lite";
import { Guess } from './pages/Games/Guess/Guess'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Lending/>,
    errorElement: <Lending/>
  },
  {
    path: '/authorization',
    element: <Authorization/>
  },
  {
    path: '/users',
    element: <Users/>
  },
  {
    path: '/lobby',
    element: <Lobby/>
  },
  {
    path: '/friends',
    element: <Friends/>
  },
  {
    path: '/info',
    element: <Information/>
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/rating',
    element: <Information/>
  },
  {
    path: '/games/puzzle',
    element: <Puzzle/>
  },
  {
    path: '/games/guess',
    element: <Guess/>
  }
])



const App: React.FC = () => {
  

  return (
 
      <RouterProvider router={router}/>
  );
}

export default observer(App)
