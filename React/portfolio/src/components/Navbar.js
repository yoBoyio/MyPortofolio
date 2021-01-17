import React from 'react';
import {NavLink} from 'react-router-dom'
import {SocialIcon} from 'react-social-icons'
export default function Navbar () {
    return (
        <header className="bg-gradient-to-r from-blue-200 to-pink-300">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact 
                    activeClassName="text-white"
                    className="inline-flex items-center py-6 px-3 mr-4 text-pink-900 hover:text-pink-600 text-4xl font-bold cursive tracking-widest"
                    >
                        Boyio
                    </NavLink>
                    <NavLink to="/post" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-pink-900 hover:text-pink-600"
                    activeClassName="text-black"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink to="/projects"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-pink-900 hover:text-pink-600"
                    activeClassName="text-white"
                    >
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-pink-900 hover:text-pink-600"
                    activeClassName="text-white"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://github.com/yoBoyio"
                     className="mr-4"
                      target="_blank"
                        fgColor="#fff"
                         style={{height:35, width:35}} />
                    <SocialIcon url="https://www.facebook.com/"
                     className="mr-4"
                      target="_blank"
                        fgColor="#fff"
                         style={{height:35, width:35}} />
                    <SocialIcon url="https://www.linkedin.com/in/dimitris-tolios-04073a1b4/"
                     className="mr-4"
                      target="_blank"
                        fgColor="#fff"
                         style={{height:35, width:35}} />
                </div>
            </div>
        </header>
    )
}