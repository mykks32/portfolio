"use client";

import TypewriterText from "@/components/type-write-text";
import { motion } from "motion/react";

export default function Experience() {
    const experiences = [
        {
            company: "Futrix",
            duration: "Nov 2026 – Present",
            position: "Software Engineer",
            location: "Remote (Contractor)",
            points: [
                "Engineer software features for the Aquabuildr and HOTNHEAVY! platforms as an independent contractor, covering the full software development lifecycle from requirements through deployment.",
                "Partner with the Lead Project Manager and U.S.-based stakeholders across time zones, participating in sprint planning, standups, and retrospectives tracked in Jira.",
                "Build and maintain backend services and RESTful APIs, enforcing coding standards and code review practices and upholding automated test coverage for production reliability.",
                "Troubleshoot and resolve production issues, ensuring consistent, on-time delivery of sprint commitments and project milestones.",
            ],
        },
        {
            company: "Shrig Solutions Pvt. Ltd.",
            duration: "Jan 2026 – Oct 2026",
            position: "Mid-Level Backend Developer",
            location: "Kathmandu, Nepal (Full-Time)",
            points: [
                "Developed backend services and RESTful APIs for the Aquabuildr and HOTNHEAVY! platforms as a Mid-Level Backend Developer, reporting to the Lead Engineer, CTO, and Project Manager.",
                "Collaborated with cross-functional engineering teams to design, build, and maintain scalable, database-driven backend systems.",
                "Contributed to code quality, technical documentation, and knowledge sharing within a full-time, in-house software development team.",
            ],
        },
        {
            company: "CloudQuish Pvt. Ltd.",
            duration: "Dec 2024 – Nov 2025",
            position: "Software Engineer",
            location: "Remote",
            points: [
                "Delivered end-to-end software development for CloudQuish's web platform, spanning front-end UI, backend RESTful APIs, and relational database integration.",
                "Built and shipped the landing page and email verification service using Next.js, TypeScript, Clerk authentication, ShadCN/ui components, Zustand state management, and Tailwind CSS.",
                "Partnered with a distributed, remote-first team using Git/GitHub for version control, code review, and collaborative software delivery.",
                "Improved system functionality and user experience through iterative UI/UX enhancements and performance-focused engineering.",
            ],
        },
    ];

    return (
        <section
            id="experience"
            className="py-24 px-8 md:px-16 lg:px-32 text-white"
        >
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl font-bold text-center text-fuchsia-400 mb-8"
                >
                    <TypewriterText titles={["Experience"]} />
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="p-6 rounded-2xl shadow-md border border-white/10"
                        >
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <h3 className="text-xl font-semibold text-lime-300">
                                    {exp.company}
                                </h3>
                                <span className="text-sm text-white/60 italic">
                                    {exp.duration} • {exp.location}
                                </span>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">
                                {exp.position}
                            </h4>
                            <ul className="list-disc pl-6 space-y-2 text-white/90 text-sm">
                                {exp.points.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
