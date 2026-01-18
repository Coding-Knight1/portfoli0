import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
    return (
        <Section id="about" className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <Reveal>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        About Me
                    </h2>
                    <div className="h-1 w-20 bg-accent rounded-full" />
                </Reveal>

                <div className="space-y-6 text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                    <Reveal delay={0.1}>
                        <p>
                            I am a Backend-focused software engineer with strong fundamentals in data structures, backend architecture, and database systems.
                        </p>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p>
                            My passion lies in building systems that are <span className="font-medium text-accent">reliable</span>, <span className="font-medium text-accent">scalable</span>, and thoughtfully designed.
                        </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <p className="text-lg text-gray-500 mt-4">
                            I approach engineering with a mindset of competence through restraint—prioritizing simple, effective solutions over complex, decorative ones.
                        </p>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
}
