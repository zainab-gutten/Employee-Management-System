import { Link } from "react-router-dom";

const Dashboard = () => (
  <div className="container py-5">
    <div className="text-center mb-5">
      <h1 className="display-4 fw-bold text-primary">Welcome to EMS Dashboard</h1>
      <p className="lead text-secondary">Manage your employees efficiently and easily.</p>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-4 mb-4">
        <div className="card shadow h-100">
          <div className="card-body text-center">
            <i className="bi bi-people-fill display-3 text-primary mb-3"></i>
            <h5 className="card-title">View Employees</h5>
            <p className="card-text">See the list of all employees in your company.</p>
            <Link to="/employees" className="btn btn-outline-primary">Go to Employees</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card shadow h-100">
          <div className="card-body text-center">
            <i className="bi bi-person-plus-fill display-3 text-success mb-3"></i>
            <h5 className="card-title">Add Employee</h5>
            <p className="card-text">Add a new employee to your  database.</p>
            <Link to="/addEmployee" className="btn btn-success">Add Employee</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;