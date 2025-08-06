'use client';

// import Image from 'next/image';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            {/* <Image
              src="/avatars/avatar1.jpg" 
              alt="User 1"
              width={80}
              height={80}
              className="rounded-full mx-auto mb-4"
            /> */}
            <p className="text-gray-700 dark:text-gray-300">
              The automation tools saved my team countless hours. It&apos;s now an essential part of our marketing toolkit.
            </p>
            <h4 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Sarah K.</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            {/* <Image
              src="/avatars/avatar2.jpg"
              alt="User 2"
              width={80}
              height={80}
              className="rounded-full mx-auto mb-4"
            /> */}
            <p className="text-gray-700 dark:text-gray-300">
              The AI insights helped us double our engagement. Super impressed by the real-time reports!
            </p>
            <h4 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">David L.</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Digital Strategist</p>
          </div>

          {/* Testimonial 3 (FIXED) */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            {/* <Image
              src="/avatars/avatar3.jpg"
              alt="User 3"
              width={80}
              height={80}
              className="rounded-full mx-auto mb-4"
            /> */}
            <p className="text-gray-700 dark:text-gray-300">
              From campaign planning to analytics, everything is in one place. Couldn&apos;t ask for more.
            </p>
            <h4 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Anjali M.</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Product Lead</p>
          </div>
        </div>
      </div>
    </section>
  );
}
