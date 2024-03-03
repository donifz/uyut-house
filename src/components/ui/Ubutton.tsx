
const Ubutton = ({className, children}:{className:string, children:React.ReactNode}) => {
  return (
	<button className={"bg-blue rounded-[5px] py-[15px] px-7.5 text-white "+className}>
		{children}
	</button>
  )
}

export default Ubutton