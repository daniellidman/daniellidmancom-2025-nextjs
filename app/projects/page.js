export default function ProjectsPage() {
  const videos = [
    {
      title: 'Daniel Lidman',
      subheading: 'Reel',
      url: 'https://player.vimeo.com/video/724972964?h=59d1872ce3',
    },
    {
      title: 'Love Has No Limits Houston',
      subheading: 'Documentary',
      url: 'https://player.vimeo.com/video/835542281',
    },
    {
      title: 'The Freedom Experience',
      subheading: 'Concert Edit & Promo',
      url: 'https://player.vimeo.com/video/579699820',
    },
    {
      title: '1DayHouston Promo',
      subheading: 'Nonprofit Commercial',
      url: 'https://player.vimeo.com/video/821312382?h=2efac5523a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    },
    {
      title: 'The Lion Heart Experience',
      subheading: 'Video Course',
      url: 'https://www.youtube.com/embed/ohLATyaz1EM?si=Tg_Qyr7NaF_3OOKo',
    },
    {
      title: 'Detroit Collective',
      subheading: 'Live Album Edit',
      url: 'https://www.youtube.com/embed/OyTTT95tNwI?si=ulpGiVvfgS3TTJ0U',
    },
    {
      title: '1Nation1Day Peru',
      subheading: 'Documentary',
      url: 'https://player.vimeo.com/video/347768639',
    },
    {
      title: 'A21: Will You Be a Part of the Solution?',
      subheading: 'Brand Promo',
      url: 'https://www.youtube.com/embed/7teLFFJ6rJw?si=3KBzsRtz6w_IdvL0',
    },
    {
      title: 'Limitless Conference',
      subheading: 'Conference Promo, Capture, & Recap',
      url: 'https://www.youtube.com/embed/YPspzlzWW98?si=nod-Q8Gdzsp7p1B4',
    },
  ];

  return (
    <section className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8">Video Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
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
