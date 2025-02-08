'use client'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import AccordionMeanings from '../../../components/AccordionMeanings'
import planets from '../../../planets'
import zodiacSigns from '../../../zodiacsigns'

export default function ZodiacSignPage() {
  const params = useParams();
  const sign = zodiacSigns[params.slug];

  const zodiacSymbols = {
    aries: '♈', taurus: '♉', gemini: '♊', cancer: '♋',
    leo: '♌', virgo: '♍', libra: '♎', scorpio: '♏',
    sagittarius: '♐', capricorn: '♑', aquarius: '♒', pisces: '♓'
  };

  const elementColors = {
    Fire: 'bg-primary/20 text-primary',
    Earth: 'bg-success/20 text-primary',
    Air: 'bg-warning/20 text-primary',
    Water: 'bg-info/20 text-primary'
  };

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="card bg-base-100 mb-4">
          <figure className="p-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-sm"></div>
              <Image 
                src={sign.image} 
                width={200} 
                height={200} 
                alt={sign.name}
                className="rounded-full mask mask-circle shadow-lg shadow-primary/10 hover:scale-105 transition-all duration-300 relative z-10"
              />
            </div>
          </figure>
          <div className="card-body items-center">
            <div className="flex justify-center items-center gap-4 mb-2">
              <span className="text-4xl text-primary">{zodiacSymbols[params.slug]}</span>
              <h1 className="card-title font-extrabold text-4xl lg:text-6xl text-primary">{sign.name}</h1>
            </div>
            <p className="font-semibold text-xl text-center text-primary/80">{sign.dateRange}</p>
            
            <div className="flex flex-wrap justify-center gap-2 my-4">
              <div className={`badge ${elementColors[sign.element]} badge-lg`}>
                {sign.element} Element
              </div>
              <div className="badge badge-outline badge-lg text-primary border-primary/30">
                {sign.quality} Quality
              </div>
              <div className="badge badge-outline badge-lg text-primary border-primary/30">
                Ruled by {typeof(sign.rulingPlanet) === 'string' ? sign.rulingPlanet : `${sign.rulingPlanet[0]} & ${sign.rulingPlanet[1]}`}
              </div>
            </div>
            
            <p className="text-neutral text-center max-w-2xl">{sign.descriptionShort}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Characteristics Card */}
          <div className="card h-fit bg-base-100 text-neutral shadow-xl border border-primary/20">
            <div className="card-body justify-center items-center">
              <h2 className="card-title text-3xl text-center mb-6 text-primary">
                {sign.name} Characteristics
              </h2>
              
              <p className="text-neutral text-sm text-justify m-2">{sign.descriptionLong}</p>

              <div className="grid md:grid-cols-3 gap-2 text-sm">
                {[
                  { title: 'Strengths', items: sign.strengths },
                  { title: 'Weaknesses', items: sign.weaknesses },
                  { title: 'Likes', items: sign.likes },
                  { title: 'Dislikes', items: sign.dislikes },
                  { title: 'Compatible With', items: sign.compatibility }
                ].map((category) => (
                  <div key={category.title} className="card bg-base-200">
                    <div className="card-body p-3">
                      <h3 className="card-title text-lg text-primary">{category.title}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item, index) => (
                          <li key={index} className="text-neutral flex items-center gap-2">
                            <span className="text-primary">☙</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Accordion Section */}
          <div className="card bg-base-100 text-base-content shadow-xl border border-primary/20">
            <div className="card-body">
              <AccordionMeanings sign={sign} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}