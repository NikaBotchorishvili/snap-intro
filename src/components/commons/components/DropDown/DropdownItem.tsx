type Props = {
	title: string;
	icon?: string;
};
function DropDownItem({ title, icon }: Props) {
	return (
		<div className="flex items-center justify-between gap-x-2 md:mt-2">
			{icon && <img src={icon} alt="icon" />}
			<span>{title}</span>
		</div>
	);
}

export default DropDownItem;
