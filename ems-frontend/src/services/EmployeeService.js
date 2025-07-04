import axios from 'axios';

const  API_URL= 'http://localhost:3000/api/employees'; // Adjust API URL

export const listEmployees = () => axios.get(API_URL);

export const createEmployee = (employee) => axios.post(API_URL, employee);

//Update employee
// get data
export const getEmployeeById = (id) => axios.get(`${API_URL}/${id}`);
// export const updateEmployee = (EmployeeId) => axios.get(API_URL + '/' + EmployeeId);
// update data
export const updateEmployee = (id, employee) => axios.put(`${API_URL}/${id}`, employee);

//Delete employee
export const removeEmployee = (id) => axios.delete(`${API_URL}/${id}`); 


