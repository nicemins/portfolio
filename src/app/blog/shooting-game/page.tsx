"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { translations, type Language } from "../../translations";

export default function ShootingGamePage() {
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
                  src="/globe.svg"
                  alt="Shooting Game"
                  width={80}
                  height={80}
                  className="dark:invert"
                />
              </div>
              <div className="flex-1">
                <h1 className={`text-4xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-slate-800'
                }`}>
                  {t.blog.projects.weather.title}
                </h1>
                <p className={`text-lg mb-6 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {t.blog.projects.weather.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript"].map((tech, index) => (
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
                JavaScript를 활용한 2D 슈팅 게임입니다. 바닐라 JavaScript만을 사용하여 게임 로직을 구현했으며, 
                HTML5 Canvas API를 통해 그래픽을 렌더링했습니다. 간단하지만 재미있는 게임플레이를 제공합니다.
              </p>
              <p>
                플레이어는 우주선을 조작하여 적들을 파괴하고 점수를 획득하는 클래식한 슈팅 게임의 형태를 가지고 있습니다. 
                게임의 난이도는 시간이 지남에 따라 점진적으로 증가하여 플레이어에게 도전적인 요소를 제공합니다.
              </p>
            </div>

            <h3 className={`text-xl font-bold mt-8 mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {t.blog.projects.weather.features}
            </h3>
            <ul className={`space-y-2 ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {t.blog.projects.weather.featuresList.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>

            <h3 className={`text-xl font-bold mt-8 mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {t.blog.projects.weather.tech}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-slate-700' : 'bg-slate-100'
              }`}>
                <h4 className={`font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-slate-800'
                }`}>HTML5</h4>
                <p className={`text-sm ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  게임의 기본 구조와 Canvas 요소를 제공
                </p>
              </div>
              <div className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-slate-700' : 'bg-slate-100'
              }`}>
                <h4 className={`font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-slate-800'
                }`}>CSS3</h4>
                <p className={`text-sm ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  게임 UI와 스타일링을 담당
                </p>
              </div>
              <div className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-slate-700' : 'bg-slate-100'
              }`}>
                <h4 className={`font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-slate-800'
                }`}>JavaScript</h4>
                <p className={`text-sm ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  게임 로직, 애니메이션, 이벤트 처리를 담당
                </p>
              </div>
            </div>

            <h3 className={`text-xl font-bold mt-8 mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {t.blog.projects.weather.process}
            </h3>
            <div className={`space-y-4 ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              <p>
                이 프로젝트를 통해 바닐라 JavaScript의 깊은 이해를 얻었습니다. 
                게임 루프, 객체 지향 프로그래밍, 이벤트 처리, Canvas API 활용 등의 핵심 개념들을 실습했습니다.
              </p>
              <p>
                특히 게임 개발에서 중요한 충돌 감지 알고리즘과 게임 상태 관리, 
                그리고 사용자 입력 처리에 대한 경험을 쌓을 수 있었습니다. 
                또한 성능 최적화를 위한 객체 풀링 등의 기법도 학습했습니다.
              </p>
            </div>

            <h3 className={`text-xl font-bold mt-8 mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {t.blog.projects.weather.controls}
            </h3>
            <div className={`space-y-2 ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {t.blog.projects.weather.controlsList.map((control, index) => (
                <p key={index}>• {control}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
