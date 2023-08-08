import { ReactNode, useState } from "react";

type Props = {
	children?: ReactNode;
	title: string;
};

function NavItem({ children, title }: Props) {
    const [open, setOpen] = useState(false);
	return (
		<li className="hover:text-almostBlack">
			<button onClick={() => setOpen(prev => !prev)}>{title}</button>

            {open && children}
		</li>
	);
}

export default NavItem;
