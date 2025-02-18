import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }): React.ReactNode {
    return (
        <div className="flex w-full flex-1 flex-col items-center justify-center">{children}</div>
    );
}
