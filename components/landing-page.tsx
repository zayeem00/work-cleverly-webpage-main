'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, BarChart, Database, FileText } from 'lucide-react';

export function LandingPageComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='min-h-screen bg-slate-100 text-slate-900'>
      <header className='container mx-auto px-4 py-6'>
        <nav className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>WorkCleverly.ai</h1>
          <ul className='flex space-x-6'>
            <li>
              <a href='#offerings' className='hover:text-gray-800'>
                Offerings
              </a>
            </li>
            <li>
              <a href='#why-us' className='hover:text-gray-800'>
                Why Us
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='bg-slate-900 text-slate-50 px-4 py-2 rounded-md hover:bg-slate-800'
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className='hero container mx-auto px-4 py-20 text-center'>
          <motion.h2
            className='text-6xl font-bold mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Work Cleverly
          </motion.h2>
          <motion.p
            className='text-xl mb-8 max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming business productivity with cutting-edge AI solutions
            designed to empower organizations and enhance efficiency.
          </motion.p>
          <motion.a
            href='#contact'
            className='bg-gray-900 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-800 inline-flex items-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get Started <ChevronRight className='ml-2' />
          </motion.a>
        </section>

        <section id='offerings' className=' py-20 px-10'>
          <div className='container mx-auto px-4'>
            <h2 className='text-4xl font-bold mb-12 text-center'>
              Our Core Offerings
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='bg-gray-900 text-slate-200 p-6 rounded-lg'
              >
                <BarChart className='w-12 h-12 mb-4 text-white' />
                <h3 className='text-2xl font-semibold mb-4'>InsightGenie</h3>
                <p>
                  Unlock powerful data insights with InsightGenie. Transform
                  natural language queries into actionable insights and dynamic
                  visualizations.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='bg-gray-900 text-slate-200 p-6 rounded-lg'
              >
                <Database className='w-12 h-12 mb-4 text-green-500 text-white' />
                <h3 className='text-2xl font-semibold mb-4'>
                  AI-Powered Knowledge Management
                </h3>
                <p>
                  Enhance collaboration and speed up decision-making with our
                  AI-driven knowledge management platform.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='bg-gray-900 text-slate-200 p-6 rounded-lg'
              >
                <FileText className='w-12 h-12 mb-4 text-purple-500 text-white' />
                <h3 className='text-2xl font-semibold mb-4'>
                  Automated Document Processing
                </h3>
                <p>
                  Optimize document handling with AI-powered automation. Handle
                  data extraction, classification, and processing with ease.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* <section id="why-us" className="py-30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Why WorkCleverly.ai?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Increase Efficiency</h3>
                <p>Through task automation</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Enhance Decision-Making</h3>
                <p>With accurate, fast insights</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Improve Productivity</h3>
                <p>By simplifying complex processes</p>
              </div>
            </div>
          </div>
        </section> */}

        <section id='contact' className='bg-slate-100 py-20'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-4xl font-bold mb-8'>Ready to Work Cleverly?</h2>
            <p className='mb-8 max-w-2xl mx-auto'>
              Whether you need advanced data analytics, efficient document
              processing, or improved knowledge management, WorkCleverly.ai
              helps you work smarter and achieve your goals.
            </p>
            <a
              href='#'
              className='text-white bg-gray-900 px-slate-900 py-slate-50 rounded-md text-lg font-semibold hover:bg-slate-800 p-4'
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </main>

      <footer className='bg-black text-white py-8'>
        <div className='container mx-auto px-4 text-center'>
          <p>&copy; 2024 WorkCleverly.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
