import React from 'react';

const Footer=()=>{
    const a=new Date().getFullYear();

    return(
        <>
        <div className="foot">
        <p id="footer" style={{textAlign:"center"}}>copyright © {a}</p>


        </div>
        </>
    )
};
export default Footer;