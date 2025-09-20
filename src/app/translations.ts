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
          overview: string;
          overviewDesc1: string;
          overviewDesc2: string;
          features: string;
          featuresList: string[];
          tech: string;
          process: string;
          processDesc1: string;
          processDesc2: string;
        };
        portfolio: {
          title: string;
          description: string;
          overview: string;
          overviewDesc1: string;
          overviewDesc2: string;
          features: string;
          featuresList: string[];
          tech: string;
          process: string;
          processDesc1: string;
          processDesc2: string;
        };
        weather: {
          title: string;
          description: string;
          overview: string;
          overviewDesc1: string;
          overviewDesc2: string;
          features: string;
          featuresList: string[];
          tech: string;
          process: string;
          processDesc1: string;
          processDesc2: string;
          controls: string;
          controlsList: string[];
        };
      };
      backToBlog: string;
      projectOverview: string;
      mainFeatures: string;
      techStack: string;
      developmentProcess: string;
      viewAllProjects: string;
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
          overview: string;
          overviewDesc1: string;
          overviewDesc2: string;
          features: string;
          featuresList: string[];
          tech: string;
          process: string;
          processDesc1: string;
          processDesc2: string;
        };
        portfolio: {
          title: string;
          description: string;
          overview: string;
          overviewDesc1: string;
          overviewDesc2: string;
          features: string;
          featuresList: string[];
          tech: string;
          process: string;
          processDesc1: string;
          processDesc2: string;
        };
        weather: {
          title: string;
          description: string;
          overview: string;
          overviewDesc1: string;
          overviewDesc2: string;
          features: string;
          featuresList: string[];
          tech: string;
          process: string;
          processDesc1: string;
          processDesc2: string;
          controls: string;
          controlsList: string[];
        };
      };
      backToBlog: string;
      projectOverview: string;
      mainFeatures: string;
      techStack: string;
      developmentProcess: string;
      viewAllProjects: string;
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
          overview: string;
          overviewDesc1: string;
          overviewDesc2: string;
          features: string;
          featuresList: string[];
          tech: string;
          process: string;
          processDesc1: string;
          processDesc2: string;
        };
        portfolio: {
          title: string;
          description: string;
          overview: string;
          overviewDesc1: string;
          overviewDesc2: string;
          features: string;
          featuresList: string[];
          tech: string;
          process: string;
          processDesc1: string;
          processDesc2: string;
        };
        weather: {
          title: string;
          description: string;
          overview: string;
          overviewDesc1: string;
          overviewDesc2: string;
          features: string;
          featuresList: string[];
          tech: string;
          process: string;
          processDesc1: string;
          processDesc2: string;
          controls: string;
          controlsList: string[];
        };
      };
      backToBlog: string;
      projectOverview: string;
      mainFeatures: string;
      techStack: string;
      developmentProcess: string;
      viewAllProjects: string;
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
          overview: '프로젝트 개요',
          overviewDesc1: 'DSUGraduate 앱은 대학교 졸업을 준비하는 학생들을 위한 종합적인 졸업 도우미 애플리케이션입니다. 학생들이 졸업에 필요한 모든 요구사항을 체계적으로 관리하고 추적할 수 있도록 도와줍니다.',
          overviewDesc2: '이 앱을 통해 학생들은 학점 확인, 졸업 논문 진행 상황, 취업 준비 현황 등을 한눈에 파악할 수 있으며, 졸업까지 남은 일정과 해야 할 일들을 체계적으로 관리할 수 있습니다.',
          features: '주요 기능',
          featuresList: [
            '졸업 요구사항 체크리스트',
            '학점 계산기 및 졸업 가능 여부 확인',
            '졸업 논문 및 프로젝트 진행 상황 관리',
            '취업 준비 현황 추적',
            '알림 및 일정 관리'
          ],
          tech: '기술 스택',
          process: '개발 과정',
          processDesc1: 'Android Studio를 사용하여 Java로 개발했습니다. Firebase를 백엔드 서비스로 활용하여 사용자 데이터를 관리하고 실시간 동기화를 구현했습니다.',
          processDesc2: 'Material Design 가이드라인을 따라 직관적이고 사용하기 쉬운 UI/UX를 설계했으며, 졸업 요구사항 체크리스트와 알림 기능을 통해 학생들의 졸업 준비를 체계적으로 도와줍니다.',
        },
        portfolio: {
          title: 'Portfolio Website',
          description: 'Next.js와 Tailwind CSS로 제작한 개인 포트폴리오 웹사이트',
          overview: '프로젝트 개요',
          overviewDesc1: '개인 포트폴리오 웹사이트는 Next.js와 Tailwind CSS를 사용하여 제작한 반응형 웹사이트입니다. 현대적이고 세련된 디자인으로 제작되어 방문자들에게 좋은 첫인상을 줄 수 있도록 구성했습니다.',
          overviewDesc2: '다크모드/라이트모드 전환, 다국어 지원(한국어, 일본어, 영어), 갤러리 섹션 등 다양한 기능을 포함하고 있으며, 개발자로서의 역량과 프로젝트 경험을 효과적으로 보여줄 수 있도록 설계되었습니다.',
          features: '주요 기능',
          featuresList: [
            '반응형 디자인 (모바일, 태블릿, 데스크톱 지원)',
            '다크모드/라이트모드 전환 기능',
            '다국어 지원 (한국어, 일본어, 영어)',
            '프로젝트 갤러리 및 상세 페이지',
            '부드러운 애니메이션 및 호버 효과'
          ],
          tech: '기술 스택',
          process: '개발 과정',
          processDesc1: '이 프로젝트를 통해 Next.js의 App Router 구조를 학습하고, TypeScript를 활용한 타입 안전한 개발을 경험했습니다. Tailwind CSS를 사용하여 효율적인 스타일링을 구현하고, 다크모드와 다국어 지원을 통해 사용자 경험을 향상시켰습니다.',
          processDesc2: '반응형 디자인을 구현하여 다양한 기기에서 최적의 사용자 경험을 제공하고, SEO 최적화와 성능 향상을 위한 최신 웹 개발 기법들을 적용했습니다.',
        },
        weather: {
          title: 'Shooting Game',
          description: 'JavaScript로 제작한 간단한 슈팅게임',
          overview: '프로젝트 개요',
          overviewDesc1: 'JavaScript를 활용한 2D 슈팅 게임입니다. 바닐라 JavaScript만을 사용하여 게임 로직을 구현했으며, HTML5 Canvas API를 통해 그래픽을 렌더링했습니다. 간단하지만 재미있는 게임플레이를 제공합니다.',
          overviewDesc2: '플레이어는 우주선을 조작하여 적들을 파괴하고 점수를 획득하는 클래식한 슈팅 게임의 형태를 가지고 있습니다. 게임의 난이도는 시간이 지남에 따라 점진적으로 증가하여 플레이어에게 도전적인 요소를 제공합니다.',
          features: '주요 기능',
          featuresList: [
            '키보드 입력을 통한 우주선 조작 (방향키, 스페이스바)',
            '실시간 충돌 감지 시스템',
            '점수 시스템 및 최고 점수 기록',
            '점진적 난이도 증가',
            '게임 오버 및 재시작 기능'
          ],
          tech: '기술 스택',
          process: '개발 과정',
          processDesc1: '이 프로젝트를 통해 바닐라 JavaScript의 깊은 이해를 얻었습니다. 게임 루프, 객체 지향 프로그래밍, 이벤트 처리, Canvas API 활용 등의 핵심 개념들을 실습했습니다.',
          processDesc2: '특히 게임 개발에서 중요한 충돌 감지 알고리즘과 게임 상태 관리, 그리고 사용자 입력 처리에 대한 경험을 쌓을 수 있었습니다. 또한 성능 최적화를 위한 객체 풀링 등의 기법도 학습했습니다.',
          controls: '게임 조작법',
          controlsList: [
            '방향키: 우주선 이동',
            '스페이스바: 발사',
            'R키: 게임 재시작'
          ],
        },
      },
      backToBlog: '블로그로 돌아가기',
      projectOverview: '프로젝트 개요',
      mainFeatures: '주요 기능',
      techStack: '기술 스택',
      developmentProcess: '개발 과정',
      viewAllProjects: '모든 프로젝트 보기',
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
          overview: 'プロジェクト概要',
          overviewDesc1: 'DSUGraduateアプリは、大学卒業を準備する学生のための総合的な卒業支援アプリケーションです。学生が卒業に必要なすべての要件を体系的に管理し、追跡できるよう支援します。',
          overviewDesc2: 'このアプリを通じて、学生は成績確認、卒業論文の進捗状況、就職準備の現状などを一目で把握でき、卒業までのスケジュールとやるべきことを体系的に管理できます。',
          features: '主な機能',
          featuresList: [
            '卒業要件チェックリスト',
            '成績計算機と卒業可否確認',
            '卒業論文とプロジェクト進捗管理',
            '就職準備現状追跡',
            '通知とスケジュール管理'
          ],
          tech: '技術スタック',
          process: '開発過程',
          processDesc1: 'Android Studioを使用してJavaで開発しました。Firebaseをバックエンドサービスとして活用し、ユーザーデータを管理し、リアルタイム同期を実装しました。',
          processDesc2: 'Material Designガイドラインに従って直感的で使いやすいUI/UXを設計し、卒業要件チェックリストと通知機能を通じて学生の卒業準備を体系的に支援します。',
        },
        portfolio: {
          title: 'Portfolio Website',
          description: 'Next.jsとTailwind CSSで制作した個人ポートフォリオサイト',
          overview: 'プロジェクト概要',
          overviewDesc1: '個人ポートフォリオウェブサイトは、Next.jsとTailwind CSSを使用して制作したレスポンシブウェブサイトです。現代的で洗練されたデザインで制作され、訪問者に良い第一印象を与えるよう構成されています。',
          overviewDesc2: 'ダークモード/ライトモード切り替え、多言語サポート（韓国語、日本語、英語）、ギャラリーセクションなど様々な機能を含んでおり、開発者としての能力とプロジェクト経験を効果的に示すよう設計されています。',
          features: '主な機能',
          featuresList: [
            'レスポンシブデザイン（モバイル、タブレット、デスクトップ対応）',
            'ダークモード/ライトモード切り替え機能',
            '多言語サポート（韓国語、日本語、英語）',
            'プロジェクトギャラリーと詳細ページ',
            'スムーズなアニメーションとホバー効果'
          ],
          tech: '技術スタック',
          process: '開発過程',
          processDesc1: 'このプロジェクトを通じてNext.jsのApp Router構造を学習し、TypeScriptを活用した型安全な開発を経験しました。Tailwind CSSを使用して効率的なスタイリングを実装し、ダークモードと多言語サポートを通じてユーザーエクスペリエンスを向上させました。',
          processDesc2: 'レスポンシブデザインを実装して様々なデバイスで最適なユーザーエクスペリエンスを提供し、SEO最適化とパフォーマンス向上のための最新のウェブ開発技術を適用しました。',
        },
        weather: {
          title: 'Shooting Game',
          description: 'JavaScriptで制作したシンプルなシューティングゲーム',
          overview: 'プロジェクト概要',
          overviewDesc1: 'JavaScriptを活用した2Dシューティングゲームです。バニラJavaScriptのみを使用してゲームロジックを実装し、HTML5 Canvas APIを通じてグラフィックをレンダリングしました。シンプルですが楽しいゲームプレイを提供します。',
          overviewDesc2: 'プレイヤーは宇宙船を操作して敵を破壊し、スコアを獲得するクラシックなシューティングゲームの形式を持っています。ゲームの難易度は時間が経つにつれて段階的に増加し、プレイヤーに挑戦的な要素を提供します。',
          features: '主な機能',
          featuresList: [
            'キーボード入力による宇宙船操作（方向キー、スペースキー）',
            'リアルタイム衝突検出システム',
            'スコアシステムと最高スコア記録',
            '段階的難易度増加',
            'ゲームオーバーと再開機能'
          ],
          tech: '技術スタック',
          process: '開発過程',
          processDesc1: 'このプロジェクトを通じてバニラJavaScriptの深い理解を得ました。ゲームループ、オブジェクト指向プログラミング、イベント処理、Canvas API活用などの核心概念を実習しました。',
          processDesc2: '特にゲーム開発で重要な衝突検出アルゴリズムとゲーム状態管理、そしてユーザー入力処理に関する経験を積むことができました。また、パフォーマンス最適化のためのオブジェクトプーリングなどの技術も学習しました。',
          controls: 'ゲーム操作方法',
          controlsList: [
            '方向キー：宇宙船移動',
            'スペースキー：発射',
            'Rキー：ゲーム再開'
          ],
        },
      },
      backToBlog: 'ブログに戻る',
      projectOverview: 'プロジェクト概要',
      mainFeatures: '主な機能',
      techStack: '技術スタック',
      developmentProcess: '開発過程',
      viewAllProjects: 'すべてのプロジェクトを見る',
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
          overview: 'Project Overview',
          overviewDesc1: 'DSUGraduate app is a comprehensive graduation assistant application for university students preparing for graduation. It helps students systematically manage and track all graduation requirements.',
          overviewDesc2: 'Through this app, students can easily check their grades, track graduation thesis progress, monitor job search status, and systematically manage their remaining graduation schedule and tasks.',
          features: 'Key Features',
          featuresList: [
            'Graduation requirement checklist',
            'GPA calculator and graduation eligibility check',
            'Thesis and project progress management',
            'Job search status tracking',
            'Notification and schedule management'
          ],
          tech: 'Tech Stack',
          process: 'Development Process',
          processDesc1: 'Developed using Java with Android Studio. Firebase was utilized as a backend service to manage user data and implement real-time synchronization.',
          processDesc2: 'Following Material Design guidelines, we designed an intuitive and user-friendly UI/UX, and systematically support students\' graduation preparation through graduation requirement checklists and notification features.',
        },
        portfolio: {
          title: 'Portfolio Website',
          description: 'A personal portfolio website built with Next.js and Tailwind CSS',
          overview: 'Project Overview',
          overviewDesc1: 'This personal portfolio website is a responsive web application built with Next.js and Tailwind CSS. It features a modern and sophisticated design that creates a great first impression for visitors.',
          overviewDesc2: 'It includes various features such as dark/light mode switching, multilingual support (Korean, Japanese, English), and a gallery section, designed to effectively showcase developer capabilities and project experience.',
          features: 'Key Features',
          featuresList: [
            'Responsive design (mobile, tablet, desktop support)',
            'Dark/light mode switching functionality',
            'Multilingual support (Korean, Japanese, English)',
            'Project gallery and detailed pages',
            'Smooth animations and hover effects'
          ],
          tech: 'Tech Stack',
          process: 'Development Process',
          processDesc1: 'Through this project, I learned Next.js App Router structure and experienced type-safe development using TypeScript. I implemented efficient styling with Tailwind CSS and enhanced user experience through dark mode and multilingual support.',
          processDesc2: 'I implemented responsive design to provide optimal user experience across various devices and applied modern web development techniques for SEO optimization and performance improvement.',
        },
        weather: {
          title: 'Shooting Game',
          description: 'A simple shooting game built with JavaScript',
          overview: 'Project Overview',
          overviewDesc1: 'This is a 2D shooting game developed using JavaScript. The game logic was implemented using vanilla JavaScript only, and graphics are rendered through HTML5 Canvas API. It provides simple but fun gameplay.',
          overviewDesc2: 'It features a classic shooting game format where players control a spaceship to destroy enemies and earn scores. The game difficulty gradually increases over time, providing challenging elements for players.',
          features: 'Key Features',
          featuresList: [
            'Keyboard input for spaceship control (arrow keys, spacebar)',
            'Real-time collision detection system',
            'Score system and high score recording',
            'Progressive difficulty increase',
            'Game over and restart functionality'
          ],
          tech: 'Tech Stack',
          process: 'Development Process',
          processDesc1: 'Through this project, I gained deep understanding of vanilla JavaScript. I practiced core concepts such as game loops, object-oriented programming, event handling, and Canvas API utilization.',
          processDesc2: 'I particularly gained experience in collision detection algorithms, game state management, and user input handling, which are crucial in game development. I also learned techniques like object pooling for performance optimization.',
          controls: 'Game Controls',
          controlsList: [
            'Arrow Keys: Spaceship movement',
            'Spacebar: Shoot',
            'R Key: Restart game'
          ],
        },
      },
      backToBlog: 'Back to Blog',
      projectOverview: 'Project Overview',
      mainFeatures: 'Key Features',
      techStack: 'Tech Stack',
      developmentProcess: 'Development Process',
      viewAllProjects: 'View All Projects',
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
