import "./App.css";
import ListEmpComponents from "./components/ListEmp";
import Header from "./components/header";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import Employee from "./components/employee";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Browser>
        <Header />
        <Routes>
          {/* http://localhost:3000/ */}
          <Route path="/" element={<Dashboard />}></Route>
          {/* http://localhost:3000/employees */}
          <Route path="/employees" element={<ListEmpComponents />}></Route>
          <Route path="/addEmployee" element={<Employee />}></Route>
          {/* http://localhost:3000/updateEmployee/1 */}
          <Route path="/updateEmployee/:id" element={<Employee />}></Route>
        </Routes>
      </Browser>
    </>
  );
}

export default App;
