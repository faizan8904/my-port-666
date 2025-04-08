import RevealOnScroll from "../Ui/RevealOnScroll";
import {
  aws,
  css,
  react,
  html,
  graphql,
  git,
  github,
  nestjs,
  nextjs,
  tailwindcss,
  nodejs,
  expressjs,
} from "../assets/techIcons";

function About() {
  const skills = [
    { title: "AWS", img: aws },
    { title: "CSS", img: css },
    { title: "React", img: react },
    { title: "HTML", img: html },
    { title: "GraphQL", img: graphql },
    { title: "Git", img: git },
    { title: "GitHub", img: github },
    { title: "NestJS", img: nestjs },
    { title: "NextJS", img: nextjs },
    { title: "TailwindCSS", img: tailwindcss },
    { title: "NodeJS", img: nodejs },
    { title: "ExpressJS", img: expressjs },
  ];
  return (
    <section
      id="about"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent text-center ">
            About Me
          </h2>
          <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all ">
            <p className="text-gray-300 mb-5 text-xl">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">💼 Skills</h3>
              <div className="flex justify-center flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    className="flex items-center gap-2 bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    key={index}
                  >
                    <img
                      src={skill.img}
                      alt={skill.title}
                      className="w-5 h-5" // Size adjust kar sakte ho
                    />
                    {skill.title}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">
                📚 Education
              </h3>
              <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
                <li>
                  <strong>
                    {" "}
                    <em>B.E in Computer Science, </em>{" "}
                  </strong>
                  Temp University (2018-2023)
                </li>
                <li>
                  AI/ML, Data Structure, Full Stack Development, Quantum
                  Computing..
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">
              💻 Work Experience
            </h3>
            <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
              <li>
                <strong className="text-blue-400">
                  <em>Full-Stack Developer (Full-Time)</em>
                </strong>
                📍
                <br />* X Company | Feb 2024 - Present <br />
                - Developed secure financial web apps using React.js, Node.js,
                and Tailwind CSS <br />
                - Built dynamic UI and integrated finance APIs with Express.js
                for real-time data <br />
                - Optimized performance and scalability for high-traffic fintech
                platforms <br />
              </li>
              <li>
                B.E. in Computer Science, Algorithms, Full-Stack Dev, Cloud
                Essentials
              </li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
