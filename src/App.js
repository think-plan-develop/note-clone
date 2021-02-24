
import './App.css';
import React ,{useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import api from './Contact';





function App(titlename) {
  const[additem,setAdditem]=useState([]);
  //
  const LOCAL_STORAGE_KEY="additem";


  const addNote=(titlename)=>{
    // alert("hi");
    setAdditem((predata)=>{
      return [...predata,titlename]
    
    })
    console.log(additem);
  
   
  }
  console.log(additem);
//
useEffect(()=>
 {
  // const retriveData =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
// if(retriveData) setAdditem(retriveData)
const retriveData =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
if(retriveData) setAdditem(retriveData)
// const getAllContacts=async()=>{
// 
  // const allContact=await retriveData();
  // if(additem) setAdditem(allContact);
// getAllContacts();

}

,[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(additem))
  },[additem])


const loginname="a";
const loginpassword="rama";



  ///

  const onDelete=(id)=>{
    setAdditem((olddata)=>
      olddata.filter((current,inex)=>{
        return inex!==id;
      })
    )
    
  }
  return (
    <div className="App">

   
   <Header />
   <CreateNote passNote={addNote} />
   
  <div className="appnote">
  { additem.map((val,index)=>{
   
     return (<> 
                    <Note
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    deleteItem={onDelete}
                    
                    />
            
             </>)
        
            }
   )}
   </div>
   
   
   
   <Footer />
   
   
   
   
      
    
    </div>
  );
}

export default App;
