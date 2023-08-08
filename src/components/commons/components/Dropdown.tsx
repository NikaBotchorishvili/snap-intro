import { ReactNode } from "react";

type Props = {
	children?: ReactNode;
    translate?: string
};

function DropDown({children, translate}: Props) {
	return (
        <div className={`absolute top-[60px] bg-almostWhite shadow-2xl p-6 flex flex-col  ${translate}`}>
            {children}
        </div>
    );
}

export default DropDown;
