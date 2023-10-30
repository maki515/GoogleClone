import Image from 'next/image'
import RootLayout from './layout';

export default function Home() {
  return (
    <RootLayout>
      <header className="bg-gray-800 text-white py-4 px-6">
        <h1>Google Clone</h1>
      </header>
    <div className="h-screen flex flex-col items-center justify-center">
      
      {/* Google Logo */}
      <Image src="/google-logo.svg" alt="Google" width={272} height={92} />

      {/* Search Input */}
      <div className="relative mt-5 w-96">
        <input type="text" className="border rounded-md p-4 w-full focus:outline-none focus:ring focus:border-blue-300" />
        <Image src="/search-icon.svg" alt="Search" width={20} height={20} className="absolute top-5 left-5" />
      </div>

      {/* Buttons */}
      <div className="mt-5 space-x-4">
        <button className="hover:underline">Google Search</button>
        <button className="hover:underline">I'm Feeling Lucky</button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full bg-gray-100 border-t">
        <div className="container mx-auto py-3 text-center">
          <p>Country: New Zealand</p>
        </div>
      </div>
    </div>
 </RootLayout>
  )
  }
// export default function Home() {
//   return (
//     <RootLayout>
//       <header className="bg-gray-800 text-white py-4 px-6">
//         <h1>Google Clone</h1>
//       </header>

//       <main className="flex min-h-screen flex-col items-center justify-between p-24">
//         <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//           <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//             <a
//               className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//               href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               By{' '}
//               <Image
//                 src="/vercel.svg"
//                 alt="Vercel Logo"
//                 className="dark:invert"
//                 width={100}
//                 height={24}
//                 priority
//               />
//             </a>
//           </div>
//         </div>

//         <section className="relative flex place-items-center z-[-1]">
//           <Image
//             className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//             src="/google-logo.svg"
//             alt="google-Logo"
//             width={180}
//             height={37}
//             priority
//           />
//         </section>

//         <section className="mb-8">
//           <input
//               type="text"
//               className="shadow-lg border rounded-md p-2 w-64 focus:outline-none focus:border-blue-500 focus:shadow-outline"
//               placeholder="Search Google or type a URL"
//           />
//         </section>

//         <nav className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className={`mb-3 text-2xl font-semibold`}>
//               Docs{' '}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//               Find in-depth information about Next.js features and API.
//             </p>
//           </a>

//           <a
//             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className={`mb-3 text-2xl font-semibold`}>
//               Learn{' '}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//               Learn about Next.js in an interactive course with&nbsp;quizzes!
//             </p>
//           </a>

//           <a
//             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className={`mb-3 text-2xl font-semibold`}>
//               Templates{' '}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//               Explore the Next.js 13 playground.
//             </p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className={`mb-3 text-2xl font-semibold`}>
//               Deploy{' '}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//               Instantly deploy your Next.js site to a shareable URL with Vercel.
//             </p>
//           </a>
//         </nav>
//       </main>
//     </RootLayout>
//   )
// }
