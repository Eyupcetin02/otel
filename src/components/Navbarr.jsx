import React from 'react';
import "../styles/navbar.css"
const Navbarr = ({setUserSelect , userSelect}) => {

    const handleUserChange = (event) => {
        setUserSelect(event.target.value);
        
      };

    return (
        <div className='navbar'>
            <div className='navbarLogo' >
               <h2>LOGO</h2> 
            </div>


            <div className='navbarSelect'>   
                <ul>
                    <li>Deniz</li>
                    <li>Doğa</li>
                    <li>Parti</li>
                    <li>Gezi</li>
                </ul>
            </div>

            <div className='navbarUser'>
                <select value={userSelect} onChange={handleUserChange} name="" id="">
                    <option value="user1" >user1</option>
                    <option value="user2">user2</option>
                </select>
            </div>
        </div>
    );
}

export default Navbarr;
