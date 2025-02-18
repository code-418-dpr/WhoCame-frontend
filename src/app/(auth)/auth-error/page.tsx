import Link from "next/link";
import { TriangleAlertIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

const AuthErrorPage = () => {
    return (
        <div className="w-[400px] space-y-4">
            <div className="flex w-full flex-col items-center justify-center gap-y-4">
                <h1 className="text-3xl font-semibold">Упс! Что-то пошло не так!</h1>
            </div>
            <div className="flex w-full items-center justify-center">
                <TriangleAlertIcon className="h-32 w-32 text-destructive" />
            </div>
            <Button variant="link" className="w-full font-normal" size="lg" asChild>
                <Link href="/login">Назад к авторизации</Link>
            </Button>
        </div>
    );
};

export default AuthErrorPage;
