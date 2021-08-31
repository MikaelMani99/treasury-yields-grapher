import React from "react";
import { NavLink } from 'react-router-dom'
import { ImHome3 } from 'react-icons/im'

const CalendarPicker = () => {
    return (
        <nav className="flex border-b-2 border-purple-300 ">
            <NavLink exact to="/" 
                     className="flex-1">
                <div>
                    <ImHome3 size="5rem" className="text-purple-500"/>
                </div>
            </NavLink>
            <NavLink exact to="/yields-day"
                     activeClassName="border-purple-500"
                     className="text-xl p-8 flex-2 border-transparent border-b-8 hover:border-purple-500 transition ease-in duration-300">
                <div>
                    yields day
                </div>
            </NavLink>
            <NavLink exact to="/yields-chart" 
                     activeClassName="border-purple-500"
                     className="text-xl p-8 flex-2 border-transparent border-b-8 hover:border-purple-500 transition ease-in duration-300">
                <div>
                    yields chart
                </div>
            </NavLink>
        </nav>
    );
}

export default CalendarPicker