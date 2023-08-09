import { useEffect, useState } from "react";
import DropDown from "./components/DropDown/Dropdown";
import DropDownItem from "./components/DropDown/DropdownItem";
import DropdownNavItem from "./components/DropDown/DropdownNavItem";
import NavItem from "./components/DropDown/NavItem";
import Overlay from "./components/Overlay/Overlay";
import { motion, AnimatePresence } from "framer-motion";
function Header() {
	const [toggled, setToggled] = useState(false);


	useEffect(() => {
		if(toggled){
			document.body.classList.add("overlay")
		}else{

			document.body.classList.remove("overlay")
		}
	}, [toggled])

	const handleClose = () => {
		setToggled(false);
	};

	const handleOpen = () => {
		setToggled(true);
	};
	return (
		<>
			<AnimatePresence>
				{toggled && <Overlay onClick={handleClose} toggled={toggled} />}
			</AnimatePresence>
			<header className="flex justify-between mt-5 items-center w-screen">
				<div className="flex justify-between items-center mx-10 gap-x-16 text-mediumGray w-full md:static fixed top-5">
					<img src="logo.svg" alt="" />

					<motion.nav
						animate={{ right: !toggled ? "-500px" : "0px" }}
						transition={{ duration: 0.5, type: "tween" }}
						className={` md:justify-between md:w-full w-[250px] md:flex fixed md:static md:flex-row flex-col top-0 md:h-fit h-screen z-10 md:bg-opacity-0 bg-almostWhite gap-y-6 justify-start -right-[500px] `}
					>
						<ul className="flex md:flex-row flex-col md:gap-x-8 mt-28 md:mt-0 gap-y-2 md:static ml-5 ">

							<DropdownNavItem title="Features">
								<DropDown translate="md:-translate-x-1/4">
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
							</DropdownNavItem>
							<DropdownNavItem title="Company">
								<DropDown translate="md:translate-x-1/4">
									<DropDownItem title="History" />
									<DropDownItem title="Our Team" />
									<DropDownItem title="Blog" />
								</DropDown>
							</DropdownNavItem>
							<NavItem title="Careers" />
							<NavItem title="About" />
						</ul>
						<div className="flex md:flex-row flex-col md:gap-x-8 md:mt-0 mt-7 text-mediumGray md:items-center items-center gap-y-4">
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
					</motion.nav>
					<button
						className="md:hidden   z-50"
						onClick={!toggled ? handleOpen : handleClose}
					>
						<motion.img
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className="fixed right-5 top-5"
							src={`${
								toggled
									? "icon-close-menu.svg"
									: "icon-menu.svg"
							}`}
							alt="menu-icon"
						/>
					</button>
				</div>
			</header>
		</>
	);
}

export default Header;
