import WorkExperience from '../components/WorkExperience';

export default function AboutPage() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-6">
        {`I’m a creative technologist blending animation, editing, and frontend
        development. I'm currently employed full time as a video editor,
        exploring web and creative development on the side.`}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        <WorkExperience />
        <div>
          <h1 className="font-extrabold text-xl mb-4 mt-6">Education</h1>
          <div className="pb-4">
            <p className="uppercase inline font-bold text-sm">
              Ferris State University |{' '}
            </p>
            <p className="inline text-xs font-semibold text-blue-900">
              December 2015
            </p>
            <p className="text-xs italic">Bachelor of Science</p>
            <p className="text-xs">Television & Digital Media Production</p>
          </div>
        </div>
      </div>
    </section>
  );
}
