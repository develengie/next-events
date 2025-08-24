import Link from "next/link";

type EditEventButtonProps = {
    id: number;
};

export const EditEventButton = ({ id }: EditEventButtonProps) => {
    return (
        <Link
            className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-white align-middle leading-10 bg-blue-500"
            href={`/events/${id}/edit`}
        >
            Редактировать событие
        </Link>
    );
};
