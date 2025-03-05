"use client";

import { Check, ChevronsUpDown } from "lucide-react";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface Item {
    id: string;
    name: string;
}

interface ComboboxProps {
    items: Item[];
    selectedId: string;
    onIdChange: (value: string) => void;
    className?: string;
    disabled?: boolean;
}

export function Combobox({ items, selectedId, onIdChange, className, disabled }: ComboboxProps): React.ReactNode {
    const [open, setOpen] = useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn("w-[200px] justify-between", className)}
                    disabled={disabled}
                >
                    {selectedId ? items.find((item) => item.id === selectedId)?.name : "Выберите из списка..."}
                    <ChevronsUpDown className="h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Поиск..." />
                    <CommandList>
                        <CommandEmpty>Ничего не найдено.</CommandEmpty>
                        <CommandGroup>
                            {items.map((item) => (
                                <CommandItem
                                    key={item.id}
                                    value={item.name}
                                    onSelect={(currentValue) => {
                                        onIdChange(
                                            currentValue === items.find((item) => item.id === selectedId)?.name
                                                ? ""
                                                : item.id,
                                        );
                                        setOpen(false);
                                    }}
                                >
                                    {item.name}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            items.find((item) => item.id === selectedId)?.name === item.name
                                                ? "opacity-100"
                                                : "opacity-0",
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
