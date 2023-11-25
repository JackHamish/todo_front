import { Task, TaskStatus } from "@/domains/task";
import { Button } from "../button";
import CheckBox from "../check-box";
import Icon from "../icon";
import { useDeleteTask, useUpdateTask } from "@/domains/task/hooks";
import { useState } from "react";
import { toast } from "react-toastify";
import { cn } from "@/utils/cn";

type Props = Task;

export const TaskItem = ({ id, title, priority, status }: Props) => {
    const { mutateAsync: deleteTaskAction } = useDeleteTask();
    const { mutateAsync: updateTaskAction } = useUpdateTask();

    const handleCheckBoxChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.checked) {
            return;
        }

        await updateTaskAction(
            { id, data: { status: TaskStatus.DONE } },
            {
                onSuccess() {
                    toast.success(`Congratulation you task is complete: ${title}`);
                },
            }
        );
    };

    const handleClickDelete = async () => {
        await deleteTaskAction(id, {
            onSuccess() {
                toast.success(`Task deleted: ${title}`);
            },
        });
    };

    return (
        <div
            className={cn(
                "bg-friar-gray border-2 border-friar-gray rounded-2xl  w-full flex items-center justify-between",
                { "border-green-500": status === TaskStatus.DONE }
            )}
        >
            <CheckBox
                onChange={handleCheckBoxChange}
                defaultChecked={status === TaskStatus.DONE ? true : false}
                disabled={status === TaskStatus.DONE ? true : false}
            />
            <h3 className="font-sans text-xl font-semibold truncate w-80">{title} </h3>
            <div className="flex gap-2 items-center">
                <h4 className="font-sans text-md">Priority:</h4>
                <span className="font-sans text-md">{priority}</span>
            </div>

            <Button
                onClick={handleClickDelete}
                fill={false}
                className="border-none p-4 w-fit  hover:text-red-500"
            >
                <Icon icon="icon-bin text-current text-xl " />
            </Button>
        </div>
    );
};