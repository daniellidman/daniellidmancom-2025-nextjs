import Image from 'next/image';
import WorkExperience from './components/WorkExperience';

export default function Home() {
  return (
    <div className="w-3/4 m-auto grid grid-cols-2">
      <div className="flex flex-col">
        <div className="bg-white m-1 p-2 rounded-xl ">
          <Image
            src="/DanielBioBlur.jpg"
            width={100}
            height={100}
            alt="Picture of Daniel"
            className="rounded-full"
          ></Image>
          <h1 className=" text-black font-bold text-md">Daniel Lidman</h1>
          <h3 className="text-black font-medium text-sm mb-8">
            Software Developer
          </h3>
          <p className="text-black w-3/4 text-sm">
            Self-driven and adaptable professional transitioning into software
            engineering after a decade in creative production. Known for
            delivering high-quality work, clear communication, and strong
            collaboration. Proficient in HTML, CSS, JavaScript, and React, with
            a growing foundation in C++ and cloud technologies. Actively
            building technical skills through self-guided learning and hands-on
            projects. While I’m still developing some technical proficiencies, I
            bring the mindset, soft skills, and learning velocity needed to grow
            into a high-impact contributor on a forward-looking engineering
            team.
          </p>
        </div>
        <div>
          <Project projectName="Project" />
          <Project />
          <Project />
        </div>
      </div>
      <WorkExperience />
    </div>
  );
}

function Project(projectName) {
  const proj = projectName;
  return <div className="bg-amber-100 h-20 w-10">Project name </div>;
}
