
import Link from 'next/link';
import { Home, ArrowLeft, AlertCircle } from 'lucide-react';


export default function NotFound() {
  
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-md w-full text-center">
        
        
        <div className="relative inline-block mb-6">
          <span className="text-8xl sm:text-9xl font-black text-[#a4223a]/10 dark:text-[#a4223a]/20 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-full shadow-lg border border-gray-100 dark:border-gray-800">
              <AlertCircle size={48} className="text-[#a4223a]" />
            </div>
          </div>
        </div>

        
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">
          Page Not Found
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Sorry, the page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
        </p>

        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          
          
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#a4223a] text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-[#851b2e] transition shadow-sm"
          >
            <Home size={15} />
            <span>Back to Home</span>
          </Link>

          
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 text-xs font-bold px-6 py-3 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            <ArrowLeft size={15} />
            <span>Contact Support</span>
          </Link>

        </div>

      </div>
    </div>
  );
}