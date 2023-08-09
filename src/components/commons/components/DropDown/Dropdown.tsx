import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
	children?: ReactNode;
	translate?: string;
};

function DropDown({ children, translate }: Props) {
	return (
		<motion.div
            className={`md:absolute static md:gap-y-1 gap-y-5 mt-2 md:mt-0 top-[60px] md:bg-almostWhite md:shadow-2xl md:p-6 flex flex-col ${translate}  `}
		>
			{children}
		</motion.div>
	);
}

export default DropDown;
