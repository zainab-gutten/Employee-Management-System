import { useState, useEffect } from 'react';
import { listEmployees, removeEmployee } from '../services/EmployeeService'; // Make sure this function exists
import { useNavigate } from 'react-router-dom';

const ListEmpComponents = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(() => { 
    getAllEmployees();
  }, []); 

  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  function addNewEmployee() {
    navigator('/addEmployee');
  }

  function updateEmployee(id) {
    navigator(`/updateEmployee/${id}`);
  }

  function deleteEmployee(id) {
    console.log(id);

    removeEmployee(id).then((response) => {
      console.log(response.data);
      getAllEmployees();npm install
v
    });
  }

  return (
    <div className="container">
      <button type="button" className="btn btn-primary" onClick={addNewEmployee}>Add Employee</button>

      <h2 className="text-center">List of Employees</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td> 
              <td>
                <button className="btn btn-info" onClick={() => updateEmployee(employee.id)}>Update</button>
                <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}>Delete</button> 
              </td>                          
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmpComponents;
