import React from 'react';
import Images from './Images/shivam.png';

const Header=()=>{
    return(<>
    <div className="header">
    
    <img src={Images} alt="Logo" width='70' height='40' />
    <h2>      Notes KEEP</h2>


</div>


        </>
    );
}
export default Header;