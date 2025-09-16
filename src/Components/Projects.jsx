import { FaGithub, FaRegPaperPlane } from "react-icons/fa";

const projects = [
    {
        title: "Foco",
        description: "Foco connects people to share surplus food, reducing waste and supporting communities through sustainability.",
        github: "https://github.com/shihad-hasan07/Foco",
        live: "https://foody-cart-6c36f.web.app/",
        image: "/public/assets/project-pic/foco.png",
    },
    {
        title: "Eco-travel",
        description: "We promotes sustainable adventures worldwide with zero plastic, local support, and leave-no-trace principles.",
        github: "https://github.com/shihad-hasan07/Eco-travel",
        live: "https://eco-adventure-experience.web.app/",
        image: "/public/assets/project-pic/eco-travel.png",
    },
    {
        title: "Gadget-heaven",
        description: "Gadget Heaven offers the latest tech gadgets, accessories, and smart devices for everyone.",
        github: "https://github.com/shihad-hasan07/Gadget-Heaven",
        live: "https://b10-a8-one.vercel.app/",
        image: "/public/assets/project-pic/gadget-heaven.png",
    },
];

export default function Projects() {
    return (
        <section className="py-12 px-6 bg-[#1e0e31] bg-cover  2xl:bg-no-repeat 2xl:bg-center bg-[url('/assets/bg1.png')] h-full" id="projects">
            <div className="max-w-5xl mx-auto text-center text-white">
                <h2 className="text-4xl font-bold mb-6">My Projects</h2>
                <p className="text-lg text-gray-400 mb-12">
                    A showcase of some of my best work, featuring modern web development technologies.
                </p>
            </div>




            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl items-stretch mx-auto py-10">
                {projects.map((project, index) => (

                    <div key={index}>

                        <div className="relative group rounded-xl shadow-lg min-h-[400px] ">
                            {/* Image wrapper */}
                            <div className="relative ">
                                <img
                                    src={project.image} alt={project.title}
                                    className="w-full h-48 object-cover pb-2 transition duration-200 hover:p-10 group-hover:blur-xs group-hover:brightness-75" />

                                {/* Hover overlay button */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                    <button>
                                        <a href={project.live}
                                            target="_blank"
                                            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition flex items-center gap-2" >
                                            <p>Live site</p>
                                            <FaRegPaperPlane />
                                        </a>
                                    </button>
                                </div>

                                {/* Wave Shape */}
                                <svg
                                    className="absolute bottom-0 left-0 w-full h-12"
                                    viewBox="0 0 500 150"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M0,100 C150,200 350,0 500,100 L500,150 L0,150 Z"
                                        className="fill-blue-950"
                                    ></path>
                                </svg>
                            </div>

                            {/* Card Content */}
                            <div className="px-4 pb-5 bg-blue-950 text-white">
                                <h3 className="text-xl pt-4 font-semibold font-name">{project.title}</h3>
                                <p className="font-underName my-3">{project.description}</p>
                                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                                    <a href={project.github} className="flex items-center gap-2">Code <FaGithub /></a>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
