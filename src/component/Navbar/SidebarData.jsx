import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData =[
    {
        title:" Home",
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:' CreatePoll',
        path:'/CreatePoll',
        icon:<AiIcons.AiFillPlusCircle/>,
        cName:'nav-text'
    },
    {
        title:' Info',
        path:'/',
        icon:<AiIcons.AiFillQuestionCircle/>,
        cName:'nav-text'
    }
    

]