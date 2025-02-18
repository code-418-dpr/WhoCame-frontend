import { cn } from "@/lib/utils";

interface StatusBadgeProps {
    status: string;
}

const statusClasses = {
    DRAFT: "bg-gray-100 text-gray-800",
    PENDING: "bg-yellow-100 text-yellow-800",
    APPROVED: "bg-green-100 text-green-800",
    REFUSED: "bg-red-100 text-red-800",
    COMPLETED: "bg-blue-100 text-blue-800",
};

const statusLabels = {
    DRAFT: "Черновик",
    PENDING: "В ожидании",
    APPROVED: "Одобрено",
    REFUSED: "Отклонено",
    COMPLETED: "Завершено",
};

export function StatusBadge({ status }: StatusBadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                statusClasses[status as keyof typeof statusClasses]
            )}
        >
            {statusLabels[status as keyof typeof statusLabels]}
        </span>
    );
}
