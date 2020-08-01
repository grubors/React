import React from 'react'

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello Strallx</h1>
    //     </div>
    // )

    return React.createElement('div',null,React.createElement('h1', null,'Hello str'))
}

export default Hello