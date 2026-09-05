import { useTheme } from '../context/ThemeContext';
import ipcsLogo from '../assets/images/IPCS.png';

const Course = () => {
  const { isDark } = useTheme();

  const courses = [
    {
      title: 'Advanced Course in Digital Marketing',
      period: 'September 2025 - January 2026',
      institute: 'IPCS Global, Trivandrum',
      logo: ipcsLogo,
      description: 'Digital Marketing Training Gained practical knowledge of SEO, social media, WordPress, and AI tools, with a strong foundation in creating engaging content and building online business growth.',
      topics: ['SEO','SMM','SEM','WordPress', 'Inbound Marketing',  'Affiliate Marketing', 'YouTube Marketing', 'e-mail Marketing', 'Web Analytics', 'AI tools','Canva']
    },
  ];

  return (
    <section
      id="courses"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isDark ? 'bg-slate-900' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className={`text-4xl font-bold mb-4 transition-all duration-300 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Featured <span style={{ color: `rgb(var(--color-primary))` }}>Course</span>
          </h2>
          <p className={`text-lg transition-all duration-300 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            Practical learning designed to turn digital marketing knowledge into confident action.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {courses.map((course, index) => (
            <article
              key={course.title}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-2xl animate-fade-in ${
                isDark ? 'bg-slate-950 border-slate-700' : 'bg-white border-slate-200'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="flex flex-col gap-6 p-6 sm:flex-row sm:items-stretch sm:p-10"
                style={{ borderTop: `6px solid rgb(var(--color-primary))` }}
              >
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white"
                      role="img"
                      aria-label={`${course.title} course logo`}
                    >
                      <img
                        src={course.logo}
                        alt={`${course.title} course logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: `rgb(var(--color-primary))` }}
                      >
                        {course.period}
                      </p>
                      <h3 className={`mt-1 text-2xl font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {course.title}
                      </h3>
                      <p className={`mt-1 text-sm font-semibold ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        {course.institute}
                      </p>
                    </div>
                  </div>

                  <p className={`mt-6 leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {course.description}
                  </p>

                  <div className="mt-6">
                    <ul className="flex flex-wrap gap-2">
                      {course.topics.map((topic) => (
                        <li
                          key={topic}
                          className={`rounded-full border px-3 py-1.5 text-sm ${
                            isDark
                              ? 'border-slate-700 bg-slate-900 text-slate-300'
                              : 'border-slate-200 bg-slate-50 text-slate-700'
                          }`}
                        >
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Course;
