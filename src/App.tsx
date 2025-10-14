import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Header from "./component/Header";

export default function App() {
   return (
    <BrowserRouter>
      <Routes>
        <Route element = {<Header/>}>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
