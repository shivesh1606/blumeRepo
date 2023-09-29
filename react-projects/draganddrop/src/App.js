import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import React from 'react';
import MyPage from './components/MyApp';
// import Login from './components/Login';
// import SignUp from './components/Signup';
// import SelectTemplate from './components/SelectTemplate';
// import UserPage from './components/UserPage';
// import LabelTemplate from './components/LabelEdit';
// import UserFormTemplateData from './components/UserFormTemplateData/UserFormTemplateData';
// import NewModal from './components/NewModal';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyPage />} />

        {/* <Route path ="/modal" element={<NewModal />} /> */}
      </Routes>
    </BrowserRouter>

  );

}
export default App;
