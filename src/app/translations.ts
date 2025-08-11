export type Language = 'ko' | 'ja' | 'en';

export interface Translations {
  ko: {
    nav: {
      about: string;
      work: string;
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
    work: {
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
    blog: {
      title: string;
      posts: {
        firstProject: {
          title: string;
          excerpt: string;
        };
        nextjs: {
          title: string;
          excerpt: string;
        };
        tailwind: {
          title: string;
          excerpt: string;
        };
      };
      readMore: string;
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
      work: string;
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
    work: {
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
    blog: {
      title: string;
      posts: {
        firstProject: {
          title: string;
          excerpt: string;
        };
        nextjs: {
          title: string;
          excerpt: string;
        };
        tailwind: {
          title: string;
          excerpt: string;
        };
      };
      readMore: string;
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
      work: string;
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
    work: {
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
    blog: {
      title: string;
      posts: {
        firstProject: {
          title: string;
          excerpt: string;
        };
        nextjs: {
          title: string;
          excerpt: string;
        };
        tailwind: {
          title: string;
          excerpt: string;
        };
      };
      readMore: string;
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
      work: 'Work',
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
      description1: '신입 개발자로서 새로운 기술을 배우고 적용하는 것에 대한 열정을 가지고 있습니다. 아직 부족한 점이 많지만, 꾸준한 학습과 실습을 통해 성장해나가고 있습니다.',
      description2: 'React, Next.js, JavaScript 등 프론트엔드 기술을 중심으로 학습하고 있으며, 백엔드 개발에도 관심을 가지고 Node.js, Python 등을 공부하고 있습니다.',
      stats: {
        learning: 'Year Learning',
        projects: 'Projects',
        technologies: 'Technologies',
        growth: 'Growth Mindset',
      },
    },
    work: {
      title: 'Work',
      projects: {
        todo: {
          title: 'Todo App',
          description: 'React와 localStorage를 활용한 간단한 할일 관리 애플리케이션',
        },
        portfolio: {
          title: 'Portfolio Website',
          description: 'Next.js와 Tailwind CSS로 제작한 개인 포트폴리오 웹사이트',
        },
        weather: {
          title: 'Weather App',
          description: 'OpenWeather API를 활용한 날씨 정보 애플리케이션',
        },
      },
    },
    blog: {
      title: 'Blog',
      posts: {
        firstProject: {
          title: '신입 개발자의 첫 번째 프로젝트 후기',
          excerpt: 'React로 첫 번째 프로젝트를 만들면서 겪은 어려움과 해결 과정, 그리고 배운 점들을 정리했습니다.',
        },
        nextjs: {
          title: 'Next.js 입문기 - App Router 사용해보기',
          excerpt: 'Next.js 13+의 새로운 App Router를 학습하면서 겪은 시행착오와 기본적인 사용법을 정리했습니다.',
        },
        tailwind: {
          title: 'Tailwind CSS로 빠르게 UI 만들기',
          excerpt: 'CSS 프레임워크를 처음 사용해보면서 느낀 장점과 기본적인 사용법을 정리했습니다.',
        },
      },
      readMore: '더 읽기 →',
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
      copyright: '© 2025 portfolio-pm. Junior Developer Portfolio',
    },
  },
  ja: {
    nav: {
      about: 'About',
      work: 'Work',
      blog: 'Blog',
      gallery: 'Gallery',
    },
    hero: {
      greeting: 'こんにちは PMです',
      description: '新入社員開発者として情熱と学習の姿勢で成長している最中です',
      viewProjects: 'プロジェクトを見る',
      downloadResume: '履歴書をダウンロード',
    },
    about: {
      title: 'About',
      subtitle: 'Junior Developer',
      description1: '新入社員開発者として新しい技術を学び、適用することへの情熱を持っています。まだ不足している点が多いですが、継続的な学習と実践を通じて成長しています。',
      description2: 'React、Next.js、JavaScriptなどのフロントエンド技術を中心に学習しており、バックエンド開発にも興味を持ち、Node.js、Pythonなどを勉強しています。',
      stats: {
        learning: '学習年数',
        projects: 'プロジェクト',
        technologies: '技術',
        growth: '成長マインドセット',
      },
    },
    work: {
      title: 'Work',
      projects: {
        todo: {
          title: 'Todo App',
          description: 'ReactとlocalStorageを活用したシンプルなタスク管理アプリケーション',
        },
        portfolio: {
          title: 'Portfolio Website',
          description: 'Next.jsとTailwind CSSで制作した個人ポートフォリオウェブサイト',
        },
        weather: {
          title: 'Weather App',
          description: 'OpenWeather APIを活用した天気情報アプリケーション',
        },
      },
    },
    blog: {
      title: 'Blog',
      posts: {
        firstProject: {
          title: '新入社員開発者の最初のプロジェクト後記',
          excerpt: 'Reactで最初のプロジェクトを作りながら経験した困難と解決過程、そして学んだことをまとめました。',
        },
        nextjs: {
          title: 'Next.js入門 - App Routerを使ってみる',
          excerpt: 'Next.js 13+の新しいApp Routerを学習しながら経験した試行錯誤と基本的な使用方法をまとめました。',
        },
        tailwind: {
          title: 'Tailwind CSSで素早くUIを作る',
          excerpt: 'CSSフレームワークを初めて使ってみて感じた利点と基本的な使用方法をまとめました。',
        },
      },
      readMore: 'もっと読む →',
    },
    gallery: {
      title: 'Gallery',
    },
    footer: {
      description: '新入社員開発者として継続的に成長している最中です',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        blog: 'Blog',
        email: 'Email',
      },
      copyright: '© 2025 portfolio-pm. Junior Developer Portfolio',
    },
  },
  en: {
    nav: {
      about: 'About',
      work: 'Work',
      blog: 'Blog',
      gallery: 'Gallery',
    },
    hero: {
      greeting: 'Hello I\'m PM',
      description: 'As a junior developer, I\'m growing with passion and a learning mindset',
      viewProjects: 'View Projects',
      downloadResume: 'Download Resume',
    },
    about: {
      title: 'About',
      subtitle: 'Junior Developer',
      description1: 'As a junior developer, I have a passion for learning and applying new technologies. While I still have many areas to improve, I\'m growing through continuous learning and practice.',
      description2: 'I\'m focusing on frontend technologies like React, Next.js, and JavaScript, and I\'m also interested in backend development, studying Node.js, Python, and more.',
      stats: {
        learning: 'Year Learning',
        projects: 'Projects',
        technologies: 'Technologies',
        growth: 'Growth Mindset',
      },
    },
    work: {
      title: 'Work',
      projects: {
        todo: {
          title: 'Todo App',
          description: 'A simple task management application using React and localStorage',
        },
        portfolio: {
          title: 'Portfolio Website',
          description: 'Personal portfolio website built with Next.js and Tailwind CSS',
        },
        weather: {
          title: 'Weather App',
          description: 'Weather information application using OpenWeather API',
        },
      },
    },
    blog: {
      title: 'Blog',
      posts: {
        firstProject: {
          title: 'My First Project as a Junior Developer',
          excerpt: 'I\'ve documented the difficulties I faced, the problem-solving process, and what I learned while creating my first React project.',
        },
        nextjs: {
          title: 'Getting Started with Next.js - Using App Router',
          excerpt: 'I\'ve documented the trial and error I experienced and basic usage while learning the new App Router in Next.js 13+.',
        },
        tailwind: {
          title: 'Building UI Quickly with Tailwind CSS',
          excerpt: 'I\'ve documented the advantages I felt and basic usage when first using a CSS framework.',
        },
      },
      readMore: 'Read More →',
    },
    gallery: {
      title: 'Gallery',
    },
    footer: {
      description: 'As a junior developer, I\'m continuously growing and learning',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        blog: 'Blog',
        email: 'Email',
      },
      copyright: '© 2025 portfolio-pm. Junior Developer Portfolio',
    },
  },
};
