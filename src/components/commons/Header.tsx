import { useState } from "react";
import DropDown from "./components/Dropdown";
import DropDownItem from "./components/DropdownItem";
import NavItem from "./components/NavItem";

function Header() {
	const [toggled, setToggled] = useState(false);
	return (
		<header className="flex justify-between mt-5 items-center w-screen">
			<div className="flex justify-between items-center mx-10 gap-x-16 text-mediumGray w-full ">
				<img src="logo.svg" alt="" />

				<nav
					className={` md:justify-between md:w-full w-[250px] right-0 md:flex fixed md:static md:flex-row flex-col top-0 md:h-fit h-screen z-10 md:bg-opacity-0 bg-almostWhite gap-y-6 justify-start	  ${
						toggled ? "flex" : "hidden"
					}`}
				>
					<ul className="flex md:flex-row flex-col md:gap-x-8 mt-28 md:mt-0 gap-y-2 md:static ml-5 ">
						<NavItem title="Features">
							<DropDown translate="-translate-x-1/2">
								<DropDownItem
									title="Todo List"
									icon="icon-todo.svg"
								/>
								<DropDownItem
									title="Calendar"
									icon="icon-calendar.svg"
								/>
								<DropDownItem
									title="Reminders"
									icon="icon-reminders.svg"
								/>
								<DropDownItem
									title="Planning"
									icon="icon-planning.svg"
								/>
							</DropDown>
						</NavItem>
						<NavItem title="Company">
							<DropDown>
								<DropDownItem title="History" />
								<DropDownItem title="Our Team" />
								<DropDownItem title="Blog" />
							</DropDown>
						</NavItem>
						<NavItem title="Careers" />
						<NavItem title="About" />
					</ul>
					<div className="flex md:flex-row flex-col md:gap-x-8 text-mediumGray md:items-center items-center gap-y-4">
						<a className="hover:text-almostBlack" href="#">
							Login
						</a>
						<a
							className=" text-md px-5 border border-mediumGray rounded-xl py-2 hover:text-almostBlack hover:border-almostBlack  w-10/12 text-center "
							href="#"
						>
							Register
						</a>
					</div>
				</nav>
				<button
					className="md:hidden   z-50"
					onClick={() => setToggled((prev) => !prev)}
				>
					<img
						className="fixed right-5"
						src={`${
							toggled ? "icon-close-menu.svg" : "icon-menu.svg"
						}`}
						alt="menu-icon"
					/>
				</button>
			</div>
		</header>
	);
}

export default Header;
