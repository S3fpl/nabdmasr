import React from 'react'
import Image from 'next/image';

const Related = () => {
    return (
        <aside
            aria-label="Related articles"
            className="py-8 lg:py-24 bg-gray-800/30 backdrop-blur-md rounded-lg shadow-xl w-full max-w-7xl mx-auto"
        >
            <div className="px-4 mx-auto max-w-screen-xl">
                <h2 className="mb-8 text-2xl font-bold text-center text-white">Related articles</h2>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png",
                            title: "Our first office",
                            desc: "Over the past year, Volosoft has undergone many changes! After months of preparation.",
                            time: "2 minutes",
                        },
                        {
                            img: "",
                            title: "Enterprise design tips",
                            desc: "Over the past year, Volosoft has undergone many changes! After months of preparation.",
                            time: "12 minutes",
                        },
                        {
                            img: "",
                            title: "We partnered with Google",
                            desc: "Over the past year, Volosoft has undergone many changes! After months of preparation.",
                            time: "8 minutes",
                        },
                        {
                            img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png",
                            title: "Our first project with React",
                            desc: "Over the past year, Volosoft has undergone many changes! After months of preparation.",
                            time: "4 minutes",
                        },
                    ].map((article, index) => (
                        <article
                            key={index}
                            className="w-full bg-gray-700/30 backdrop-blur-md p-4 rounded-lg shadow-lg transition-transform hover:scale-105"
                        >
                            <a href="#">
                                <Image
                                    src={article.img || "/fallback.png"}
                                    alt={article.title}
                                    className="mb-5 rounded-lg w-full h-auto"
                                    width={600}
                                    height={400}
                                />
                            </a>
                            <h2 className="mb-2 text-xl font-bold leading-tight text-white">
                                <a href="#">{article.title}</a>
                            </h2>
                            <p className="mb-4 text-gray-400">{article.desc}</p>
                            <a
                                href="#"
                                className="inline-flex items-center font-medium underline underline-offset-4 text-red-500 hover:no-underline"
                            >
                                Read in {article.time}
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default Related