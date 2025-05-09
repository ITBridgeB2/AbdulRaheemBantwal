import axios from "axios"
class UserDetailService{
    saveUserDetials(userdetails){
        return axios.post("http://localhost:8080/clone",userdetails)
    }
    validateUser(mobileNumber,password){
        return axios.get(`http://localhost:8080/clone/${mobileNumber}/${password}`)
    }
    
    

    
    getUserById(id) {
        return axios.get(`http://localhost:8080/clone/${id}`); // Make sure this matches your backend API
      }
    
    
    

}
export default new UserDetailService()