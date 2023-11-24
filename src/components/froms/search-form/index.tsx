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
import { useEffect } from "react";
import { useDebounce } from "usehooks-ts";
import Select from "react-select";

type SearchFormData = z.infer<typeof searchSchema>;

export const SearchForm = () => {
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
        console.log(data);
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
        console.log(debouncedTitleValue, priorityValue, statusValue);
    }, [debouncedTitleValue, priorityValue, statusValue]);

    return (
        <form onSubmit={onSubmit} className="flex items-center gap-5">
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
                        defaultMenuIsOpen
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
