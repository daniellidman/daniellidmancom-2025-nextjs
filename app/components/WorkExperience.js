import Image from 'next/image';

function WorkExperience() {
  const experienceArray = [
    {
      company: 'Ramsey Solutions',
      title: 'Senior Video Editor',
      dates: 'Oct 2023 - Present',
      headline:
        'Create engaging and innovative video content to educate and empower audiences on personal finance while driving company objectives.',
      bulletPoints:
        'Collaborated with producers to deliver high-quality videos aligned with strategic goals. \nIncorporated feedback from stakeholders and clients to refine and enhance projects. \nProduced diverse content, including advertisements, curriculum materials, live event videos, trailers for YouTube shows, and product launch videos.',
    },
    {
      company: 'Love Has No Limits',
      title: 'Senior Video Editor',
      dates: 'Jul 2019 - Oct 2023',
      headline:
        'In 2019 Missions.Me rebranded as a domestic humanitarian non-profit Love Has No Limits with a mission to unite to tackle deeply entrenched challenges in our cities.',
      bulletPoints:
        'Worked directly with executive leadership to craft messaging and video content \nProduced screen content for conferences and stadium events, including The Freedom Experience with performances by Justin Bieber and Chance the Rapper. \nContinued to lead all video editing and motion graphic animation for the organization.',
    },
    {
      company: 'Missions.Me',
      title: 'Video Editor',
      dates: 'Jan 2016 - Jul 2019',
      headline:
        'Through humanitarian aid, large-scale international outreaches, sustainable poverty solutions, and leadership training, Missions.Me empowers people to change the world.',
      bulletPoints:
        '- Led all video editing and motion graphic animation for the organization, including promo videos, documentary and recap content, social media, and training materials. \n- Demonstrated technical expertise while maintaining video archives for 10+ international campaigns. \n- Directed video department, including leading and managing interns, junior editors, and contractors in addition to overseeing $50,000 custom studio build out.',
    },
    {
      company: '',
      title: 'Freelance Video Editor',
      dates: '2018 - 2024',
      headline:
        'Along with my full-time position I’ve also taken on freelance video editing work. I have had the great opportunity to work with amazing brands and grow my skills alongside great creative minds.',
    },
    {
      company: 'Ferris State University',
      title: 'Bachelor of Science',
      dates: 'December 2015',
      headline: 'Television & Digital Media Production',
    },
  ];

  return (
    <div className="bg-white rounded-xl m-1 p-4 ">
      <h1 className="uppercase font-extrabold text-xl mb-4">Experience</h1>
      {experienceArray.map((job, i) => (
        <Job key={i} job={job} />
      ))}
    </div>
  );
}

export default WorkExperience;

function Job({ job }) {
  return (
    <div className=" m-1 pb-4">
      <p className="uppercase inline font-bold text-sm">{job.title} | </p>
      <p className="inline text-xs font-semibold text-blue-900">{job.dates}</p>
      <p className="text-xs italic">{job.company}</p>
      <p className="text-xs">{job.headline}</p>
    </div>
  );
}
