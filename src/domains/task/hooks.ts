import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    CreateTask,
    TaskQueryParams,
    UpdateTask,
    createTask,
    deleteTask,
    getAllTasks,
    updateTask,
} from ".";

export const useTasks = (params: TaskQueryParams) =>
    useQuery({
        queryKey: ["tasks", params],
        queryFn: () => getAllTasks(params),
        placeholderData: keepPreviousData,
    });

export const useAddTask = () => {
    return useMutation({
        mutationKey: ["create-task"],
        mutationFn: (data: CreateTask) => createTask(data),
    });
};

export const useUpdateTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["update-task"],
        mutationFn: ({ id, data }: { id: string; data: UpdateTask }) => updateTask({ id, data }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["task"] });
        },
    });
};

export const useDeleteTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["delete-task"],
        mutationFn: (id: string) => deleteTask(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["task"] });
        },
    });
};
