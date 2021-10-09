import React from 'react';
import Spacer from './spacer';

const Navbar = () => {
    return <div>
        <nav className="bg-white shadow">
            <Spacer>
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">GitHub Label Builder</div>
                    </div>
                </div>
            </Spacer>
        </nav>
    </div>
}

export default Navbar;