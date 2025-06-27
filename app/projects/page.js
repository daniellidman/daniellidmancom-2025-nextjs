const videosDelete = [
  { id: '724972964', title: 'Reel' },
  { id: '835542281', title: 'Love Has No Limits Documentary' },
  { id: '579699820', title: 'The Freedom Experience' },
  { id: '821312382/2efac5523a', title: 'Project 4' },
  //https://vimeo.com/821312382/2efac5523a
  { id: '246813579', title: 'Project 5' },
  //https://www.youtube.com/watch?v=ohLATyaz1EM
  { id: '112233445', title: 'Project 6' },
  //https://youtu.be/OyTTT95tNwI?si=Kpj9TJD6eq2_LQM0
  { id: '347768639', title: '1Nation1Day Peru' },
  { id: '998877665', title: 'Project 8' },
  //https://youtu.be/7teLFFJ6rJw?si=5_SNpGZdYrzutcHG
  { id: '443322110', title: 'Project 9' },
  //https://youtu.be/YPspzlzWW98?si=UIoUAPhkJhJ0A6U1
];

const videos = [
  {
    title: 'Reel',
    subheading: 'A fast-paced reel of recent client and personal work.',
    url: 'https://player.vimeo.com/video/724972964?h=59d1872ce3',
  },
  {
    title: 'Product Animation – Sports App',
    subheading:
      'UI/UX-focused animation for a mobile basketball stats tracker.',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'Brand Opener – Private Client',
    subheading: 'Visual identity animation for a stealth-mode fintech startup.',
    url: 'https://player.vimeo.com/video/XXXXXXXXX?badge=0&autopause=0&player_id=0&app_id=58479', // Private Vimeo with full URL
  },
  {
    title: 'Event Trailer – Music Festival',
    subheading: 'High-energy teaser cut for social media ads.',
    url: 'https://www.youtube.com/embed/XXXXXXXXXXX',
  },
  {
    title: 'Explainer Animation – Crypto Wallet',
    subheading: 'Narrative animation for onboarding experience.',
    url: 'https://player.vimeo.com/video/XXXXXXXXX',
  },
  {
    title: 'Sizzle Reel – Startup Accelerator',
    subheading: 'Footage & graphics mashup of demo day highlights.',
    url: 'https://www.youtube.com/embed/XXXXXXXXXXX',
  },
  {
    title: 'In-App Animation Demo',
    subheading: 'GSAP prototype to showcase micro-interactions.',
    url: 'https://player.vimeo.com/video/XXXXXXXXX',
  },
  {
    title: 'Title Sequence – Short Film',
    subheading: 'Stylized 2D animation intro for indie narrative piece.',
    url: 'https://www.youtube.com/embed/XXXXXXXXXXX',
  },
  {
    title: 'Logo Animation – Studio Rebrand',
    subheading: 'Clean, looping logo motion for website and presentations.',
    url: 'https://player.vimeo.com/video/XXXXXXXXX',
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold mb-8">Video Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {videos.map(({ url, title, subheading }, index) => (
          <div key={index} className="space-y-2">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
              <iframe
                src={url}
                title={title}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-sm text-gray-600">{subheading}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
