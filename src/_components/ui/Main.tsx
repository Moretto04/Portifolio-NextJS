"use client"

import Image from "next/image";
import { TypewriterEffect } from "./typewriter-effect";
import { motion } from 'framer-motion';

export const Main = () => {
    const words = [
        {
            text: "Olavo",
        },
        {
            text: "Moretto",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    return (
        <section className="w-full flex justify-center m-auto h-[500px] items-center text-center px-5">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-3 max-w-[560px] w-full m-auto">
                <TypewriterEffect words={words} />
                <h1 className="text-xl lg:text-xl font-bold">Desenvolvedor Front-End & Back-End</h1>
                <h2 className="lg:text-lg text-gray-600 dark:text-gray-400 mt-2">Usando código para transformar ideias em realidades</h2>
            </motion.div>
            <div>
                <Image
                    src="/img/unionImg.png"
                    alt="teste"
                    width={400}
                    height={400}
                    className="absolute w-full left-0 top-0"
                />
            </div>
        </section>
    );
};
