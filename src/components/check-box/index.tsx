import { cn } from "@/utils/cn";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const CheckBox = ({ className, ...rest }: Props) => {
    return (
        <div className="flex items-center p-4">
            <input
                type="checkbox"
                className={cn(
                    "w-4 h-4 accent-heliotrope bg-gray-100 border-gray-300 rounded focus:ring-heliotrope cursor-pointer",
                    className
                )}
                {...rest}
            />
        </div>
    );
};

export default CheckBox;
