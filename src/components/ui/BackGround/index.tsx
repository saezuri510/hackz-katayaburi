import React from 'react'

interface BackGroundChildren {
    children: React.JSX.Element
}

function BackGround( { children } : BackGroundChildren ) {
  return (
    <div className='w-screen h-screen bg-gradient-to-b from-sky-600 to-purple-400'>
        {children}
    </div>
  );
}

export default BackGround