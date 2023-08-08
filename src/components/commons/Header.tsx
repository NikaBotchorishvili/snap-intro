import NavItem from "./components/NavItem";

function Header() {
	return (
		<header className="flex justify-between mx-10 mt-5 items-center">
			<div className="flex items-center gap-x-16 text-mediumGray">
				<h1 className="text-5xl font-bold text-almostBlack">snap</h1>
				<nav>
					<ul className="flex gap-x-8">
						<NavItem title="Features">

                        </NavItem>
						<NavItem title="Company">

                        </NavItem>
						<NavItem title="Careers" />
						<NavItem title="About" />
					</ul>
				</nav>
			</div>
			<div className="flex gap-x-8 text-mediumGray items-center">
				<a className="hover:text-almostBlack" href="#">
					Login
				</a>
				<a
					className=" text-md px-5 border border-mediumGray rounded-xl py-2 hover:text-almostBlack hover:border-almostBlack"
					href="#"
				>
					Register
				</a>
			</div>
		</header>
	);
}

export default Header;
