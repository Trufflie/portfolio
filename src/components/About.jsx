import React from "react";

const About = () => {
	return (
		<div
			name="about"
			className="w-full h-screen bg-[#0a192f] text-gray-300"
		>
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-purple-600">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold  ">
						<p>Hi, I'm Chris, nice to meet you, please take a look around.</p>
					</div>
					<div>
						<p>
							I specialize in crafting dynamic websites utilizing contemporary
							technologies such as React and Tailwind CSS. My focus lies in
							developing responsive interfaces that harmonize functionality with
							aesthetics. From initial concept to deployment, my dedication
							remains unwavering in delivering top-tier, user-centric solutions
							that surpass expectations. Peruse my portfolio to witness how I
							breathe life into digital visions. I'm eager to engage in
							collaboration and contribute to enhancing your online presence.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
