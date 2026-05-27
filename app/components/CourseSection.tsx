const courses = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 1.5 17V5A2.5 2.5 0 0 1 4 2.5h16A2.5 2.5 0 0 1 22.5 5v12A2.5 2.5 0 0 1 20 19.5H4Z" />
        <path d="M7 8h10M7 12h10M7 16h6" />
      </svg>
    ),
    title: 'Digital Marketing Fundamentals',
    description: 'Learn the basics of digital marketing from SEO to social media.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 7l-7 5 7 5V7Z" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    title: 'Advanced PPC Strategies',
    description: 'Master pay-per-click advertising for maximum ROI.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 6 6 .5-4.5 4 1.5 6-5-3-5 3 1.5-6L3 8.5 9 8z" />
      </svg>
    ),
    title: 'Content Marketing Mastery',
    description: 'Create compelling content that drives engagement and conversions.',
  },
];

export default function CourseSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enhance your skills with our comprehensive digital marketing courses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">{course.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
