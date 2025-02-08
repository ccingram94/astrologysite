import Image from 'next/image';
import Link from 'next/link';

export default function Reports() {
  return (
    <div className='min-h-screen p-4 md:p-8'>
      <div className='flex flex-col justify-center items-center text-center mb-12'>
        <h1 className='font-extrabold text-2xl lg:text-4xl mb-4'>Professional Reports</h1>
        <p className='text-lg max-w-2xl text-base-content/80'>
          Discover deep insights about yourself through our detailed astrological reports
        </p>
      </div>

      <div className='max-w-4xl mx-auto'>
        <div className='card lg:card-side bg-base-100 border border-primary/30 shadow-xl'>
          <figure className='lg:w-1/2 m-6'>
            <Image
              src="/logo.webp" 
              alt="Birth Chart Example"
              width={300}
              height={300}
              className='w-48 h-48'
            />
          </figure>
          <div className='card-body lg:w-1/2'>
            <h2 className='card-title text-neutral text-2xl lg:text-4xl'>Birth Chart</h2>
            <div className='flex flex-row flex-wrap'>
              <div className='badge badge-primary text-base-100 mr-1'>PDF Report</div>
              <div className='badge badge-primary text-base-100 mx-1'>Instant</div>
            </div>
            <p className='text-neutral/80 mb-4'>
              A comprehensive analysis of your natal chart, revealing your unique personality traits,
              life path, and potential challenges and opportunities.
            </p>
            <ul className='space-y-2 mb-6'>
              <li className='flex items-center'>
                <svg className='w-4 h-4 mr-2 text-success' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                </svg>
                20+ page detailed PDF report
              </li>
              <li className='flex items-center'>
                <svg className='w-4 h-4 mr-2 text-success' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                </svg>
                Planetary positions and aspects
              </li>
              <li className='flex items-center'>
                <svg className='w-4 h-4 mr-2 text-success' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                </svg>
                House placements analysis
              </li>
            </ul>
            <div className='flex flex-col gap-4'>
              <div className='text-2xl font-bold'>$29.99</div>
              <Link 
                href="/checkout" // Replace with your actual checkout route 
                className='btn btn-primary rounded-full text-base-100'
              >
                Purchase Report
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className='text-center mt-16'>
        <h2 className='text-xl font-bold mb-4'>More Reports Coming Soon</h2>
        <p className='text-base-content/70'>
          Stay tuned for additional astrological reports and insights
        </p>
      </div>
    </div>
  );
}
