import { useEffect, useState } from "react"
import { createEmployee, getEmployeeById, updateEmployee } from "../services/EmployeeService"
import { useNavigate,useParams } from "react-router-dom"

 
const Employee = () => { 

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const  [errors,setErrors] =useState({
    firstName: "",
    lastName: "",
    email: ""

  })

  function saveOrUpdateEmployee(e) {
    // Add logic to save employee details
    //console.log("Employee saved", { firstName, lastName, email });
    e.preventDefault();
    if(validateForm()){
      const employee = { firstName, lastName, email };
      console.log(employee);

      if(id){
        //in case of update employee 
        updateEmployee(id, employee).then((response) => {
          console.log(response.data);
          navigate('/employees')  
        }).catch((error) => {
          console.error('Error fetching data:', error);} )
      } else {
        //in case of add employee
        createEmployee(employee).then((response) => {
          console.log(response.data);
          navigate('/employees')
        }).catch((error) => {
          console.error('Error fetching data:', error);} )
      }
    }
  }
  


  function validateForm(){
    let valid=true;

    const errorsCopy={... errors} //copy of errors object
    if(firstName.trim()){
      errorsCopy.firstName=""
    }
    else{
      errorsCopy.firstName="First Name is required"
      valid=false}

    if(lastName.trim()){
      errorsCopy.lastName=""
    } 
    else{
      errorsCopy.lastName="Last Name is required"
      valid=false}
    
    if(email.trim()){
      errorsCopy.email=""
    }
    else{
      errorsCopy.email="Email is required"
      valid=false}

    setErrors(errorsCopy)
    return valid;
    }
  
  const {id} = useParams();
  function pageTitle(){
    if(id){
      return <h2 className="text-center">Update Employee</h2>
    }
    else{
      return <h2 className="text-center">Add Employee</h2>
    }


  }
  const navigate = useNavigate();
  useEffect(()=>{
    if(id){
      getEmployeeById(id).then((response)=>{
        const employee = response.data;
        setFirstName(employee.firstName);
        setLastName(employee.lastName);
        setEmail(employee.email);
      }).catch((error)=>{
        console.error('Error fetching data:', error);})
      }
  },[id])

  

  return (
    <div className="container">
      <br /><br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {
            pageTitle()
          }
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label>First Name:</label>
                <input
                 type="text" 
                 placeholder="Enter Employee First Name"  name="firstName"
                 value={firstName}
                 className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                 //errors.firstName = "First Name is required", alors la ligne devient : className={`form-control is-invalid`}

                 onChange={ (e) => setFirstName(e.target.value)} > 
                </input> 
                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                             
              </div>

              <div className="form-group mb-2">
                <label>Last Name:</label>
                <input
                 type="text" 
                 placeholder="Enter Employee Last Name"  name="lastName"
                 value={lastName}
                 className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                 onChange={(e) =>setLastName(e.target.value)} >
                </input> 
                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}                
              </div>

              <div className="form-group mb-2">
                <label>Email:</label>
                <input
                 type="text" 
                 placeholder="Enter Employee Email"  name="email"
                 value={email}
                 className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                 onChange={ (e) =>setEmail(e.target.value)
                 }>
                </input> 
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}                
              </div>



            </form>
            <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Submit</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Employee