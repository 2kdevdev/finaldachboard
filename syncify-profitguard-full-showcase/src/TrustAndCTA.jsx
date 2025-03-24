
import React from 'react';

export default function TrustAndCTA() {
  return (
    <section className="bg-black text-white py-14 px-6 text-center border-t border-gray-800">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Trusted Performance. Real Results.</h2>
        <p className="text-gray-400 mb-6">
          Strategy metrics validated with industry-standard tools. QuantAnalyzer review available upon request.
        </p>
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <span className="bg-gray-800 px-4 py-2 rounded-full text-sm">Verified in QuantAnalyzer</span>
          <span className="bg-gray-800 px-4 py-2 rounded-full text-sm">Institutional Ready</span>
          <span className="bg-gray-800 px-4 py-2 rounded-full text-sm">Real Historical Execution</span>
        </div>
        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
          Request Licensing Info
        </button>
      </div>
    </section>
  );
}
