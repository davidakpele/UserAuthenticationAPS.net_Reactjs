import {Login} from "./___Layouts/Auth/Login";
import { Home} from "./components/Home";
import {About} from "./___Layouts/About";
import {Contact} from "./___Layouts/Contact";
import { Registration } from './___Layouts/Auth/Registration';

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/About',
    element: <About />
  },
  {
    path: '/Contact',
    element: <Contact />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Registration',
    element: <Registration />
  }
];

export default AppRoutes;