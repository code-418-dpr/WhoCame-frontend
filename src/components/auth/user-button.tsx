"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, UserRole } from "@prisma/client";
import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
/*
import { logout } from "@/actions/logout";
import {LogOutIcon, SettingsIcon} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "@/components/auth/user-avatar";
 */
import React from "react";

export const UserButton = ({
    user,
}: {
    user:
        | Partial<
              User & {
                  role: UserRole;
              }
          >
        | undefined;
}): React.ReactNode => {
    const pathname = usePathname();

    if (pathname === "/login" || pathname === "/register") {
        return <div></div>;
    }

    if (!user) {
        return (
            <Link href="/login" className={cn(buttonVariants(), "gap-2")}>
                Войти
                <ArrowRightIcon className="size-4" />
            </Link>
        );
    }

    return (<div></div>);
    /*
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar user={user} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="end">
                <Link href="/settings">
                    <DropdownMenuItem className="cursor-pointer">
                        <SettingsIcon className="mr-2 h-4 w-4" />
                        Настройки
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuItem className="cursor-pointer" onClick={() => logout()}>
                    <LogOutIcon className="mr-2 h-4 w-4" />
                    Выйти
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
*/
};
