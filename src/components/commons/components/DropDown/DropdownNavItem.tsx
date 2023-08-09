import { ReactNode, useEffect, useState, useRef } from "react";

type Props = {
	children?: ReactNode;
	title: string;
};

function DropdownNavItem({ children, title }: Props) {
	const [open, setOpen] = useState(false);
	const menuRef = useRef<HTMLLIElement | null>(null);
	useEffect(() => {
		const menu = menuRef.current;
		const handler = (e: any) => {
			if (menu instanceof HTMLElement ) {
				if (!menu.contains(e.target) && !e.target.hasAttribute("data-menu")) {
					setOpen(false);
				}
			
			}
		};
		document.addEventListener("click", handler);
		return () => {
			document.removeEventListener("click", handler);
		};
	}, []);
	return (
		<li data-menu="" onClick={() => setOpen((prev) => !prev)} ref={menuRef}>
			<span data-menu="" className="flex  items-center gap-x-2 hover:text-almostBlack">
				<button data-menu="" className="text-xl">{title}</button>
				<img
				data-menu=""
					src={open ? "icon-arrow-up.svg" : "icon-arrow-down.svg"}
					alt="arrow icon"
				/>
			</span>
			{open && children}
		</li>
	);
}

export default DropdownNavItem;
