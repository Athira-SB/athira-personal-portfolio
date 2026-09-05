import { useTheme } from '../context/ThemeContext';
import GAnalytics from '../assets/images/GAnalytics.jpg';
import Manage from '../assets/images/Manage.jpg';
import GetStarted from '../assets/images/GetStarted.jpg';
import Dive from '../assets/images/Dive.jpg';
import UseG4A from '../assets/images/UseG4A.jpg';
const Certifications = () => {
  const { isDark } = useTheme();

  const certifications = [
    {
      id: 1,
      name: 'Google Analytics Certification',
      image: GAnalytics,
      issuer: 'Google'
    },
    {
      id: 2,
      name: 'Manage G4A Data and Learn to Read Reports',
      image: Manage,
      issuer: 'Google'
    },
    {
      id: 3,
      name: 'Get Started Using Google Analytics',
      image: GetStarted,
      issuer: 'Google'
    },
    {
      id: 4,
      name: 'Dive Deeper into G4A Data and Reports',
      image: Dive,
      issuer: 'Google'
    },
    {
      id: 5,
      name: 'Use G4A with other Tools and Data Sources',
      image: UseG4A,
      issuer: 'Google'
    },
  ];

  return (
    <section 
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isDark ? 'bg-slate-950' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 text-center transition-all duration-300 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          Certifications & <span style={{ color: `rgb(var(--color-primary))` }}>Credentials</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`flex items-center gap-6 p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 animate-fade-in ${
                isDark ? 'bg-slate-900 hover:bg-slate-800' : 'bg-slate-100 hover:bg-slate-200'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Certificate Image */}
              <div className="flex-shrink-0">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-24 h-24 rounded-lg object-cover shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className={`text-xl font-bold mb-1 transition-all duration-300 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {cert.name}
                </h3>
                <p className={`text-sm font-semibold transition-all duration-300 mb-3 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
                style={{ color: `rgb(var(--color-primary))` }}>
                  {cert.issuer}
                </p>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" style={{ color: `rgb(var(--color-primary))` }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Verified Credential
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className={`text-center p-8 rounded-xl transition-all duration-300 ${
            isDark ? 'bg-slate-900' : 'bg-slate-100'
          }`}>
            <p className="text-4xl font-bold" style={{ color: `rgb(var(--color-primary))` }}>5</p>
            <p className={`mt-2 font-semibold transition-all duration-300 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>Industry Certifications</p>
          </div>
          <div className={`text-center p-8 rounded-xl transition-all duration-300 ${
            isDark ? 'bg-slate-900' : 'bg-slate-100'
          }`}>
            <p className="text-4xl font-bold" style={{ color: `rgb(var(--color-primary))` }}>1+</p>
            <p className={`mt-2 font-semibold transition-all duration-300 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>Years of Experience</p>
          </div>
          <div className={`text-center p-8 rounded-xl transition-all duration-300 ${
            isDark ? 'bg-slate-900' : 'bg-slate-100'
          }`}>
            <p className="text-4xl font-bold" style={{ color: `rgb(var(--color-primary))` }}>100%</p>
            <p className={`mt-2 font-semibold transition-all duration-300 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>Dedicated to Excellence</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Certifications;
