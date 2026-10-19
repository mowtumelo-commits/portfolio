export const Projects = () => {
  const projects = [
    {
      title: "Digicall Finance Management System",
      description: "Full-stack financial system for insurance/collections. Client ledger, invoice tracking, and claims processing with real-time balance calculation (Balance = Invoices - Claims).",
      tech: ["C#", "ASP.NET Core", "EF Core", "SQL Server"],
      github: "https://github.com/mowtumelo-commits/DigicallFinanceDemo",
      highlight: "Featured - Fintech",
      features: ["Relational DB with FK relationships", "Automatic DB creation", "Live balance logic"]
    },
    {
      title: "Hangman Game in Java",
      description: "Built custom ArrayList from scratch (MyArrayListHM) and implemented a file-based Hangman game. Focus on DSA fundamentals without using built-in Java collections.",
      tech: ["Java", "Custom Data Structures", "OOP", "File I/O"],
      github: "https://github.com/mowtumelo-commits/HangMan-Game-in-Java",
      highlight: "NWU CMPG221",
      features: ["Custom ArrayList implementation", "Hangman game logic", "Word file parsing"]
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-300 text-left"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {project.highlight}
                </span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-white transition-colors underline underline-offset-4"
                >
                  View on GitHub ↗
                </a>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <ul className="mb-5 space-y-1">
                {project.features.map((f, i) => (
                  <li key={i} className="text-xs text-muted-foreground/80 flex gap-2">
                    <span className="text-primary">•</span> {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};