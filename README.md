# portfolio-pm

개인 포트폴리오 웹사이트입니다. Next.js 14, React 18, TypeScript, Tailwind CSS를 사용해 제작되었으며, 다크 모드와 다국어(ko/ja/en)를 지원합니다.

## 기능

- 다크 모드 토글 지원
- 한국어/일본어/영어 다국어 지원
- 접근성 및 반응형 레이아웃
- 메타데이터 및 Open Graph 최적화

## 요구사항

- Node.js 18 이상 권장

## 시작하기

1) 패키지 설치

```bash
npm i
```

2) 개발 서버 실행

```bash
npm run dev
# http://localhost:3000 접속
```

3) 프로덕션 빌드/실행

```bash
npm run build
npm start
```

4) 린트 검사

```bash
npm run lint
```

## 스크립트

- dev: 개발 서버 실행
- build: 프로덕션 빌드
- start: 빌드 결과 실행
- lint: 린트 검사

## 기술 스택

- Next.js 14, React 18, TypeScript
- Tailwind CSS 4

## 주요 파일 구조

```
portfolio-pm/
├─ src/
│  └─ app/
│     ├─ layout.tsx        # 전역 레이아웃 및 메타데이터(title: "portfolio-pm ...")
│     ├─ page.tsx          # 홈 페이지(네비/푸터의 로고 텍스트: "portfolio-pm")
│     └─ translations.ts   # 다국어 리소스(ko/ja/en)
├─ public/                 # 정적 자산(profile.jpg 등)
├─ package.json            # 프로젝트 정보 및 스크립트
└─ next.config.js          # Next.js 설정
```

## 커스터마이즈 포인트

- 사이트 타이틀/오픈그래프: `src/app/layout.tsx`의 `metadata`
- 헤더/푸터 로고 텍스트: `src/app/page.tsx`
- 다국어 텍스트: `src/app/translations.ts`


