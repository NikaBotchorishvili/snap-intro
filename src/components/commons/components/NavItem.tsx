import { ReactNode, useEffect, useState, MouseEvent, useRef } from "react";

type Props = {
	children?: ReactNode;
	title: string;
};

function NavItem({ children, title }: Props) {
	const [open, setOpen] = useState(false);
	const menuRef = useRef(null);
	useEffect(() => {
		const menu = menuRef.current
		const handler = ((e) => {
			if(menu){
				if(!menu.contains(e.target)){
					setOpen(false);
				}
			}
		})	
		document.addEventListener("click", handler)
		return () => {
			document.removeEventListener("click", handler)
		}
	}, [])
	return (
		<li onClick={() => setOpen((prev) => !prev)} ref={menuRef} className="">
			<span className="flex  items-center gap-x-2 hover:text-almostBlack">
				<button className="text-xl">{title}</button>
				<img
					src={open ? "icon-arrow-up.svg" : "icon-arrow-down.svg"}
					alt="arrow icon"
				/>

			</span>
			{open && children}
		</li>
	);
}

export default NavItem;
