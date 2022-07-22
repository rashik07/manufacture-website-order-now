import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const items = [
        {
            label: (
                <Link to="/home">
                    Home
                </Link>
            ),
        
            key: 'home',

        },
        {
            label: (
                <Link to="/login">
                    Login
                </Link>
            ),
        
            key: 'login',

        },

    
    ];


    const [current, setCurrent] = useState('mail');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <div>
            <Menu style={{padding:"0px 10%"}} theme="dark" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
    );
};

export default Navbar;