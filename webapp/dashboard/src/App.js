import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HomeScreen from "./Screens/HomeScreen"
import ProductScreen from "./Screens/ProductScreen"
import LogisticScreen from "./Screens/LogisticScreen"
import ShopScreen from "./Screens/ShopScreen"
import FinanceScreen from "./Screens/FinanceScreen"
import SettingScreen from "./Screens/SettingScreen"
import ClientScreen from "./Screens/ClientScreen" 

import Header from "./Components/Header"


function App() {
  return (
    <>
      <Router>
        <Header />
        <>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/shops" element={<ShopScreen />} />
            <Route path="/products" element={<ProductScreen />} />
            <Route path="/logistics" element={<LogisticScreen />} />
            <Route path="/finance" element={<FinanceScreen />} />
            <Route path="/clients" element={<ClientScreen />} />
            <Route path="/setting" element={<SettingScreen />} />
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;
