"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { translations, type Language } from "../../translations";

export default function PortfolioPage() {
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
                <Link href="/blog" className={`transition-colors ${
                  isDarkMode 
                    ? 'text-slate-300 hover:text-white' 
                    : 'text-slate-600 hover:text-slate-800'
                }`}>{t.nav.blog}</Link>
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

      {/* Back Button */}
      <section className="pt-24 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/blog" 
            className={`inline-flex items-center text-sm font-medium transition-colors ${
              isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            블로그로 돌아가기
          </Link>
        </div>
      </section>

      {/* Project Header */}
      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`p-8 rounded-2xl ${
            isDarkMode ? 'bg-slate-800' : 'bg-white'
          } shadow-lg`}>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl flex items-center justify-center">
                <Image
                  src="/vercel.svg"
                  alt="Portfolio Website"
                  width={80}
                  height={80}
                  className="dark:invert"
                />
              </div>
              <div className="flex-1">
                <h1 className={`text-4xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-slate-800'
                }`}>
                  {t.blog.projects.portfolio.title}
                </h1>
                <p className={`text-lg mb-6 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {t.blog.projects.portfolio.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Tailwind CSS", "TypeScript"].map((tech, index) => (
                    <span key={index} className={`px-4 py-2 rounded-full text-sm font-medium ${
                      isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`p-8 rounded-2xl ${
            isDarkMode ? 'bg-slate-800' : 'bg-white'
          } shadow-lg`}>
            <h2 className={`text-2xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              프로젝트 개요
            </h2>
            <div className={`space-y-4 text-lg leading-relaxed ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              <p>
                개인 포트폴리오 웹사이트는 Next.js와 Tailwind CSS를 사용하여 제작한 반응형 웹사이트입니다. 
                현대적이고 세련된 디자인으로 제작되어 방문자들에게 좋은 첫인상을 줄 수 있도록 구성했습니다.
              </p>
              <p>
                다크모드/라이트모드 전환, 다국어 지원(한국어, 일본어, 영어), 갤러리 섹션 등 다양한 기능을 포함하고 있으며, 
                개발자로서의 역량과 프로젝트 경험을 효과적으로 보여줄 수 있도록 설계되었습니다.
              </p>
            </div>

            <h3 className={`text-xl font-bold mt-8 mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {t.blog.projects.portfolio.features}
            </h3>
            <ul className={`space-y-2 ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {t.blog.projects.portfolio.featuresList.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>

            <h3 className={`text-xl font-bold mt-8 mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              기술 스택
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-slate-700' : 'bg-slate-100'
              }`}>
                <h4 className={`font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-slate-800'
                }`}>Next.js</h4>
                <p className={`text-sm ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  React 기반 풀스택 프레임워크로 SSR과 라우팅 구현
                </p>
              </div>
              <div className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-slate-700' : 'bg-slate-100'
              }`}>
                <h4 className={`font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-slate-800'
                }`}>Tailwind CSS</h4>
                <p className={`text-sm ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  유틸리티 우선 CSS 프레임워크로 빠른 스타일링
                </p>
              </div>
              <div className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-slate-700' : 'bg-slate-100'
              }`}>
                <h4 className={`font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-slate-800'
                }`}>TypeScript</h4>
                <p className={`text-sm ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  타입 안전성을 제공하는 JavaScript 확장 언어
                </p>
              </div>
            </div>

            <h3 className={`text-xl font-bold mt-8 mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              개발 과정
            </h3>
            <div className={`space-y-4 ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              <p>
                이 프로젝트를 통해 Next.js의 App Router 구조를 학습하고, TypeScript를 활용한 타입 안전한 개발을 경험했습니다. 
                Tailwind CSS를 사용하여 효율적인 스타일링을 구현하고, 다크모드와 다국어 지원을 통해 사용자 경험을 향상시켰습니다.
              </p>
              <p>
                반응형 디자인을 구현하여 다양한 기기에서 최적의 사용자 경험을 제공하고, 
                SEO 최적화와 성능 향상을 위한 최신 웹 개발 기법들을 적용했습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
