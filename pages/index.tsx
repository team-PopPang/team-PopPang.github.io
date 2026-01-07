// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import { Layout } from '../components/Layout';

// const Home: React.FC = () => {
//   return (
//     <Layout>
//       <Head>
//         <title>MY4CUT - 내 손안의 포토부스</title>
//       </Head>
//       <section className="text-center py-20">
//         <h1 className="text-4xl md:text-5xl font-extrabold mb-4">내 손안의 포토부스, 나만의 네컷</h1>
//         <p className="text-gray-500 mb-6">언제 어디서든 특별하게</p>
//         <div className="flex justify-center gap-4 mb-8">
//           <Link href="#" className="px-6 py-3 bg-black text-white rounded-full inline-block">웹에서 바로 체험하기</Link>
//           <button className="px-6 py-3 border rounded-full">앱 다운로드</button>
//         </div>

//         <div className="mt-12 mx-auto w-[300px] sm:w-[360px] md:w-[420px] lg:w-[520px] h-auto rounded-3xl shadow-2xl border-8 border-[#0f1724] flex items-center justify-center p-4">
//           <div className="w-full max-w-[360px] bg-white rounded-lg p-3">
//             <div className="grid grid-cols-2 gap-2">
//               <div className="h-36 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
//                 <Image src="/images/blog1.jpg" alt="thumb" width={300} height={180} className="object-cover" />
//               </div>
//               <div className="h-36 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
//                 <Image src="/images/blog2.jpg" alt="thumb2" width={300} height={180} className="object-cover" />
//               </div>
//               <div className="h-36 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
//                 <Image src="/images/blog2.jpg" alt="thumb3" width={300} height={180} className="object-cover" />
//               </div>
//               <div className="h-36 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
//                 <Image src="/images/blog1.jpg" alt="thumb4" width={300} height={180} className="object-cover" />
//               </div>
//             </div>
//             <div className="mt-3 flex items-center justify-between">
//               <div className="text-xs text-gray-400">나만의 네컷</div>
//               <div className="flex gap-2">
//                 <button className="px-3 py-1 border rounded">QR 코드</button>
//                 <button className="px-3 py-1 bg-black text-white rounded">앨범 저장</button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8">
//           <Link href="/blog" className="text-sm text-gray-600 underline">블로그 보기 →</Link>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Home;


import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Layout } from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>팝팡 - 지금 뜨는 팝업을 가장 빠르게</title>
      </Head>

      <section className="text-center py-20">
        {/* 메인 카피 */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          팝팡, 전국 팝업스토어 알림 서비스
        </h1>
        <p className="text-gray-500 mb-6">
          놓치기 쉬운 팝업 스토어 정보를 빠르게
        </p>

        {/* CTA */}
        <div className="flex justify-center gap-4 mb-8">
          <Link
            href="#"
            className="px-6 py-3 bg-black text-white rounded-full inline-block"
          >
            팝업 둘러보기
          </Link>
          <button className="px-6 py-3 border rounded-full">
            앱 다운로드
          </button>
        </div>

        {/* 목업 영역 (일단 그대로 유지) */}
        <div className="mt-12 mx-auto w-[300px] sm:w-[360px] md:w-[420px] lg:w-[520px] h-auto rounded-3xl shadow-2xl border-8 border-[#0f1724] flex items-center justify-center p-4">
          <div className="w-full max-w-[360px] bg-white rounded-lg p-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="h-36 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                <Image src="/images/blog1.jpg" alt="popup1" width={300} height={180} className="object-cover" />
              </div>
              <div className="h-36 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                <Image src="/images/blog2.jpg" alt="popup2" width={300} height={180} className="object-cover" />
              </div>
              <div className="h-36 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                <Image src="/images/blog2.jpg" alt="popup3" width={300} height={180} className="object-cover" />
              </div>
              <div className="h-36 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                <Image src="/images/blog1.jpg" alt="popup4" width={300} height={180} className="object-cover" />
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="text-xs text-gray-400">
                인기 팝업 스토어
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 border rounded">
                  위치 보기
                </button>
                <button className="px-3 py-1 bg-black text-white rounded">
                  알림 받기
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 링크 */}
        <div className="mt-8">
          <Link href="/blog" className="text-sm text-gray-600 underline">
            팝업 기술 블로그 보러가기 →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
