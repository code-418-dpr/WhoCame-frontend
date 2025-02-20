import { CircleCheckIcon, TriangleAlertIcon } from "lucide-react";

type Props = {
    errorMessage?: string;
    successMessage?: string;
};

export function FormFeedback({ errorMessage, successMessage }: Props) {
    if (!errorMessage && !successMessage) {
        return null;
    }

    if (errorMessage) {
        return (
            <div className="flex items-center gap-x-2 rounded-md border border-destructive/60 bg-red-600/10 p-3 text-sm text-red-700">
                <TriangleAlertIcon className="h-4 w-4" />
                <p>{errorMessage}</p>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-x-2 rounded-md border border-emerald-700/60 bg-emerald-500/10 p-3 text-sm text-emerald-500">
            <CircleCheckIcon className="h-4 w-4" />
            <p>{successMessage}</p>
        </div>
    );
}
