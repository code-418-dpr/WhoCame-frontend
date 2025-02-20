import Link from "next/link";

import { Button } from "@/components/ui/button";

export default async function LoginPage(props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const searchParams = await props.searchParams;
    const registerUrl = `/register${
        Object.keys(searchParams).length > 0
            ? `?${new URLSearchParams(searchParams as Record<string, string>).toString()}`
            : ""
    }`;

    return (
        <div className="w-[min(calc(100%-2rem),400px)] space-y-4">
            <h1 className="pb-4 text-center text-3xl font-semibold">Добро пожаловать</h1>
            <Button variant="link" className="w-full font-normal" size="sm" asChild>
                <Link href={registerUrl}>Подать заявку на регистрацию представительства</Link>
            </Button>
        </div>
    );
}
