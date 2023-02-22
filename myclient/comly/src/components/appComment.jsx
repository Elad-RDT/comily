
import React from 'react';
import { useContext } from 'react';
import { useFormik } from "formik";
import { CommentsContext } from './comment';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Card from 'react-bootstrap/Card';



const AppComment = () => {
    const{comments,setComments,addNewComment,name,setName}=useContext(CommentsContext)
    const formik = useFormik({
        initialValues: {
      commentBody:''
        },
        });

        const  handelsubmitComment=(e)=>{
            e.preventDefault();
            let newVal=formik.values
            console.log(newVal)
            addNewComment(newVal)
            // setTimeout(() => {
            //     formik.handleReset()
            // }, 3000);
            
        
          }
    return (
        <div>
<div>

        <form onSubmit={(e)=>{handelsubmitComment(e)}}>
        {/* <label htmlFor="">Comment here</label>
        <input
            type="text"
            className="form-control"
            name="commentBody"
            placeholder="Enter Name"
            value={formik.values.commentBody}
            onChange={formik.handleChange}
            /> */}

<div class="login__field" style={{display:'flex', justifyContent:'center'}}>
					<i class="login__icon fas fa-comment"></i>
					<input type="text" class="login__input" placeholder="Add Comment"
                        name="commentBody"
                        value={formik.values.commentBody}
                        onChange={formik.handleChange} style={{width:'60vh',borderRadius:'26px',
                        border: '1px solid #D4D3E8',	background: '#fff'}}/>
            <button class="button login__submit" type='submit'  style={{width:'10vh'}}>
					<span class="button__text" >Add</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>	
				</div>
    
        </form>
</div>


    
    {comments.map((item, index)=>{
   return(
    <div>
    <Card style={{boredr:'1px black', borderRadius:'60px', display:'flex', flexWrap:'wrap', width:'60vh' }} className="comment">
      <div key={index} >
         <p style={{fontSize:25, marginLeft:'10%'}}>{item.name}: {' '} <span style={{fontSize:15, marginRight:'5%'}}>{item.commentBody}</span> </p>
      </div>
    </Card>
    <br />
    </div>
   )
  })}
 
    </div>
        
      );
}
 
export default AppComment;



