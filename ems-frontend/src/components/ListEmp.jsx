import { useState, useEffect } from "react";
import { listEmployees, removeEmployee ,updateEmployee} from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmpComponents = () => {
  const dummyData = [
    {
      id: 1,
      firstName: "Rasha",
      lastName: "Alhaj",
      email: "rashaalhaj@gmail.com",
    },
    {
      id: 2,
      firstName: "Rak",
      lastName: "Alhj",
      email: "rashaalhaj@gmail.com",
    },
    {
      id: 3,
      firstName: "Sara",
      lastName: "Smith",
      email: "sara.smith@example.com",
    },
    {
      id: 4,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
    },
    {
      id: 5,
      firstName: "Emily",
      lastName: "Clark",
      email: "emily.clark@example.com",
    },
    {
      id: 6,
      firstName: "Michael",
      lastName: "Brown",
      email: "michael.brown@example.com",
    },
  ];

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
        console.error("Error fetching data:", error);
      });
  }

  function addNewEmployee() {
    navigator("/addEmployee");
  }

  function updateEmployee(id) {
    navigator(`/updateEmployee/${id}`);
  }

  function deleteEmployee(id) {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      removeEmployee(id).then(() => {
        getAllEmployees();
      });
    }
  }
  
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary m-0">Employee List</h2>
        <button
          type="button"
          className="btn btn-success shadow"
          onClick={addNewEmployee}
        >
          <i className="bi bi-plus-circle me-2"></i>Add Employee
        </button>
      </div>
      <div className="table-responsive shadow rounded">
        <table className="table table-hover align-middle mb-0 bg-white">
          <thead className="table-primary">
            <tr>
              <th>Emp. ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((employee) => (
              <tr key={employee.id}>
                <td className="fw-semibold">{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td className="text-center">
                  <button
                    className="btn btn-outline-primary btn-sm me-2"
                    onClick={() => updateEmployee(employee.id)}
                  >
                    <i className="bi bi-pencil-square"></i> Update
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmpComponents;
