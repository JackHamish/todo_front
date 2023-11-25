"use client";
import { Controller, useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import {
  prioritySelectData,
  searchSchema,
  selectClassnamesConfig,
  selectStylesConfig,
  statusSelectData,
} from "./constants";
import { Input } from "@/components/input";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
import Select from "react-select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTasks } from "@/domains/task/hooks";
import { useQueryClient } from "@tanstack/react-query";
import pickBy from "lodash.pickby";
import { log } from "console";

type SearchFormData = z.infer<typeof searchSchema>;

export const SearchForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    control,
    formState: { errors },
  } = useForm<SearchFormData>({
    defaultValues: { title: "", priority: "priority_ASC", status: "all" },
  });

  const onSubmit = handleSubmit(async (data) => {
    const newParams = new URLSearchParams(searchParams.toString());

    const params = {
      sortField:
        data?.priority?.split("_")[0] === "all"
          ? ""
          : data?.priority?.split("_")[0],
      sortOrder: data?.priority?.split("_")[1] || "",
      title: data.title,
      status: data.status,
    };

    const filteredParams = pickBy(params, (value) => value && value.length > 0);

    if (filteredParams?.title) {
      newParams.set("title", `${params.title}`);
    } else {
      newParams.delete("title");
    }

    if (filteredParams?.sortField) {
      newParams.set("sortField", `${params.sortField}`);
    } else {
      newParams.delete("sortField");
    }

    if (filteredParams?.sortOrder) {
      newParams.set("sortOrder", `${params.sortOrder}`);
    } else {
      newParams.delete("sortOrder");
    }

    if (filteredParams?.status) {
      newParams.set("status", `${params.status}`);
    } else {
      newParams.delete("status");
    }
    if (searchParams.toString() !== newParams.toString()) {
      router.push(`${pathname}?${newParams}`, { scroll: false });
    }
  });

  const [titleValue, priorityValue, statusValue] = useWatch({
    control,
    name: ["title", "priority", "status"],
  });

  const debouncedTitleValue = useDebounce<string | undefined>(titleValue, 500);

  useEffect(() => {
    if (debouncedTitleValue || priorityValue || statusValue) {
      onSubmit();
    }
  }, [debouncedTitleValue, priorityValue, statusValue]);

  return (
    <form
      onSubmit={onSubmit}
      className="flex justify-center  items-center gap-10 max-sm:flex-wrap"
    >
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Input
            id="title"
            name="title"
            placeholder="Search"
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <Controller
        control={control}
        name="status"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Select
            styles={selectStylesConfig}
            classNames={selectClassnamesConfig}
            options={statusSelectData}
            onChange={(val) => onChange(val?.value)}
            onBlur={onBlur}
            isSearchable={false}
            unstyled
            value={statusSelectData.find((c) => c.value === value)}
            id={"status"}
            ref={ref}
          />
        )}
      />

      <Controller
        control={control}
        name="priority"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Select
            styles={selectStylesConfig}
            classNames={selectClassnamesConfig}
            options={prioritySelectData}
            onChange={(val) => onChange(val?.value)}
            onBlur={onBlur}
            unstyled
            isSearchable={false}
            value={prioritySelectData.find((c) => c.value === value)}
            id="priority"
            ref={ref}
          />
        )}
      />
    </form>
  );
};
