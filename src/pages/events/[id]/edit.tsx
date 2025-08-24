import { EditEventForm } from "@/features/edit-event";
import { CreateEventSchema, trpc } from "@/shared/api";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function EditEvent() {
    const router = useRouter();
    const session = useSession();

    const { data, isLoading } = trpc.event.findUnique.useQuery({
        id: Number(router.query.id),
    });

    const { mutate } = trpc.event.edit.useMutation({
        onSuccess: (data) => {
            router.push(`/events/${data.id}`);
        },
    });

    const initialData = {
        title: data?.title,
        description: data?.description || undefined,
        date: data?.date,
    };

    const handleSubmit = (data: CreateEventSchema) => {
        mutate({ ...data, id: Number(router.query.id) });
    };

    if (isLoading) {
        return "Loading...";
    }

    if (session.status === "unauthenticated") {
        return "Forbidden";
    }

    if (!data) {
        return "No data";
    }

    return <EditEventForm initialData={initialData} onSubmit={handleSubmit} />;
}
