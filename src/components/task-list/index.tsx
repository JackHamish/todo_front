"use client";
import { useTasks } from "@/domains/task/hooks";
import { TaskItem } from "../task-item";
import { useSearchParams } from "next/navigation";
import { TaskQueryParams } from "@/domains/task";

const TaskList = () => {
  const searchParams = useSearchParams();

  const queryParams: TaskQueryParams = Object.fromEntries(
    searchParams.entries(),
  );

  if (queryParams.status === "all") {
    delete queryParams.status;
  }

  const { data: tasks } = useTasks(queryParams);

  return (
    <div className="max-w-2xl w-full h-[57vh] p-5 mt-5 gap-6 flex flex-col overflow-auto">
      {tasks?.length ? (
        tasks.map((task) => <TaskItem key={task.id} {...task} />)
      ) : (
        <span className="font-sans text-md text-center">No tasks</span>
      )}
    </div>
  );
};

export default TaskList;
