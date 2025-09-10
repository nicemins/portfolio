export type Language = 'ko' | 'ja' | 'en';

export interface Translations {
  ko: {
    nav: {
      about: string;
      blog: string;
      gallery: string;
    };
    hero: {
      greeting: string;
      description: string;
      viewProjects: string;
      downloadResume: string;
    };
    about: {
      title: string;
      subtitle: string;
      description1: string;
      description2: string;
      stats: {
        learning: string;
        projects: string;
        technologies: string;
        growth: string;
      };
    };
    blog: {
      title: string;
      projects: {
        todo: {
          title: string;
          description: string;
        };
        portfolio: {
          title: string;
          description: string;
        };
        weather: {
          title: string;
          description: string;
        };
      };
    };
    gallery: {
      title: string;
    };
    footer: {
      description: string;
      links: {
        github: string;
        linkedin: string;
        blog: string;
        email: string;
      };
      copyright: string;
    };
  };
  ja: {
    nav: {
      about: string;
      blog: string;
      gallery: string;
    };
    hero: {
      greeting: string;
      description: string;
      viewProjects: string;
      downloadResume: string;
    };
    about: {
      title: string;
      subtitle: string;
      description1: string;
      description2: string;
      stats: {
        learning: string;
        projects: string;
        technologies: string;
        growth: string;
      };
    };
    blog: {
      title: string;
      projects: {
        todo: {
          title: string;
          description: string;
        };
        portfolio: {
          title: string;
          description: string;
        };
        weather: {
          title: string;
          description: string;
        };
      };
    };
    gallery: {
      title: string;
    };
    footer: {
      description: string;
      links: {
        github: string;
        linkedin: string;
        blog: string;
        email: string;
      };
      copyright: string;
    };
  };
  en: {
    nav: {
      about: string;
      blog: string;
      gallery: string;
    };
    hero: {
      greeting: string;
      description: string;
      viewProjects: string;
      downloadResume: string;
    };
    about: {
      title: string;
      subtitle: string;
      description1: string;
      description2: string;
      stats: {
        learning: string;
        projects: string;
        technologies: string;
        growth: string;
      };
    };
    blog: {
      title: string;
      projects: {
        todo: {
          title: string;
          description: string;
        };
        portfolio: {
          title: string;
          description: string;
        };
        weather: {
          title: string;
          description: string;
        };
      };
    };
    gallery: {
      title: string;
    };
    footer: {
      description: string;
      links: {
        github: string;
        linkedin: string;
        blog: string;
        email: string;
      };
      copyright: string;
    };
  };
}

export const translations: Translations = {
  ko: {
    nav: {
      about: 'About',
      blog: 'Blog',
      gallery: 'Gallery',
    },
    hero: {
      greeting: '안녕하세요 PM입니다',
      description: '신입 개발자로서 열정과 배움의 자세로 성장해나가는 중입니다',
      viewProjects: '프로젝트 보기',
      downloadResume: '이력서 다운로드',
    },
    about: {
      title: 'About',
      subtitle: 'Junior Developer',
      description1:
        '신입 개발자로서 새로운 기술을 배우고 적용하는 것에 대한 열정을 가지고 있습니다. 아직 부족한 점이 많지만, 꾸준한 학습과 실습을 통해 성장해나가고 있습니다.',
      description2:
        'React, Next.js, JavaScript 등 프론트엔드 기술을 중심으로 학습하고 있으며, 백엔드 개발에도 관심을 가지고 Node.js, Java, Spring 등을 공부하고 있습니다.',
      stats: {
        learning: '학습 기간',
        projects: '프로젝트',
        technologies: '기술',
        growth: '성장 마인드셋',
      },
    },
    blog: {
      title: 'Blog',
      projects: {
        todo: {
          title: 'DSUGraduate App',
          description: 'Android Studio와 Java로 제작한 졸업 도우미 앱',
        },
        portfolio: {
          title: 'Portfolio Website',
          description: 'Next.js와 Tailwind CSS로 제작한 개인 포트폴리오 웹사이트',
        },
        weather: {
          title: 'Shooting Game',
          description: 'JavaScript로 제작한 간단한 슈팅게임',
        },
      },
    },
    gallery: {
      title: 'Gallery',
    },
    footer: {
      description: '신입 개발자로서 꾸준히 성장해나가는 중입니다',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        blog: 'Blog',
        email: 'Email',
      },
      copyright:
        '© 2025 portfolio-pm. 주니어 개발자 포트폴리오',
    },
  },
  ja: {
    nav: {
      about: 'About',
      blog: 'Blog',
      gallery: 'Gallery',
    },
    hero: {
      greeting: 'こんにちは、PMです',
      description: '新入開発者として情熱と学習姿勢を持って成長しています',
      viewProjects: 'プロジェクトを見る',
      downloadResume: '履歴書をダウンロード',
    },
    about: {
      title: 'About',
      subtitle: 'Junior Developer',
      description1:
        '新入開発者として新しい技術を学び、適用することに情熱を持っています。まだ不足している点も多いですが、継続的な学習と実践を通じて成長しています。',
      description2:
        'React、Next.js、JavaScriptなどのフロントエンド技術を中心に学習しており、バックエンド開発にも興味を持ち、Node.js、Java、Springなどを勉強しています。',
      stats: {
        learning: '学習期間',
        projects: 'プロジェクト',
        technologies: '技術',
        growth: '成長マインドセット',
      },
    },
    blog: {
      title: 'Blog',
      projects: {
        todo: {
          title: 'DSUGraduate App',
          description: 'Android StudioとJavaで制作した卒業サポートアプリ',
        },
        portfolio: {
          title: 'Portfolio Website',
          description: 'Next.jsとTailwind CSSで制作した個人ポートフォリオサイト',
        },
        weather: {
          title: 'Shooting Game',
          description: 'JavaScriptで制作したシンプルなシューティングゲーム',
        },
      },
    },
    gallery: {
      title: 'Gallery',
    },
    footer: {
      description: '新入開発者として継続的に成長しています',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        blog: 'Blog',
        email: 'Email',
      },
      copyright:
        '© 2025 portfolio-pm. ジュニア開発者ポートフォリオ',
    },
  },
  en: {
    nav: {
      about: 'About',
      blog: 'Blog',
      gallery: 'Gallery',
    },
    hero: {
      greeting: "Hello, I'm PM",
      description:
        "As a junior developer, I'm growing with passion and a learning mindset",
      viewProjects: 'View Projects',
      downloadResume: 'Download Resume',
    },
    about: {
      title: 'About',
      subtitle: 'Junior Developer',
      description1:
        'As a junior developer, I have a passion for learning and applying new technologies. While I still have many areas to improve, I am growing through continuous learning and practice.',
      description2:
        'I am focusing on frontend technologies such as React, Next.js, and JavaScript, while also studying backend development with Node.js, Java, Spring, and more.',
      stats: {
        learning: 'Learning Period',
        projects: 'Projects',
        technologies: 'Technologies',
        growth: 'Growth Mindset',
      },
    },
    blog: {
      title: 'Blog',
      projects: {
        todo: {
          title: 'DSUGraduate App',
          description: 'A graduation assistant app built with Android Studio and Java',
        },
        portfolio: {
          title: 'Portfolio Website',
          description: 'A personal portfolio website built with Next.js and Tailwind CSS',
        },
        weather: {
          title: 'Shooting Game',
          description: 'A simple shooting game built with JavaScript',
        },
      },
    },
    gallery: {
      title: 'Gallery',
    },
    footer: {
      description:
        "As a junior developer, I'm continuously learning and growing",
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        blog: 'Blog',
        email: 'Email',
      },
      copyright:
        '© 2025 portfolio-pm. Junior Developer Portfolio',
    },
  },
};
