import React from 'react'
import { useNavigate } from "react-router";
import Logo from "../Assets/Logo.svg"

function Header() {
    const navigate = useNavigate();
    return (
        <div className="pt-2">
            <div className='flex flex-row items-center px-28'>
            <img src={Logo} className="h-6 px-8" />
                <div className=''>
                    <div className="mr-4">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header