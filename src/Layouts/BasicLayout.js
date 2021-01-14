import React from 'react'

import Menu from '../components/Menu/Menu';

export default function BasicLayout({children, menuColor}) {
    return (
        <>
            <Menu menuColor={menuColor}/>
            {children}
        </>
    )
}
