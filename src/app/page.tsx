"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { translations, type Language } from "./translations";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ko');
  
  const t = translations[currentLanguage];

  useEffect(() => {
    // 초기 로드 시 시스템 설정 확인
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // 다크모드 상태에 따라 body 클래스 변경
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  // 갤러리 이미지 경로 (public/gallery)
  const galleryImages = [
    "/gallery/01.jpg",
    "/gallery/02.jpg",
    "/gallery/03.jpg",
    "/gallery/04.jpg",
    "/gallery/05.jpg",
    "/gallery/06.jpg",
    "/gallery/07.jpg",
    "/gallery/08.jpg",
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 to-slate-800' 
        : 'bg-gradient-to-br from-slate-50 to-slate-100'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full backdrop-blur-md border-b z-50 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-slate-900/80 border-slate-700' 
          : 'bg-white/80 border-slate-200'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className={`text-2xl font-bold ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              portfolio-pm
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <a href="#about" className={`transition-colors ${
                  isDarkMode 
                    ? 'text-slate-300 hover:text-white' 
                    : 'text-slate-600 hover:text-slate-800'
                }`}>{t.nav.about}</a>
                <Link href="/blog" className={`transition-colors ${
                  isDarkMode 
                    ? 'text-slate-300 hover:text-white' 
                    : 'text-slate-600 hover:text-slate-800'
                }`}>{t.nav.blog}</Link>
                <a href="#gallery" className={`transition-colors ${
                  isDarkMode 
                    ? 'text-slate-300 hover:text-white' 
                    : 'text-slate-600 hover:text-slate-800'
                }`}>{t.nav.gallery}</a>
              </div>
              {/* 언어 전환 버튼 */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => changeLanguage('ko')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
                    currentLanguage === 'ko'
                      ? 'bg-blue-500 text-white'
                      : isDarkMode
                      ? 'bg-slate-700 hover:bg-slate-600 text-slate-300'
                      : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
                  }`}
                >
                  한국어
                </button>
                <button
                  onClick={() => changeLanguage('ja')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
                    currentLanguage === 'ja'
                      ? 'bg-blue-500 text-white'
                      : isDarkMode
                      ? 'bg-slate-700 hover:bg-slate-600 text-slate-300'
                      : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
                  }`}
                >
                  日本語
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
                    currentLanguage === 'en'
                      ? 'bg-blue-500 text-white'
                      : isDarkMode
                      ? 'bg-slate-700 hover:bg-slate-600 text-slate-300'
                      : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
                  }`}
                >
                  English
                </button>
              </div>
              
              {/* 다크모드 토글 버튼 */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-700 hover:bg-slate-600 text-yellow-400' 
                    : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
                }`}
                aria-label="다크모드 토글"
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
                            <div className="mb-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src="/profile.jpg"
                        alt="PM Profile"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {t.hero.greeting}
            </h1>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {t.hero.description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
            >
              {t.hero.viewProjects}
            </Link>
            <button className={`px-8 py-4 border-2 rounded-full font-semibold text-lg transition-colors ${
              isDarkMode 
                ? 'border-slate-600 text-slate-300 hover:bg-slate-800' 
                : 'border-slate-300 text-slate-700 hover:bg-slate-100'
            }`}>
              {t.hero.downloadResume}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-900' : 'bg-white'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 ${
            isDarkMode ? 'text-white' : 'text-slate-800'
          }`}>{t.about.title}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className={`text-2xl font-semibold mb-6 ${
                isDarkMode ? 'text-white' : 'text-slate-800'
              }`}>{t.about.subtitle}</h3>
              <p className={`text-lg leading-relaxed mb-6 ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {t.about.description1}
              </p>
              <p className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {t.about.description2}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-6 rounded-lg text-center ${
                isDarkMode ? 'bg-slate-800' : 'bg-slate-100'
              }`}>
                <div className="text-3xl font-bold text-blue-600 mb-2">1+</div>
                <div className={`${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>{t.about.stats.learning}</div>
              </div>
              <div className={`p-6 rounded-lg text-center ${
                isDarkMode ? 'bg-slate-800' : 'bg-slate-100'
              }`}>
                <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
                <div className={`${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>{t.about.stats.projects}</div>
              </div>
              <div className={`p-6 rounded-lg text-center ${
                isDarkMode ? 'bg-slate-800' : 'bg-slate-100'
              }`}>
                <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                <div className={`${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>{t.about.stats.technologies}</div>
              </div>
              <div className={`p-6 rounded-lg text-center ${
                isDarkMode ? 'bg-slate-800' : 'bg-slate-100'
              }`}>
                <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
                <div className={`${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>{t.about.stats.growth}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>{t.blog.title}</h2>
            <Link 
              href="/blog" 
              className={`inline-flex items-center text-lg font-medium transition-colors ${
                isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
              }`}
            >
              {t.blog.viewAllProjects}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t.blog.projects.todo.title,
                description: t.blog.projects.todo.description,
                tech: ["Java", "Android Studio", "Firebase"],
                image: "/next.svg",
                slug: "dsugraduate"
              },
              {
                title: t.blog.projects.portfolio.title,
                description: t.blog.projects.portfolio.description,
                tech: ["Next.js", "Tailwind CSS", "TypeScript"],
                image: "/vercel.svg",
                slug: "portfolio"
              },
              {
                title: t.blog.projects.weather.title,
                description: t.blog.projects.weather.description,
                tech: ["HTML", "CSS", "JavaScript"],
                image: "/globe.svg",
                slug: "shooting-game"
              }
            ].map((project, index) => (
              <Link 
                key={index} 
                href={`/blog/${project.slug}`}
                className={`rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105 ${
                  isDarkMode ? 'bg-slate-900' : 'bg-white'
                }`}
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={80}
                    height={80}
                    className="dark:invert"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-slate-800'
                  }`}>{project.title}</h3>
                  <p className={`mb-4 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 rounded-full text-sm ${
                        isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`text-sm font-medium ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    자세히 보기 →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 ${
            isDarkMode ? 'text-white' : 'text-slate-800'
          }`}>{t.gallery.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 bg-slate-200 dark:bg-slate-800"
              >
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4">portfolio-pm</div>
          <p className="text-slate-400 mb-8">{t.footer.description}</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/nicemins" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">{t.footer.links.github}</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">{t.footer.links.blog}</a>
            <a href="mailto:nicemins1@gmail.com" className="text-slate-400 hover:text-white transition-colors">{t.footer.links.email}</a>
          </div>
          <div className="text-slate-500 text-sm">
            {t.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}
