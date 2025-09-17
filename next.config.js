/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 로컬 정적 자산은 브라우저 원본으로 서빙 (최적화 비활성화)
    unoptimized: true,
  },
};

module.exports = nextConfig;
