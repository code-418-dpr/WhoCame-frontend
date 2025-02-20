import { UserIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface UserInterface {
    image?: string | null;
}

export function UserAvatar({ user, className }: { user: UserInterface; className?: string }): React.ReactNode {
    return (
        <Avatar className={cn(className)}>
            <AvatarImage src={user?.image || ""} />
            <AvatarFallback className="border border-white/20 bg-transparent">
                <UserIcon className="text-white" />
            </AvatarFallback>
        </Avatar>
    );
}
