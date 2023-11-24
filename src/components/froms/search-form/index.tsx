"use client";
import { Controller, useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { prioritySelectData, searchSchema, statusSelectData } from "./constants";
import { Input } from "@/components/input";
import { useEffect } from "react";
import { useDebounce } from "usehooks-ts";
import Select, { ClassNamesConfig, StylesConfig } from "react-select";
import { cn } from "@/utils/cn";

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

    const controlStyles = {
        base: /*tw*/ " text-black border-2 outline-none border-friar-gray font-sans rounded-3xl bg-white hover:cursor-pointer h-[52px] w-32",
        focus: /*tw*/ "border-friar-gray outline-none ",
        nonFocus: /*tw*/ "border-gray-300 hover:border-friar-gray",
    };
    const placeholderStyles = /*tw*/ "pl-1 py-0.5 ";
    const selectInputStyles = /*tw*/ "pl-1 py-0.5";
    const valueContainerStyles = /*tw*/ "p-2";
    const singleValueStyles = /*tw*/ "leading-7 text-center";
    const indicatorsContainerStyles = /*tw*/ "p-1 ";
    const indicatorSeparatorStyles = "none";
    const dropdownIndicatorStyles = /*tw*/ "p-1 hover:bg-gray-100  rounded-2xl hover:text-black";
    const menuStyles =
        /*tw*/ "p-2 mt-2 border border-gray-200 bg-white rounded-3xl text-friar-gray animate-fadeIn ";
    const groupHeadingStyles = /*tw*/ "ml-3 mt-2 mb-1  text-sm";
    const optionStyles = {
        base: /*tw*/ "hover:cursor-pointer px-3 py-2 rounded-3xl text-center",
        focus: /*tw*/ "bg-gray-100 active:bg-gray-200",
        selected:
            /*tw*/ "text-black font-semibold after:content-['✔'] after:ml-2 after:text-green-500 ",
    };
    const noOptionsMessageStyles =
        /*tw*/ " p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm";

    const selectStylesConfig: StylesConfig<any, false, any> = {
        input: (base) => ({
            ...base,
            "input:focus": {
                boxShadow: "none",
            },
        }),
        control: (base) => ({
            ...base,
        }),
        dropdownIndicator: (base, state) => ({
            ...base,
            transition: "all .2s ease",
            transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "none",
        }),
    };

    const selectClassnamesConfig: ClassNamesConfig = {
        control: ({ isFocused }) =>
            cn(isFocused ? controlStyles.focus : controlStyles.nonFocus, controlStyles.base),
        placeholder: () => placeholderStyles,
        input: () => selectInputStyles,
        valueContainer: () => valueContainerStyles,
        singleValue: () => singleValueStyles,
        indicatorsContainer: () => indicatorsContainerStyles,
        indicatorSeparator: () => indicatorSeparatorStyles,
        dropdownIndicator: () => dropdownIndicatorStyles,
        menu: () => menuStyles,
        groupHeading: () => groupHeadingStyles,
        option: ({ isFocused, isSelected }) =>
            cn(
                isFocused && optionStyles.focus,
                isSelected && optionStyles.selected,
                optionStyles.base
            ),
        noOptionsMessage: () => noOptionsMessageStyles,
    };

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
