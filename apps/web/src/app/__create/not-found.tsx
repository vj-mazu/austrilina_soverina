import { useNavigate, useLocation } from 'react-router';

export default function CreateDefaultNotFoundPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const missingPath = location.pathname.replace(/^\//, '');

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="flex sm:w-full w-screen sm:min-w-[850px] flex-col min-h-screen bg-white">
      <div className="flex w-full items-center gap-2 p-5">
        <button
          type="button"
          onClick={handleBack}
          className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Back"
            role="img"
          >
            <path
              d="M8.5957 2.65435L2.25005 9L8.5957 15.3457"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.25007 9L15.75 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="flex flex-row divide-x divide-gray-200 rounded-[8px] h-8 w-[300px] border border-gray-200 bg-gray-50 text-gray-500">
          <div className="flex items-center px-[14px] py-[5px]">
            <span>/</span>
          </div>
          <div className="flex items-center min-w-0">
            <p
              className="border-0 bg-transparent px-3 py-2 focus:outline-none truncate max-w-[300px]"
              style={{ minWidth: 0 }}
              title={missingPath}
            >
              {missingPath}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-grow flex-col items-center justify-center pt-[100px] text-center gap-[20px] px-6">
        <h1 className="text-4xl font-medium text-gray-900">
          Uh-oh! This page doesn't exist.
        </h1>

        <p className="pt-4 pb-12 text-gray-500">
          Looks like "<span className="font-bold">/{missingPath}</span>" isn't part of the site.
        </p>

        <button
          type="button"
          className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-lg"
          onClick={handleBack}
        >
          Return to Homepage
        </button>
      </div>
    </div>
  );
}
