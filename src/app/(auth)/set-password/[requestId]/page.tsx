import { SetPasswordForm } from "@/components/forms/set-password-form";

export default async function Page({ params }: { params: Promise<{ requestId: string }> }) {
    const requestId = (await params).requestId;
    return <SetPasswordForm requestId={requestId} />;
}
