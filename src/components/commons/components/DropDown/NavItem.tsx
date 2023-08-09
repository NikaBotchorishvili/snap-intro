type Props = {
    title: string
}

function NavItem({title}: Props) {
    return (
        <li>
			<span className="flex  items-center gap-x-2 hover:text-almostBlack">
				<button className="text-xl">{title}</button>

			</span>
		</li>
    );
}

export default NavItem;