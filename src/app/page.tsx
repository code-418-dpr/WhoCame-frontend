import React from "react";
import { platformFeatures } from "@/config/landing";

export default function Home() {
    return (
        <main className="space-y-6 pb-10 pt-52 lg:pt-48">
            <div className="mx-auto w-full max-w-screen-xl">
                <section className="flex flex-col items-center gap-10 text-center">
                    <div>
                        <h1 className="font-satoshi text-balance bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-[48px] font-black leading-[1.15] tracking-tight text-transparent sm:text-[56px] md:text-[80px] md:leading-[1.15]">
                            WhoCame
                        </h1>
                        <h2 className="font-satoshi text-balance text-[48px] font-black leading-[1.15] tracking-tight sm:text-[56px] md:text-[64px] md:leading-[1.15]">
                            Платформа для учёта посещаемости студентов
                        </h2>
                    </div>
                    <p className="max-w-2xl text-balance text-lg text-muted-foreground sm:text-lg md:text-xl">
                        Цель проекта — разработать систему с использованием искусственного
                        интеллекта, которая распознает и позволит автоматически фиксировать
                        время прихода, ухода студентов и время нахождения в учебном заведении,
                        функциональный модуль минимизирует ручной труд, исключит
                        человеческий фактор и оптимизирует посещаемость студентов учебных
                        заведениях.
                    </p>
                </section>
                <section className="container flex max-w-6xl flex-col gap-8 pt-32">
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-xl font-semibold text-transparent">
                            Основные функции платформы
                        </div>
                    </div>
                    <div className="column-1 gap-5 space-y-5 md:columns-2">
                        {platformFeatures.map((feature, index) => (
                            <div className="break-inside-avoid" key={index}>
                                <div className="relative rounded-xl border bg-muted/25">
                                    <div className="flex flex-col px-4 py-5 sm:p-6">
                                        <div className="space-y-2">
                                            <p className="font-semibold text-foreground">
                                                {feature.title}
                                            </p>
                                            <p className="text-muted-foreground">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
