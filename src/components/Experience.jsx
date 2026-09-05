import { useTheme } from '../context/ThemeContext';
import ehollerLogo from '../assets/images/ehollerdigital.jpg';

const Experience = () => {
  const { isDark } = useTheme();

  const experiences = [
  {
    period: 'July 2026 - August 2026',
    role: 'Digital Marketing Executive',
    company: 'eholler Digital Services Private Limited',
    logo: ehollerLogo,
    description: 'Contributed to day-to-day digital marketing activities by managing campaigns, supporting social media platforms, coordinating content, and monitoring campaign performance.',
    highlights: [
      'Managed and supported digital marketing campaigns across online channels',
      'Supported social media activities and coordinated content for digital platforms',
      'Monitored basic performance metrics to track campaign effectiveness'
    ]
  },
  {
    period: 'January 2026 - June 2026',
    role: 'Digital Marketing Intern',
    company: 'eholler Digital Services Private Limited',
    logo: ehollerLogo,
    description: 'Supported the digital marketing team in campaign execution, social media activities, content coordination, and performance monitoring while gaining practical experience in digital marketing.',
    highlights: [
      'Assisted with day-to-day digital campaign activities and execution',
      'Supported social media management and content coordination',
      'Tracked basic campaign metrics and assisted with performance reporting'
    ]
  }
];
  return (
    <section
      id="experience"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isDark ? 'bg-slate-950' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className={`text-4xl font-bold mb-4 transition-all duration-300 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Professional <span style={{ color: `rgb(var(--color-primary))` }}>Experience</span>
          </h2>
          <p className={`text-lg transition-all duration-300 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            A practical, insight-led approach to helping brands reach the right audience and turn attention into measurable growth.
          </p>
        </div>

        <div className="relative space-y-8">
          <div
            className="absolute left-3 top-4 bottom-4 hidden w-px sm:block"
            style={{ backgroundColor: `rgba(var(--color-primary), 0.35)` }}
            aria-hidden="true"
          />

          {experiences.map((experience, index) => (
            <article
              key={`${experience.role}-${experience.period}`}
              className="relative pl-0 sm:pl-12 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="absolute left-0 top-7 hidden h-7 w-7 -translate-x-1/2 rounded-full border-4 sm:block"
                style={{
                  backgroundColor: `rgb(var(--color-primary))`,
                  borderColor: isDark ? 'rgb(2 6 23)' : 'rgb(255 255 255)'
                }}
                aria-hidden="true"
              />

              <div className={`p-6 sm:p-8 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                isDark
                  ? 'bg-slate-900 border-slate-800 hover:bg-slate-800'
                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
              }`}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-md"
                      style={{ boxShadow: `0 0 20px rgba(var(--color-primary), 0.25)` }}
                      role="img"
                      aria-label={`${experience.company} logo`}
                    >
                      <img
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div>
                    <p
                      className="text-sm font-semibold uppercase tracking-wide"
                      style={{ color: `rgb(var(--color-primary))` }}
                    >
                      {experience.period}
                    </p>
                    <h3 className={`mt-2 text-2xl font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {experience.role}
                    </h3>
                    <p className={`mt-1 font-semibold ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {experience.company}
                    </p>
                    </div>
                  </div>
                </div>

                <p className={`mt-5 leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {experience.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className={`flex gap-3 leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      <span
                        className="mt-2 h-2 w-2 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: `rgb(var(--color-primary))` }}
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
