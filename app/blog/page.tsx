"use client";
import React from 'react';
import Image from 'next/image';
import CommentSection from '@/components/layout/CommentSection/CommentSection';
import Related from '@/components/layout/Related/Related';
import Stats from '@/components/layout/Stats/Stats';
const profiles = [
  {
    name: "Ahmed Eid",
    role: "Graphic Designer , Flutter developer & Leader",
    company: "CEO NabdMasr",
    date: "2006-12-10",
    title: "Best practices for successful prototypes",
    image: "/pr_2.jpg",
  },
  {
    name: "Seif Ayman",
    role: "Front-End Developer, React & Next.js Enthusiast",
    company: "CTO NabdMasr",
    date: "2007-09-23",
    title: "Crafting Engaging User Interfaces with React",
    image: "/pr_1.jpg",
  },
];

const Blog = () => {
  return (
    <>
      <section className="w-[80%] mx-auto mt-20">
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased">
          {/* PC Screen */}
          <div className="hidden lg:grid gap-8 grid-cols-1 md:grid-cols-2 px-6 py-8 mx-auto max-w-screen-xl">
            {profiles.map((profile, index) => (
              <article
                key={index}
                className="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
              >
                <header className="mb-6 lg:mb-8 not-format bg-black/30 backdrop-blur-lg p-6 rounded-xl shadow-lg">
                  <address className="flex items-center mb-4 not-italic">
                    <div className="inline-flex items-center space-x-4 text-sm text-white">
                      {profile.image && (
                        <Image
                          className="w-16 h-16 rounded-full shadow-md"
                          src={profile.image}
                          alt={profile.name}
                          width={64}
                          height={64}
                        />
                      )}
                      <div>
                        <a href="#" rel="author" className="text-xl font-bold text-white hover:underline">
                          {profile.name}
                        </a>
                        <p className="text-base text-gray-300 mt-1">{profile.role}</p>
                        <p className="text-sm font-semibold text-gray-400">{profile.company}</p>
                        <p className="text-sm text-gray-500">
                          <time dateTime={profile.date} title={profile.date}>
                            {new Date(profile.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </time>
                        </p>
                      </div>
                    </div>
                  </address>

                  <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white lg:mb-6 lg:text-4xl bg-black/10 backdrop-blur-lg p-4 rounded-xl shadow-lg">
                    {profile.title}
                  </h1>
                </header>
              </article>
            ))}
          </div>

          {/* Mobile Screen */}
          <div className="lg:hidden grid gap-4 grid-cols-1 px-4 py-6 mx-auto max-w-xs">
            {profiles.map((profile, index) => (
              <article
                key={index}
                className="mx-auto w-full max-w-xs format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
              >
                <header className="mb-4 not-format bg-black/30 backdrop-blur-lg p-4 rounded-xl shadow-lg">
                  <address className="flex items-center mb-3 not-italic">
                    <div className="inline-flex items-center space-x-3 text-sm text-white">
                      {profile.image && (
                        <Image
                          className="w-12 h-12 rounded-full shadow-md"
                          src={profile.image}
                          alt={profile.name}
                          width={64}
                          height={64}
                        />
                      )}
                      <div>
                        <a href="#" rel="author" className="text-lg font-bold text-white hover:underline">
                          {profile.name}
                        </a>
                        <p className="text-sm text-gray-300 mt-1">{profile.role}</p>
                        <p className="text-xs font-semibold text-gray-400">{profile.company}</p>
                        <p className="text-xs text-gray-500">
                          <time dateTime={profile.date} title={profile.date}>
                            {new Date(profile.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </time>
                        </p>
                      </div>
                    </div>
                  </address>

                  <h1 className="mb-3 text-xl font-extrabold leading-tight text-white bg-black/10 backdrop-blur-lg p-3 rounded-xl shadow-lg">
                    {profile.title}
                  </h1>
                </header>
              </article>
            ))}
          </div>


          <div className="bg-gradient-to-tl from-white/10 via-white/5 to-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg text-white grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Top Left */}
            <div className="p-4 bg-black/30 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">Getting started with Flowbite</h2>
              <p className="text-gray-300 mb-2">
                First of all, you need to understand how Flowbite works. This library is not another framework.
                Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the documentation.
              </p>
              <p className="text-gray-300">
                It also includes a JavaScript file that enables interactive components, such as modals, dropdowns,
                and datepickers which you can optionally include into your project via CDN or NPM.
              </p>
            </div>

            {/* Right (Full Height) */}
            <div className="md:row-span-2 p-6 bg-black/30 backdrop-blur-lg rounded-xl shadow-lg text-white">
              <p className="text-gray-300 mb-4 leading-relaxed">
                Nabd Masr is a community initiative aimed at saving lives by creating a communication platform that connects blood donors with patients in need quickly and easily.
                Before thinking about the digital solution, we gathered ideas and sketched concepts on paper to ensure we provide the best user experience possible.
                The website features essential components for ease of use, such as donation buttons, navigation bars, data cards, and form elements. All of this is elegantly designed using the Tailwind CSS framework.
              </p>

              <div className="flex justify-center items-center my-8">
                <Image
                  src="/logo.ico"
                  alt="Description of the image"
                  className="rounded-full shadow-md"
                  width={150}
                  height={150}
                />
              </div>
              <figcaption className="text-center text-gray-400 mb-4">Digital art by Anonymous</figcaption>

              <h3 className="text-2xl font-bold mb-3">Laying the groundwork for best design</h3>
              <p className="text-gray-300 mb-4">
                Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
                you can think things through before committing to an actual design project.
              </p>
              <blockquote className="border-l-4 border-gray-500 pl-4 text-gray-400 italic">
                Flowbite is just awesome. It contains tons of predesigned components and pages, perfect choice for your next SaaS application.
              </blockquote>
            </div>

            {/* Bottom Left */}
            <div className="p-6 bg-black/30 backdrop-blur-lg rounded-xl shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-3">When does design come in handy?</h3>
              <p className="text-gray-300 mb-4">
                While it might seem like extra work at first glance, here are some key moments in which prototyping
                will come in handy:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li><strong>Usability testing:</strong> See how users interact with your design once it’s live.</li>
                <li><strong>Involving stakeholders:</strong> Get feedback from your team and clients.</li>
                <li><strong>Impressing a client:</strong> Show interactive prototypes to make your idea clear.</li>
                <li><strong>Communicating your vision:</strong> Bridge the gap between designers and developers.</li>
              </ul>
            </div>

            {/* Bottom (Full Width) */}
            <div className="col-span-1 md:col-span-2 p-4 bg-black/30 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Code example</h4>
              <p className="text-gray-300">
                A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
                Typefaces with serifs are called serif typefaces.
              </p>
            </div>
          </div>

          <Stats />

          <h4 className="mt-8 text-2xl font-semibold text-gray-100">Table Example</h4>
          <p className="mb-4 text-gray-300 text-lg">
            A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-full mb-8 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
              <thead className="space-y-2 mx-auto">
                <tr className="flex gap-x-4 justify-center pt-4">
                  <th className="flex-1 text-center p-2 text-white">Country</th>
                  <th className="flex-1 text-center p-2 text-white">Date &amp; Time</th>
                  <th className="flex-1 text-center p-2 text-white">Amount</th>
                </tr>
              </thead>

              <tbody className="space-y-2 mx-auto">
                <tr className="flex gap-x-4 justify-center pt-4 px-4">
                  <td className="flex-1 p-4 text-gray-300 bg-gray-800/30 backdrop-blur-md rounded text-center">United States</td>
                  <td className="flex-1 p-4 text-gray-300 bg-gray-800/30 backdrop-blur-md rounded text-center">April 21, 2021</td>
                  <td className="flex-1 p-4 text-gray-300 bg-gray-800/30 backdrop-blur-md rounded text-center"><strong>$2,300</strong></td>
                </tr>
                <tr className="flex gap-x-4 justify-center px-4">
                  <td className="flex-1 p-4 text-gray-300 bg-gray-800/30 backdrop-blur-md rounded text-center">Canada</td>
                  <td className="flex-1 p-4 text-gray-300 bg-gray-800/30 backdrop-blur-md rounded text-center">May 31, 2021</td>
                  <td className="flex-1 p-4 text-gray-300 bg-gray-800/30 backdrop-blur-md rounded text-center"><strong>$300</strong></td>
                </tr>
                <tr className="flex gap-x-4 justify-center px-4">
                  <td className="flex-1 p-4 text-gray-300 bg-gray-800/30 backdrop-blur-md rounded text-center">United Kingdom</td>
                  <td className="flex-1 p-4 text-gray-300 bg-gray-800/30 backdrop-blur-md rounded text-center">June 3, 2021</td>
                  <td className="flex-1 p-4 text-gray-300 bg-gray-800/30 backdrop-blur-md rounded text-center"><strong>$2,500</strong></td>
                </tr>
                <tr className="flex gap-x-4 justify-center px-4">
                  <td className="flex-1 p-4 text-gray-300 bg-gray-800/30 backdrop-blur-md rounded text-center">Australia</td>
                  <td className="flex-1 p-4 text-gray-300 bg-gray-800/30 backdrop-blur-md rounded text-center">June 23, 2021</td>
                  <td className="flex-1 p-4 text-gray-300 bg-gray-800/30 backdrop-blur-md rounded text-center"><strong>$3,543</strong></td>
                </tr>
                <tr className="flex gap-x-4 justify-center px-4">
                  <td className="flex-1 p-4 text-gray-300 bg-gray-800/30 backdrop-blur-md rounded text-center">Germany</td>
                  <td className="flex-1 p-4 text-gray-300 bg-gray-800/30 backdrop-blur-md rounded text-center">July 6, 2021</td>
                  <td className="flex-1 p-4 text-gray-300 bg-gray-800/30 backdrop-blur-md rounded text-center"><strong>$99</strong></td>
                </tr>
                <tr className="flex gap-x-4 justify-center px-4 pb-4">
                  <td className="flex-1 p-4 text-gray-300 bg-gray-800/30 backdrop-blur-md rounded text-center">France</td>
                  <td className="flex-1 p-4 text-gray-300 bg-gray-800/30 backdrop-blur-md rounded text-center">August 23, 2021</td>
                  <td className="flex-1 p-4 text-gray-300 bg-gray-800/30 backdrop-blur-md rounded text-center"><strong>$2,540</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-3xl font-extrabold text-gray-100 mb-6">Best Practices for Designing Nabd Masr</h3>

          <p className="mb-4 p-4 text-gray-300 text-lg bg-gray-800/10 bg-opacity-30 border border-gray-600 rounded-lg backdrop-blur-md shadow-md">
            <strong>Simplicity and Clarity</strong>. In the Nabd Masr website, it’s essential to keep the interface simple and clear for users.
            A clean design helps guide donors and volunteers effortlessly through the required actions, such as registering a donation or searching for donors.
          </p>

          <p className="mb-4 p-4 text-gray-300 text-lg bg-gray-800/10 bg-opacity-30 border border-gray-600 rounded-lg backdrop-blur-md shadow-md">
            <strong>Responsive Design</strong>. Considering the variety of devices used by donors, it’s crucial to ensure that the website works flawlessly on all screens,
            whether they are smartphones, tablets, or desktop monitors.
          </p>

          <p className="mb-4 p-4 text-gray-300 text-lg bg-gray-800/10 bg-opacity-30 border border-gray-600 rounded-lg backdrop-blur-md shadow-md">
            <strong>Dark Colors for Comfort</strong>. Using dark colors like gray and black with red accents not only gives a professional look but also makes text more readable,
            providing a comfortable user experience while maintaining a humanitarian feel.
          </p>

          <p className="mb-8 p-4 text-gray-300 text-lg bg-gray-800/10 bg-opacity-30 border border-gray-600 rounded-lg backdrop-blur-md shadow-md">
            <strong>Fast Communication</strong>. It’s essential to provide quick contact options for donors and volunteers, such as quick contact buttons or simple forms.
            The goal is to facilitate rapid access to help in an efficient way.
          </p>
          <CommentSection />
        </main>
      </section>
      <Related />
    </>
  );
};

export default Blog;