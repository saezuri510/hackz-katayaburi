import React from 'react'

interface BoxChildren {
    children: React.JSX.Element
}

function Box( {children}: BoxChildren ) {
  return (
    <div className="m-auto h-full w-full p-5">
        <div className="m-auto h-5/6 w-5/6 p-5 shadow-inner shadow-black">
            {children}
        </div>
    </div>
  )
}

export default Box