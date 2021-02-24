import React ,{useState} from 'react';
import CreateNote from './CreateNote';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Note=(props)=>{


const clickDel=(e)=>{
        e.preventDefault();
        props.deleteItem(props.id);
    }

   
   
    

   
   
return(<>
 <div className="main-note col-3 col-sm-5 col-xs-10 col-md-2 mx-md-5 " >
        <div className="note ">
                <h1 className="hone" placeholder="title"> {props.title }</h1>

                <br />

                <p className="paranote" placeholder="content"> { props.content}</p>

                <button className="clickDel" onClick={clickDel}><DeleteForeverIcon /></button>
        </div>
</div>

    </>
)

}
export default Note;