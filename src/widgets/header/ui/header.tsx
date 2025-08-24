import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { CreateEventButton } from "@/features/create-event";

export const Header = () => {
    const session = useSession();

    return (
        <header className="flex justify-between items-center mb-3 py-6">
            <div className="w-[174px] h-[24px] relative">
                <Link
                    className="absolute inset-0 w-full h-full object-cover"
                    href="/"
                >
                    <Image
                        src="/result-university.png"
                        alt="Result University"
                        fill
                    />
                </Link>
            </div>
            <div className="flex items-center">
                {session.status === "authenticated" && (
                    <span className="cursor-pointer" onClick={() => signOut()}>
                        {session.data?.user.name} ←
                    </span>
                )}
                {session.status === "unauthenticated" && (
                    <Link className="cursor-pointer" href="/api/auth/signin">
                        Войти →
                    </Link>
                )}
                {session.status === "authenticated" && <CreateEventButton />}
            </div>
        </header>
    );
};
