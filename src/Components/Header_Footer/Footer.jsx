import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-[#160d20] text-gray-300 py-8 px-6 ">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Branding */}
                <div>
                    <h2 className="text-xl font-semibold text-white">&lt; Shihad /&gt;</h2>
                    <p className="mt-3 text-sm">
                        Creative Front-End Developer passionate about building fast, simple,
                        and visually appealing websites.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#home" className="hover:text-white">Home</a></li>
                        <li><a href="#about" className="hover:text-white">About</a></li>
                        <li><a href="#skills" className="hover:text-white">Skills</a></li>
                        <li><a href="#projects" className="hover:text-white">Projects</a></li>
                        <li><a href="#contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Contact & Socials */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
                    <p className="text-sm">Dhaka, Bangladesh</p>
                    <p className="text-sm">📞 +8801763095394</p>
                    <p className="text-sm">✉️ shihadhasan607255@gmail.com</p>

                    <div className="flex space-x-4 mt-4">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white text-xl"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white text-xl"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="mailto:shihadhasan607255@gmail.com"
                            className="text-gray-400 hover:text-white text-xl"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="text-center border-t border-gray-700 mt-8 pt-4 text-sm text-gray-500">
                © {new Date().getFullYear()} Shihad Hasan. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer