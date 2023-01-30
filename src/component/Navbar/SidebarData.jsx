import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData =[
    {
        title:" Ankiety",
        path:'/Homepage',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:' Stwórz Ankiete',
        path:'/CreatePoll',
        icon:<AiIcons.AiFillPlusCircle/>,
        cName:'nav-text'
    },
    {
        title:' Wyniki',
        path:'/PresentationAll',
        icon:<AiIcons.AiFillQuestionCircle/>,
        cName:'nav-text'
    }
    

]