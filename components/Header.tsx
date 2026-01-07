import Link from 'next/link';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
      {/* 로고 → 홈 */}
      <Link href="/" className="text-2xl font-bold">
        PopPang
      </Link>

      <nav className="flex items-center gap-4">
        {/* <Link href="#">촬영하기</Link> */}
        {/* <Link href="#">가이드</Link> */}
        <Link href="/blog" className="font-semibold">
          블로그
        </Link>
        <button className="ml-4 px-4 py-2 bg-black text-white rounded-full">
          앱 다운로드
        </button>
      </nav>
    </header>
  );
};
