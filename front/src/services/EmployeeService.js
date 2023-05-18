import axios from "axios";

const DATABASEURL= "http://localhost:8080/api/v1/employees";

class EmployeeService {
    
    
    getEmploues() {
        return axios.get(DATABASEURL);
    }
}


 export default new EmployeeService();