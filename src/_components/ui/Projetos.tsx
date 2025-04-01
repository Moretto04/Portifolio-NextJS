'use client'

import Image from "next/image"
import { CardProjetos } from "./CardProjetos"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

const projects = [
    {
        hrefGit: "https://github.com/Moretto04/Diagonal",
        href: "https://www.diagonalstudio.com.br/",
        src: "/img/diagonal.png",
        titulo: "Diagonal Studio",
        sobre: "Site desenvolvdio para uma agencia de design e marketing digital, focado em apresentar a empresa.",
        tec: ["Typescript", "NextJS", "Styled-Components", "ReactJS"]
    },
    {
        hrefGit: "https://github.com/Moretto04/courtesy",
        href: "https://moretto04.github.io/courtesy/",
        src: "/img/courtesy.png",
        titulo: "Courtesy",
        sobre: "Site criado para uma marca de roupas com foco em streetwear, apresentando um design moderno e responsivo.",
        tec: ["Html", "Sass", "NodeJS"]
    },
    {
        hrefGit: "https://github.com/Moretto04/api-bem-estar",
        href: "https://github.com/Moretto04/api-bem-estar",
        src: "/img/bem estar.png",
        titulo: "API Bem Estar",
        sobre: "API desenvolvida para um projeto de bem-estar, com funcionalidades de autenticação, gerenciamento de usuários e integração com banco de dados.",
        tec: ["NodeJS", "HTML", "Express", "PostgreSQL"]
    }
];

export const Projetos = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })


    return (
        <section
            ref={ref}
            id="home" className="lg:mt-32 mt-[80px] w-full lg:p-0 p-5 max-w-7xl m-auto ">
            <div className="flex flex-col" id="projetos">
                <div className="flex flex-col">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="lg:text-3xl text-2xl flex gap-4 font-bold">
                        <Image
                            src="/icon/send.svg"
                            alt="Icone de envio"
                            width={25}
                            height={25}
                            className="transform rotate-45"
                        />
                        Projetos
                    </motion.h1>
                </div>
                <div className="grid z-40 grid-cols-1 md:grid-cols-2 lg:ml-10 mt-12 m-auto lg:m-0 lg:grid-cols-3 lg:w-96 gap-x-8 lg:gap-x-96 gap-y-8 lg:mt-12 ">
                    {projects.map((item, index) => (
                        <motion.div
                            key={item.hrefGit}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}>
                            <CardProjetos items={[item]} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
