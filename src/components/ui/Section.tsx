import { cn } from "@/lib/utils";

interface SectionProps {
    id: string;
    className?: string;
    children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "min-h-screen py-24 px-6 md:px-12 max-w-6xl mx-auto flex flex-col justify-center",
                className
            )}
        >
            {children}
        </section>
    );
}
