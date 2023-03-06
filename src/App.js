// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Checkout from './pages/checkout/Checkout';


function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
        </>

      ),
    },
    {
      path: "checkout",
      element: (
        <>
          <Header />
          <Checkout />
        </>
      ),
    },
  ]);

  return (
    // <div className="App">
    //   <Header />
    //   <Home />

    // </div>

    <RouterProvider router={router} />
  );
}

export default App;
