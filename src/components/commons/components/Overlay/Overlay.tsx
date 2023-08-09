import { motion } from "framer-motion";

type Props = {
	toggled: boolean;
	onClick: () => void;
};

function Overlay({ toggled, onClick }: Props) {
	return (
		<>
			<motion.div
				onClick={onClick}
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.4 }}
				exit={{ opacity: 0 }}
				className="absolute w-screen opacity-0  h-screen bg-almostBlack "
			></motion.div>
		</>
	);
}

export default Overlay;
