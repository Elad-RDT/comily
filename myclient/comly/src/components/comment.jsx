import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";


export const CommentsContext = createContext();
const url = "http://localhost:3000/api/users";
const secUrl = "http://localhost:3000/api/comments";

function Comments(props) {
  const { children } = props;
  const [comments, setComments] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [name, setName] = useState("");

  const addNewComment = async (body) => {
    // console.log(body);
    try {
      const token = localStorage.getItem("token");
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      const decodeName = decodedToken.name;
      setName(decodeName);
      body.name = decodeName;
      const response = await axios.post(secUrl, body,);
      console.log(name);
      console.log(response);
      
      console.log(body)

      setComments([...comments, { ...response.data, name: decodedToken.name }]);

      setErrorMsg("Comment Confirmed");
      setTimeout(() => {
        setErrorMsg("welcome there");
      }, 5000);
    } catch (error) {
      setErrorMsg("something wrong");
      setTimeout(() => {
        setErrorMsg("welcome there");
      }, 3000);
      return errorMsg;
    }
  };

  // const addNewComment= async(body)=>{
  //         console.log(body);
  //         try{
  //         const response = await axios.post(secUrl,body,{headers:{'x-auth-token':localStorage.getItem('token')}});
  //         const token=response.headers['x-auth-token']
  //         console.log(token);
  //         const decodedToken=jwt(token);
  //         console.log(decodedToken)
  //         setName(decodedToken.name)
  //         console.log(name)
  //         setComments([...comments, response.data])
  //         // setComments([...comments, response.data])

  //         setErrorMsg("Comment Confirmed")
  //         setTimeout(() => {
  //             setErrorMsg('welcome there');
  //         }, 5000);

  //     }
  //     catch(error){
  //         setErrorMsg("something wrong")
  //         setTimeout(() => {
  //             setErrorMsg('welcome there')
  //         }, 3000);
  //         return errorMsg
  //     }
  //     }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(secUrl);
      setComments(response.data);
      console.log(1);
    }
    fetchData();
  }, []);
  console.log(comments);
  // addNewComment()

  // useEffect(() => {
  //     async function fetchData() {
  //       const response = await axios.get(secUrl);
  //       setUsers(response.data)
  //     }
  //     fetchData();
  //   }, []);

  return (
    <CommentsContext.Provider
      value={{ comments, setComments, addNewComment, name, setName }}
    >
      {children}
    </CommentsContext.Provider>
  );
}

export default Comments;
