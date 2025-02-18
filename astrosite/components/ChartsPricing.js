import React from 'react';

const ChartPricing = () => {
  const charts = [
    {
      title: "Birth Chart Report",
      description: "100-page comprehensive and detailed analysis of your birth chart, including signs, planets, houses, aspects, and life topics",
      originalPrice: 50.00,
      features: [
        "Complete personality analysis",
        "Zodiac signs, houses, and aspects",
        "Detailed interpretations",
        "Life topic discussion",
        "Career and relationship insights"
      ]
    },
    {
      title: "Transit Report",
      description: "100-page analysis of current planetary influences for your selected date",
      originalPrice: 30.00,
      features: [
        "Planets in transit vs. your birth chart",
        "Zodiac signs, houses, and aspects",
        "Detailed interpretations",
        "Key transit periods",
        "Personal growth opportunities"
      ]
    },
    {
      title: "Synastry Report",
      description: "100-page detailed relationship analysis",
      originalPrice: 30.00,
      features: [
        "Relationship compatibility and chemistry",
        "Sign, house, and planet interpretations",
        "Detailed analysis of all aspects",
        "Strengths and challenges",
        "Communication and understanding",
      ]
    },
    {
      title: "Annual Profections Report",
      description: "50-page analysis of how your birth chart placements will manifest this year and the most important influences to expect",
      originalPrice: 20.00,
      features: [
        "Activated house for the year",
        "Activated sign for the year",
        "Ruling planet of the year",
        "Key aspects and full interpretations",
        "How your birth chart will manifest",
      ]
    },
    {
      title: "Traditional Lots Report",
      description: "50-page analysis of the Seven Traditional Lots and how they manifest as life topics",
      originalPrice: 20.00,
      features: [
        "Lot of Fortune (material fortune and luck)",
        "Lot of Spirit (mind and purpose)",
        "Lot of Eros (love and romance)",
        "Lot of Necessity (fate and challenges)",
        "Lot of Courage (bravery and action)",
        "Lot of Victory (success and achievement)",
        "Lot of Nemesis (potential downfalls)",
        "Detailed interpretations for all",
      ]
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Professional Astrology Charts</h2>
        <div className="w-fit alert alert-info shadow-lg max-w-xl mx-auto">
          <div className='flex flex-row justify-center items-center text-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-neutral flex-shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div className="mx-2 flex font-semibold text-neutral text-center justify-center items-center">
              <span className='font-bold mx-2'>DISCOUNT:</span> use code "ASTRO" for 50% off all charts
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-start gap-6">
        {charts.map((chart, index) => (
          <div key={index} className="card border-2 border-primary/30 flex flex-col justify-center items-start bg-base-100 shadow-xl max-w-sm">
            <div className="card-body m-2 flex flex-col text-center items-center">
              <h2 className="card-title font-bold text-neutral text-center">{chart.title}</h2>
              <p className="text-sm font-semibold text-primary/80 text-center max-w-xs mb-4">{chart.description}</p>
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">
                  ${(chart.originalPrice * 0.5).toFixed(2)}
                </span>
                <span className="text-sm line-through ml-2 opacity-50">
                  ${chart.originalPrice}
                </span>
              </div>
              <ul className="space-y-2 mb-4">
                {chart.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-2 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="card-actions justify-center">
                <button className="btn btn-primary text-neutral">Purchase Report</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartPricing;
