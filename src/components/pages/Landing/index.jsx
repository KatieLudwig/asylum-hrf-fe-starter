import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
// import {decodeBase64} from '../../../utils/decodeBase64.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage
    navigate('http://humanrightsfirst.org');
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='w-full p-6 bg-gray-800 text-white text-center'>
        <h1 className='text-3xl font-bold'>Asylum Office Grant Rate Tracker</h1>
        <p className='mt-2'>The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on Asylum Office decisions</p>
      </header>
      
      <main className='flex-grow flex flex-col items-center p-8 bg-gray-100'>
        <div className='flex justify-center m-14 gap-20 text-2xl'>
        {[
            { img: barGraph, text: 'Search Grant Rates By Office' },
            { img: pieChart, text: 'Search Grant Rates By Nationality' },
            { img: lineGraph, text: 'Search Grant Rates Over Time' },
          ].map(({ img, text }, index) => (
            <div key={index} className='text-center'>
              <img src={img} alt={text} className='w-40 h-40 mx-auto' />
              <p className='mt-5'>{text}</p>
            </div>
          ))}
        </div>
        
        <div className='flex justify-center space-x-4 mb-20'>
        <button
          onClick={handleReadMore}
          className='px-4 py-2 bg-gray-600 text-white text-sm rounded hover:bg-gray-700'
        >
          View Data
        </button>
        <button
          onClick={downloadCSV}
          className='px-4 py-2 bg-gray-600 text-white text-sm rounded hover:bg-gray-700'
        >
          Download the Data
        </button>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between max-w-4xl mb-20'>
          <img src={paperStack} alt='Paper Stack' className='w-full md:w-1/2 mb-4 md:mb-0 md:mr-4' />
          <p>
            Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May 2021 by the USCIS Asylum Office, which we received through a Freedom of Information Act request. You can search for information on asylum grant rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.
          </p>
          </div>

          <h2 className='text-2xl font-bold text-center mt-8'>Systemic Disparity Insights</h2>
          <div className='flex justify-between w-full max-w-4xl mt-4'>
          {[
        { percentage: '36%', text: 'By the end of the Trump administration, the average asylum office grant rate had fallen 36 percent.' },
        { percentage: '5%', text: 'The New York asylum office grant rate dropped 5 percent in fiscal year 2020.' },
        { percentage: '6x Lower', text: 'Between fiscal year 2017 and 2020, the New York asylum office\'s average grant rate was six times lower than the San Francicso asylum office.' },
      ].map(({ percentage, text }, index) => (
        <div key={index} className='text-center'>
          <h3 className='text-xl font-semibold'>{percentage}</h3>
          <p className='mt-2'>{text}</p>
        </div>
      ))}
          </div>
            <button
            onClick={handleReadMore}
            className='mt-12 px-4 py-2 bg-gray-600 text-white text-sm rounded hover:bg-blue-700 mb-8'
            >
              Read More
            </button>
          <button
          onClick={scrollToTop}
          className='mt-10 text-l font-semibold'
          >
            Back To Top <span className='ml-1'>^</span>
          </button>
      </main>
    </div>
  );
};

