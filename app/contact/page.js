export default function ContactPage() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <p className="text-lg text-gray-700 mb-2">
        I’m available for freelance or full-time opportunities.
      </p>
      <p className="text-gray-700">
        <strong>Email:</strong>{' '}
        <a
          href="mailto:daniel@daniellidman.com"
          className="text-blue-600 hover:underline"
        >
          daniel@daniellidman.com
        </a>
        <br />
        <strong>LinkedIn:</strong>{' '}
        <a
          href="https://www.linkedin.com/in/daniellidman"
          className="text-blue-600 hover:underline"
        >
          linkedin.com/in/daniellidman
        </a>
        <br />
        <strong>Github:</strong>{' '}
        <a
          href="https://www.github.com/daniellidman"
          className="text-blue-600 hover:underline"
        >
          github.com/daniellidman
        </a>
      </p>
    </section>
  );
}
