import React from 'react'


const Layout = ({children}) => {
    return(
        <>
            <div>

               
                <div className='container mx-auto'>
                    {children}                    
                </div>
                

            </div>

        </>
    )
}

export default Layout