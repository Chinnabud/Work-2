import React from 'react';
import { Link } from 'react-router-dom';

function MainNav() {
    return (
        <nav className='bg-green-300'>
            <div className='mx-auto px-4'>
                <div className="flex justify-between h-16">
                    <div className='flex item-center gap-4'>
                        <Link to={'/'} className='text-2x1 font-bold'>LOGO</Link>
                        <Link to={'/'}>Home</Link>
                        <Link to={'shop'}>Shop</Link>
                        <Link to={'cart'}>Cart</Link>
                    </div>

                    <div className='flex item-center gap-4'>
                        <Link to={'register'}>Register</Link>
                        <Link to={'login'}>Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default MainNav;
