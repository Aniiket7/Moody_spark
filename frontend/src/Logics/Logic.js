import axios from "axios"
import { MdOutlineEditAttributes, MdOutlineLeaderboard } from "react-icons/md";

//const checklogin = (token)=>{
    // const { data } = await axios.get('/api/user/getuser/' + token);
    // if (!data) {
        // navigate('/login')
    // }
    // else if(data.pincode)
    // {
        
    // }
// }


const fetchUser = async () => {
    const token = localStorage.getItem('token');
    const token2 = JSON.parse(token);
    // console.log(token);
    const x= await axios.get(`/api/user/getuser/${token2}`).then((Response) =>Response.data);
    return x;
}




export {fetchUser}