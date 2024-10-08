interface NavButtonProps {
    name?: string;
    onClick?: () => void;
    href? : string;
}

const NavButton = (props: NavButtonProps) => {

  return (
    <button className="text-xs text-white whitespace-nowrap font-nunito-sans px-3 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-center scale-0 transition-scale duration-500 md:scale-100 md:text-sm md:px-5 md:py-2.5" onClick={props.onClick}>
        {props.name}</button>
  )

}

export default NavButton