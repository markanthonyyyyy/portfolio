import React from 'react'

interface ContentContainerProps {
    children? : React.ReactNode;
}

const ContentContainer = (props: ContentContainerProps) => {
  return (
    <div className='bg-zinc-800 h-screen'>{props.children}</div>
  )
}

export default ContentContainer