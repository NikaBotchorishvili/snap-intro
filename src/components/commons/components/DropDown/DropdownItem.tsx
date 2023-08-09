type Props = {
	title: string;
	icon?: string;
};
function DropDownItem({ title, icon }: Props) {
	return (
		<div className="flex items-center md:justify-between md:ml-0 ml-5 gap-x-5 md:gap-x-2 md:mt-2">
			{icon && <img src={icon} alt="icon" />}
			<span>{title}</span>
		</div>
	);
}

export default DropDownItem;
