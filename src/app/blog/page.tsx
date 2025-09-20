"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { translations, type Language } from "../translations";

export default function BlogPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ko');
  
  const t = translations[currentLanguage];

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
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

  const projects = [
    {
      id: 'dsugraduate',
      title: t.blog.projects.todo.title,
      description: t.blog.projects.todo.description,
      tech: ["Java", "Android Studio", "Firebase"],
      image: "/next.svg",
      slug: "dsugraduate"
    },
    {
      id: 'portfolio',
      title: t.blog.projects.portfolio.title,
      description: t.blog.projects.portfolio.description,
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      image: "/vercel.svg",
      slug: "portfolio"
    },
    {
      id: 'shooting-game',
      title: t.blog.projects.weather.title,
      description: t.blog.projects.weather.description,
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/globe.svg",
      slug: "shooting-game"
    }
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
            <Link href="/" className={`text-2xl font-bold ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              portfolio-pm
            </Link>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <Link href="/#about" className={`transition-colors ${
                  isDarkMode 
                    ? 'text-slate-300 hover:text-white' 
                    : 'text-slate-600 hover:text-slate-800'
                }`}>{t.nav.about}</Link>
                <span className={`transition-colors ${
                  isDarkMode 
                    ? 'text-white' 
                    : 'text-slate-800'
                }`}>{t.nav.blog}</span>
                <Link href="/#gallery" className={`transition-colors ${
                  isDarkMode 
                    ? 'text-slate-300 hover:text-white' 
                    : 'text-slate-600 hover:text-slate-800'
                }`}>{t.nav.gallery}</Link>
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

      {/* Blog Header */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-slate-800'
          }`}>
            {t.blog.title}
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {currentLanguage === 'ko' ? '제작한 프로젝트들을 자세히 살펴보세요' : 
             currentLanguage === 'ja' ? '制作したプロジェクトを詳しく見てみましょう' :
             'Take a detailed look at the projects I\'ve created'}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
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
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 rounded-full text-sm ${
                        isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`mt-4 text-sm font-medium ${
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
    </div>
  );
}
