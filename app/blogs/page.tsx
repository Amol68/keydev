import React from 'react'

const page = () => {
  return (
     <div className="min-h-screen bg-black text-white px-8 py-14">
      <div className="max-w-5xl mx-auto">

        <p className="tracking-[0. өм4em] text-gray-500 text-sm mb-6">
          WRITING
        </p>

        <h1 className="text-3xl font-serif mb-20">Blog</h1>

        {/* Featured Blog Card */}
        <div className="border border-neutral-800 rounded-2xl p-6 hover:bg-neutral-900 transition duration-300">
          
          <p className="text-sm text-gray-500 mb-4">
            FEATURED ARTICLE · 8 min read
          </p>

          <h2 className="text-xl font-semibold mb-4">
            Bitcoin&apos;s Consensus
          </h2>

          <p className="text-gray-400 text-md leading-relaxed mb-6">
            An overview of How Bitcoin’s Consensus Mechanism got inspired by Adam Back’s HashCash.
          </p>

          <a href='https://medium.com/@amolskadam2003/how-bitcoins-consensus-mechanism-got-inspired-by-adam-back-s-hashcash-80e267bc614d' className="text-white underline text-xs underline-offset-4">
            Read Article →
          </a>

        </div>

        {/* Coming Soon Section */}
        <div className="mt-24 text-center text-gray-600">
          <p>More technical deep-dives coming soon.</p>
        </div>

      </div>
    </div>
  )
}

export default page