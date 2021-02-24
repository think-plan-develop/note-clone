import React, { useState } from 'react';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import Note from './Note';
const CreateNote=(props)=>{
    const[expand,setExpand]=useState(false);
    const[titlename,settitle]=useState({
        title:"",
        content:""});
    

    const entertitle=(event)=>{
        // console.log(event.target.value);

        const value=event.target.value;
        const name=event.target.name;
        // console.log(event.target.name);

     
        settitle((preval)=>{
            return {
                ...preval,
                [name]:value,
            }
        }) 
        // console.log(titlename);      
    }

//    console.log(titlename);
    
    
            
         


    const clickPlus=(k)=>{
        k.preventDefault();
       
        // 
        if(titlename.title===""){
            alert("enter the title");
        }
        else{
            console.log(titlename);
            props.passNote(titlename);
        }
        settitle({title:"",content:""});
    }

    const expandit=()=>{
        setExpand(true);
    }
    const expandout=()=>{
    setExpand(false)    }
    // console.log(titlename);

return(<>
        <div className="create-note"> 
       
       
        <form>
      { expand?

       <input placeholder="Title"
        type="text"
        name="title" 
        value={titlename.title}
         onChange={entertitle}>
         </input>  :null}

              <br/> 
      
       <textarea placeholder="enter something"
        name="content" value={titlename.content}
         onChange={entertitle} onMouseOver={expandit} onDoubleClick={expandout}></textarea> 

           <br/>

      { expand?
        <button className="fab" onClick={clickPlus}><ControlPointIcon /></button>:null}

        </form>  
      

        </div>
    </>
)


}
export default CreateNote;