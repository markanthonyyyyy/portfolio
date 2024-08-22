import React from "react"
interface MainContainerProps {
    children?: React.ReactNode;
}

const MainContainer = (props: MainContainerProps) => {
  return (
    <>
        <div className="bg-zinc-800 h-screen">
          {props.children}
        </div> 
    </>
  )
}

export default MainContainer