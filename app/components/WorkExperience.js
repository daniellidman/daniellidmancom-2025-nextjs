import Image from 'next/image';

function WorkExperience() {
  const experienceArray = [
    {
      company: 'Ramsey Solutions',
      title: 'Senior Video Editor',
      dates: 'Oct 2023 - Present',
      headline: '',
      bulletPoints: [
        'Produced 50+ high-quality videos annually for a YouTube audience of 5M+, strengthening engagement and brand growth.',
        'Collaborated with cross-functional teams to translate business goals into digital experiences.',
        'Streamlined editing workflows while maintaining quality, demonstrating optimization and problem-solving skills.',
      ],
    },
    {
      company: 'Love Has No Limits',
      title: 'Video Editor',
      dates: 'Jan 2016 - Oct 2023',
      headline: '',
      bulletPoints: [
        'Directed the video department, overseeing 5+ interns and contractors, and led a $50,000 custom studio build-out,—demonstrating technical leadership and project ownership.',
        'Produced 400+ videos for 9 international and domestic humanitarian campaigns, reaching stadium audiences of 60,000+ and millions online.',
        'Delivered high-profile content for The Freedom Experience featuring Justin Bieber & Chance the Rapper, managing high-pressure deadlines and complex production pipelines.',
        'Partnered with executive leadership to shape messaging and digital storytelling.',
      ],
    },
    {
      company: '',
      title: 'Freelance Video Editor',
      dates: '2018 - 2025',
      headline:
        'Along with my full-time position I’ve also taken on freelance video editing work. I have had the great opportunity to work with amazing brands and grow my skills alongside great creative minds.',
      bulletPoints: [
        'Delivered video content for diverse brands and agencies, managing projects from requirements to final delivery.',
        'Adapted to new workflows and tools, reinforcing a fast learning curve now applied to JavaScript and web.',
      ],
    },
  ];

  return (
    <div className="mt-6 ">
      <h1 className="font-extrabold text-xl mb-4">Experience</h1>
      {experienceArray.map((job, i) => (
        <Job key={i} job={job} />
      ))}
    </div>
  );
}

export default WorkExperience;

function Job({ job }) {
  return (
    <div className="pb-4">
      <p className="uppercase inline font-bold text-sm">{job.title} | </p>
      <p className="inline text-xs font-semibold text-blue-900">{job.dates}</p>
      <p className="text-xs italic">{job.company}</p>
      {/* <ul className='list-disc text-xs ml-3'>
        {job.bulletPoints.map((bullet)=> (<li>{bullet}</li>))}
      </ul> */}
    </div>
  );
}
