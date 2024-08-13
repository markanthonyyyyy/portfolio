interface NavButtonProps {
    name?: string;
}

const NavButton = (props: NavButtonProps) => {

  return (
    <button type="button" className="text-xs text-white font-nunito-sans bg-gradient-to-r from-blue-500 to-cyan-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg md:text-sm px-5 py-2.5 text-center">
        {props.name}</button>
  )

}

export default NavButton