import { Children, createContext, useState,useEffect } from "react";
import { useNavigate,useLocation } from 'react-router-dom';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const navigate = useNavigate();
    const location = useLocation();
    const [user,setUser] = useState(null);


    useEffect(() => {
      }, []);

    //login request

    const loginUser = async(userData)=>{
        try{
            const res = await fetch(`http://localhost:8800/api/auth/login`,{
                method: "POST",
                headers :{
                    "content-type" : "application/json",
                },
                body: JSON.stringify({...userData})
            });
            const result = await res.json();
            if(!result.error){
                // localStorage.setItem("token",result.token );
                console.log(result);
                // localStorage.getItem("token");
                setUser(result.user);
                navigate('/home');
            }
            else{
              console.log("lu");
                console.log(result.error);
            }
        }
        catch(err){
            console.log(err);
        }
    }

    //register

    const registerUser = async(userData)=>{

        try{
            const res = await fetch(`http://localhost:8800/api/auth/register`,{
                method:"POST",
                headers :{
                    "content-type" : "application/json",
                },
                body: JSON.stringify({...userData})
            });
            const result = await res.json();
            if(!result.error){
              console.log(result);
              navigate('/login');
          }
        }
        catch(err){
            console.log(err);
        }
    }

    return <AuthContext.Provider value={{ loginUser,registerUser,user,setUser }}>{children}</AuthContext.Provider>
};

export default AuthContext;