import React from 'react'

interface ContentContainerProps {
    children? : React.ReactNode;
}

const ContentContainer = (props: ContentContainerProps) => {
  return (
    <div className='bg-zinc-800 h-screen text-white' >{props.children}</div>
  )
}

export default ContentContainer