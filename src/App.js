import "./App.css";
import "antd/dist/antd.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import { Breadcrumb, Layout, Menu } from "antd";
import Login from "./Pages/Login_Registration/Login";
import Registration from "./Pages/Login_Registration/Registration";
import RequreAuth from "./Pages/Login_Registration/RequreAuth";
import SingleProduct from "./Pages/Products/SingleProduct";
import Myorder from "./Pages/Order/Myorder";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Page_404 from "./Pages/Page_404/Page_404";
import AllUsers from "./Pages/Dashboard/AllUsers";
import RequireAdmin from "./Pages/Login_Registration/RequireAdmin";

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
          <Route
            path="/buy/:product_id"
            element={
              <RequreAuth>
                <SingleProduct></SingleProduct>
              </RequreAuth>
            }
          ></Route>
       
          <Route path="dashboard" element={<Dashboard />}>
            <Route
              path="myorder"
              element={
                <RequreAuth>
                  <Myorder></Myorder>
                </RequreAuth>
              }
            />
            <Route
              path="allusers"
              element={
                <RequireAdmin>
                  <AllUsers></AllUsers>
                </RequireAdmin>
              }
            />
          </Route>

          <Route path='*' element={<Page_404></Page_404>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
