import Link from "next/link";

export const CreateEventButton = () => {
    return (
        <Link
            className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-white align-middle leading-10 bg-green-500 ml-3"
            href="/events/create"
        >
            Создать событие
        </Link>
    );
};
