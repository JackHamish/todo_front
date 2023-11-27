"use client";
import { z } from "zod";
import { createTaskSchema, prioritySelectData } from "./constants";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/input";

import { Button } from "@/components/button";
import { useAddTask } from "@/domains/task/hooks";
import { toast } from "react-toastify";
import { ErrorHelpers } from "@/services/error/helpers";
import { useRouter } from "next/navigation";
import { Select } from "@/components/select";

type CreateTaskFormData = z.infer<typeof createTaskSchema>;

export const CreateTaskForm = () => {
  const { mutateAsync: createTaskAction } = useAddTask();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },

    control,
  } = useForm<CreateTaskFormData>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: { title: "", priority: 1 },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await createTaskAction(data, {
        onSuccess(data, variables, context) {
          toast.success("Task Created");
          router.back();
        },
      });
    } catch (error) {
      toast.error(ErrorHelpers.getMessage(error));
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-[460px] flex-col items-center gap-5"
    >
      <h2 className="font-sans text-5xl font-semibold">Create Task</h2>

      <div className="mt-10 flex  items-center gap-4">
        <Input id="title" placeholder="Title" {...register("title")} />

        <Controller
          control={control}
          name="priority"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Select
              options={prioritySelectData}
              onChange={(val) => onChange(val?.value)}
              onBlur={onBlur}
              isSearchable={false}
              unstyled
              value={prioritySelectData.find((c) => c.value === value)}
              id={"priority"}
              ref={ref}
            />
          )}
        />
      </div>

      <div className="flex  items-center justify-center gap-5">
        <Button type="submit" disabled={isSubmitting} className="mt-5" fill>
          {isSubmitting ? "Loading..." : "Create"}
        </Button>
      </div>
    </form>
  );
};
