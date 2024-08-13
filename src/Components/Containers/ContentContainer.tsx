import React from 'react'

interface ContentContainerProps {
    children? : React.ReactNode;
}

const ContentContainer = (props: ContentContainerProps) => {
  return (
    <div className='bg-white h-screen'>{props.children}</div>
  )
}

export default ContentContainer