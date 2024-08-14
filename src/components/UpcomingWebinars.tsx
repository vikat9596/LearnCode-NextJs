'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'Introduction to Web Development',
      description:
        'Explore the basics of web development and start building your own websites.',
      slug: 'introduction-to-web-development',
      isFeatured: true,
    },
    {
      title: 'JavaScript Deep Dive',
      description:
        'Master JavaScript with in-depth lessons and hands-on projects.',
      slug: 'javascript-deep-dive',
      isFeatured: true,
    },
    {
      title: 'Building Responsive Websites',
      description:
        'Learn how to create responsive websites that look great on any device.',
      slug: 'building-responsive-websites',
      isFeatured: true,
    },
    {
      title: 'Intro to Python Programming',
      description:
        'Get started with Python and learn to solve real-world problems with code.',
      slug: 'intro-to-python-programming',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Version Control with Git',
      description:
        'Understand the fundamentals of Git and version control for collaborative coding.',
      slug: 'version-control-with-git',
      isFeatured: true,
    },
    {
      title: 'Full-Stack Development Overview',
      description:
        'A comprehensive guide to full-stack development, covering front-end and back-end technologies.',
      slug: 'full-stack-development-overview',
      isFeatured: true,
    },
  ];
  

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Coding Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars