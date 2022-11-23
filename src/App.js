import logo from './logo.svg';
//import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from './LandingPage/landingPage'
import PostView from './PostView/postView';
import FormData from './FormData/formData';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<LandingPage/>} />
          <Route path="/postView" element={<PostView/>} />
          <Route path="/formData" element={<FormData/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
