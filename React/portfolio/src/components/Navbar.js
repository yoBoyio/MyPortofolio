import React from 'react';
import {NavLink} from 'react-router-dom'
import {SocialIcon} from 'react-social-icons'
export default function Navbar () {
    return (
        <header className="bg-gradient-to-r from-green-400 to-blue-500">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact 
                    activeClassName="text-white"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-gray-800 text-4xl font-bold cursive tracking-widest"
                    >
                        Boyio
                    </NavLink>
                    <NavLink to="/post" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-800"
                    activeClassName="text-white"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink to="/projects"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-800"
                    activeClassName="text-white"
                    >
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-800"
                    activeClassName="text-white"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://github.com/yoBoyio"
                     classname="mr-4"
                      target="_blank"
                        fgColor="#fff"
                         style={{height:35, width:35}} />
                    <SocialIcon url="https://www.facebook.com/"
                     classname="mr-4"
                      target="_blank"
                        fgColor="#fff"
                         style={{height:35, width:35}} />
                    <SocialIcon url=""
                     classname="mr-4"
                      target="_blank"
                        fgColor="#fff"
                         style={{height:35, width:35}} />
                </div>
            </div>
        </header>
    )
}