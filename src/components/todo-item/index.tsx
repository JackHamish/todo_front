import { Button } from "../button";
import CheckBox from "../check-box";
import Icon from "../icon";

type Props = {};

export const TodoItem = ({}: Props) => {
    return (
        <div className="bg-friar-gray rounded-2xl  w-full flex items-center justify-between">
            <CheckBox />
            <h3 className="font-sans text-xl font-semibold truncate w-80">Create Todo </h3>
            <div className="flex gap-2 items-center">
                <h4 className="font-sans text-md">Priority:</h4>
                <span className="font-sans text-md">10</span>
            </div>

            <Button fill={false} className="border-none p-4 w-fit  hover:text-red-500">
                <Icon icon="icon-bin text-current text-xl " />
            </Button>
        </div>
    );
};
