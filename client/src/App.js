import './App.css';
import Home from './pages/Home';

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HashRouter  as Router, Switch, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Register from './pages/Register';
import Login from './pages/Login';
import Courses from "./pages/Courses"
import Jobs from "./pages/Jobs"
import About from './pages/About';
import Blogsevents from './pages/Blogs&events';
import Contactus from './pages/Contactus';
import Shares from './pages/Shares';
import Gallary from './pages/Gallary';
import Forex from './pages/Forex';
import Goods from './pages/Goods';
import Pointers from './pages/Pointers';
import Crypto from './pages/Crypto';

import { LanguageProvider} from './components/context/Language';
import { UserProvider} from './components/context/user';
import Dashboard from './pages/Dashboard';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/courses",
//     element: <Courses />,
//   },
//   {
//     path: "/jobs",
//     element: <Jobs />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/blogs&events",
//     element: <Blogsevents />,
//   },
//   {
//     path: "/contact",
//     element: <Contactus />,
//   },
//   {
//     path: "/gallary",
//     element: <Gallary />,
//   },
//   {
//     path: "/shares",
//     element: <Shares />,
//   },
//   {
//     path: "/forex",
//     element: <Forex />,
//   },
//   {
//     path: "/crypto",
//     element: <Crypto />,
//   },
//   {
//     path: "/pointers",
//     element: <Pointers />,
//   },
//   {
//     path: "/goods",
//     element: <Goods />,
//   },
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//   },
// ]);

function App() {
  return (
    <div className="App">
      <LanguageProvider >
      <UserProvider>
      <Router >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/jobs">
            <Jobs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blogs&events">
            <Blogsevents />
          </Route>
          <Route path="/contact">
            <Contactus />
          </Route>
          <Route path="/gallary">
            <Gallary />
          </Route>
          <Route path="/shares">
            <Shares />
          </Route>
          <Route path="/forex">
            <Forex />
          </Route>
          <Route path="/crypto">
            <Crypto />
          </Route>
          <Route path="/pointers">
            <Pointers />
          </Route>
          <Route path="/goods">
            <Goods />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </Router>
      </UserProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
