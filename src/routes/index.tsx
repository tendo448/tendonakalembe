import { createFileRoute } from "@tanstack/react-router";
import photo from "@/assets/daniella.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nakalembe Daniella Tendo — Academic Portfolio" },
      { name: "description", content: "Computer Science student at Uganda Christian University, focused on web development and cybersecurity." },
      { property: "og:title", content: "Nakalembe Daniella Tendo — Academic Portfolio" },
      { property: "og:description", content: "Computer Science student at UCU, focused on web development and cybersecurity." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "tendonakalembe831@gmail.com";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      <div className="space-y-4 text-lg leading-relaxed">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <header className="site-header">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-display text-lg">Nakalembe Daniella Tendo</span>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about">About</a><a href="#education">Education</a>
            <a href="#projects">Projects</a><a href="#cv">CV</a><a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-10 py-16 md:grid-cols-[1fr_1.1fr]">
          <img src={photo.url} alt="Nakalembe Daniella Tendo at Bishop Tucker Building, UCU" className="portrait" />
          <div>
            <p className="eyebrow">Academic Portfolio</p>
            <h1 className="font-display mt-3 text-5xl leading-tight md:text-6xl">Nakalembe Daniella Tendo</h1>
            <p className="mt-5 text-lg text-muted-foreground">Computer Science student at Uganda Christian University, building toward a career in web development and cybersecurity.</p>
            <p className="availability mt-6">Open to collaborations and internships</p>
            <a href="#contact" className="btn-primary mt-8">Get in touch</a>

          </div>
        </div>

        <Section id="about" title="About Me">
          <p>My name is Nakalembe Daniella Tendo and I am a computer science student at Uganda Christian University.</p>
          <p>I am interested in learning how computers and networks work. I am building my knowledge through my academic studies and practical exercises.</p>
          <p>I believe that continuous learning and practice will help me develop the skills I need for my future career in web development and cybersecurity.</p>
          <p>I am eager to position myself at the intersection of technology and security through the deep recognition of the growing importance of digital transformation in today's world.</p>
          <p>I aspire to be a great leader in digital transformation in Uganda to secure digital practices concerning an envisioned focused drive in Artificial Intelligence and Cybersecurity.</p>
        </Section>

        <Section id="education" title="Education and Skills">
          <p>I am currently at Uganda Christian University pursuing my Bachelor of Science in Computer Science, developing my understanding of computing and technology.</p>
          <p>I am currently using the C programming language, which I keep perfecting daily to improve my ability in programming and get better at the fundamentals.</p>
          <p>I am also familiar with data enumeration and basic computer fundamentals that I continue practising and improving as I progress in my studies.</p>
        </Section>

        <Section id="projects" title="My Projects">
          <div className="card">
            <h3 className="font-display text-2xl">Campus Care Appointment Management System</h3>
            <p className="eyebrow mt-2">Status: Planned academic project</p>
            <p className="mt-4">I hope to develop a Campus Care Appointment System by the end of the semester.</p>
            <p className="mt-3">The idea is to help students make appointments that are managed smoothly by the available doctors and counsellors, and make it easier to understand the availability and necessity of better campus health facilities at the Alan Galpin clinic and counselling services.</p>
            <p className="mt-3">My next steps will be to identify the system requirements, plan the design and begin development as I gain the necessary skills.</p>
          </div>
        </Section>

        <Section id="cv" title="My Academic CV">
          <p className="font-semibold tracking-wide">NAKALEMBE DANIELLA TENDO</p>
          <h3 className="cv-h">Career objective</h3>
          <p>To develop practical knowledge and skills for a future career in web development and cybersecurity.</p>
          <h3 className="cv-h">Education</h3>
          <ul className="timeline">
            <li><span>Current</span>Bachelor of Science in Computer Science — Uganda Christian University (3 years)</li>
            <li><span>2024–2025</span>Kings College Budo (Uganda Advanced Certificate of Education)</li>
            <li><span>2019–2023</span>Kings College Budo (Uganda Certificate of Education)</li>
            <li><span>2012–2018</span>Lohana Primary School (Primary Leaving Examinations)</li>
          </ul>
          <h3 className="cv-h">Skills</h3>
          <div className="flex flex-wrap gap-2"><span className="chip">C programming</span><span className="chip">Data enumeration</span></div>
          <h3 className="cv-h">Projects</h3>
          <p>Campus Care Appointment Management System — planned academic project</p>
          <h3 className="cv-h">Professional Contact</h3>
          <p>Email: <a className="link" href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </Section>

        <Section id="contact" title="Contact Me">
          <p>Thank you for visiting my portfolio.</p>
          <p>I am open to collaborations and internships. If you have a project, a placement, or an idea worth working on, I would be glad to hear from you.</p>
          <p>For academic enquiries or professional communication, please contact me at:</p>
          <a className="btn-primary" href={`mailto:${EMAIL}`}>{EMAIL}</a>

        </Section>
      </main>

      <footer className="py-10 text-center text-sm text-muted-foreground">© 2026 Nakalembe Daniella Tendo</footer>
    </div>
  );
}
