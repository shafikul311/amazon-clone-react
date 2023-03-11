// import logo from './logo.svg';
import "./App.css";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./pages/checkout/Checkout";
import SignUp from "./pages/auth/SignUp";
import { useStateValue } from "./context/StateProvider";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Error from "./pages/Error";
import Layout from "./layout/Layout";



const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
         {
            index: true,
            element: <Home />,

         },
         { path: 'checkout', element: <Checkout />, action: 'checkout' },
         { path: 'signup', element: <SignUp />, action: 'signup' },
      ],
   },
]);

function App() {
   const [dispatch] = useStateValue();

   useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
         // console.log(user.email);
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
   }, [dispatch]);



   return (
      <div className="app">
         <RouterProvider router={router} />
      </div>
   );
}

export default App;
