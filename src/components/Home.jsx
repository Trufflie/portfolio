import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaFileDownload } from "react-icons/fa";
import Resume from "../assets/Resume/Chris-Faherty.pdf";
const Home = () => {
	return (
		<div
			name="home"
			className="width-full h-screen bg-[#0a192f]"
		>
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-purple-600 ">Hi, my name is </p>
				<h1 className="text-4xl sm:text-7xl text-[#ccd6f6] ">Chris Faherty</h1>
				<h2 className="text-4xl sm:text-7xl text-[#8892b0]">
					I'm a Full Stack Developer.
				</h2>
				<p className="text-[#8892b0] py-4 max-w-[700px]">
					I'm a full-stack developer specializing in building and designing
					exceptional digital experiences. currently, I'm focused on bulding
					responsive full-stack web applications.
				</p>
				<div className="flex flex-row">
					<a
						className=" pr-2 text-gray-300"
						href={Resume}
						download="Chris-Faherty.pdf"
					>
						<button className="text-white group border-2 px-6 py-3 flex items-center hover:bg-purple-600 hover:border-purple-600">
							Download Resume
							<span>
								<FaFileDownload className="ml-3 " />
							</span>
						</button>
					</a>

					<Link
						to="work"
						smooth={true}
						duration={500}
					>
						<button className="text-white group border-2 px-6 py-3 flex items-center hover:bg-purple-600 hover:border-purple-600">
							View Work
							<span className="group-hover:rotate-90 duration-300">
								<HiArrowNarrowRight className="ml-3 " />
							</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
