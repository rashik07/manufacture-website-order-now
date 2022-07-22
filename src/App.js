import './App.css';
import 'antd/dist/antd.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import { Breadcrumb, Layout, Menu } from 'antd';
import Login from './Pages/Login_Registration/Login';
import Registration from './Pages/Login_Registration/Registration';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">


        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/registration" element={<Registration></Registration>} />



        </Routes>
      </Layout>
    </div>
  );
}

export default App;
