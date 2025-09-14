const projects = [
    {
        title: "Portfolio Website",
        description: "A sleek and modern portfolio website built with React and Tailwind CSS.",
        github: "https://github.com/shihad-hasan07/My-portfolio",
        live: "https://yourportfolio.com",
        image: "../../public/assets/project-demo/foco.png",
    },
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce platform with authentication and payment integration.",
        github: "https://github.com/yourusername/ecommerce",
        live: "https://yourecommerce.com",
        image: "https://yourimageurl.com/ecommerce.jpg",
    },
    {
        title: "Blog App",
        description: "A minimal and elegant blog application with a rich text editor.",
        github: "https://github.com/yourusername/blogapp",
        live: "https://yourblog.com",
        image: "https://yourimageurl.com/blogapp.jpg",
    },
];

export default function Projects() {
    return (
        <section className="py-12 px-6" style={{ backgroundColor: "#1e0e31" }} id="projects">
            <div className="max-w-5xl mx-auto text-center text-white">
                <h2 className="text-4xl font-bold mb-6">My Projects</h2>
                <p className="text-lg text-gray-400 mb-12">
                    A showcase of some of my best work, featuring modern web development technologies.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-2xl bg-black"
                    >
                        <div
                            className="absolute inset-0 bg-cover z-10 bg-center transition-opacity duration-300 hover:opacity-20"
                            style={{ backgroundImage: `url(${project.image})` }}
                        ></div>

                        <div className="rounded-2xl shadow-lg overflow-hidden z-40 relative">
                            <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 text-center p-6">
                                <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex justify-center space-x-4 pb-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
