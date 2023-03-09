// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./pages/checkout/Checkout";
import SignUp from "./pages/auth/SignUp";
import { useStateValue } from "./context/StateProvider";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
   const [{}, dispatch] = useStateValue();

   useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
         console.log(user.email);
         if (user) {
            dispatch({
               type: "SET_USER",
               user: user,
            });
         } else {
            dispatch({
               type: "SET_USER",
               user: null,
            });
         }
      });
   }, []);

   const router = createBrowserRouter([
      {
         path: "/signUp",
         element: (
            <>
               <SignUp />
            </>
         ),
      },
      {
         path: "/checkout",
         element: (
            <>
               <Header />
               <Checkout />
            </>
         ),
      },
      {
         path: "/",
         element: (
            <>
               <Header />
               <Home />
            </>
         ),
      },
   ]);

   return <RouterProvider router={router} />;
}

export default App;
