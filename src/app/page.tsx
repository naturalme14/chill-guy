'use client';

import { useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<{ text: string; gpa: string; img: string } | null>(null);
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);

  const loadingTexts = [
    "ruining your future...",
    "calculating how rekt you are...",
    "black chill guy is judging you...",
    "sealing your fate fr fr...",
    "loading PVP skill issue...",
    "aped into finals szn...",
    "consulting the crypto gods...",
    "checking how cooked you really are...",
    "analyzing your L portfolio...",
    "finalizing your academic rug pull...",
    "contacting the degen spirits...",
    "preparing your academic obituary..."
  ];

  const staticResults = [
    { text: "nigga you missed perfection cuz you was in the trenches ratioing some broke boy", gpa: "3.99", img: "/chill_guy_1.png" },
    { text: "4.00 unfazed chad, you study while the rest of us niggas farm red candles", gpa: "4.00", img: "/chill_guy_2.png" },
    { text: "3.75 midcurve ass nigga, have fun staying average", gpa: "3.75", img: "/chill_guy_3.png" },
    { text: "nigga your GPA look like my portfolio after discovering a new dog coin", gpa: "1.67", img: "/chill_guy_4.png" },
    { text: "1.33 DO loading, yo momma already changed the locks and the wifi password", gpa: "1.33", img: "/chill_guy_5.png" },
    { text: "0.69 nice GPA, still getting cooked in every group chat", gpa: "0.69", img: "/chill_guy_6.png" },
    { text: "aped 24 credits with 1000x leverage, liquidated week 2", gpa: "1.00", img: "/chill_guy_7.png" },
    { text: "your transcript did a pump.fun launch: 1000x then straight to zero", gpa: "0.42", img: "/chill_guy_8.png" },
    { text: "prof curved down just to spite you specifically", gpa: "2.17", img: "/chill_guy_9.png" },
    { text: "bagholding F's heavier than a nigga who went all in on $KEKI", gpa: "1.80", img: "/chill_guy_10.png" },
    { text: "you not failing, you the final boss of academic rug pulls", gpa: "0.00", img: "/chill_guy_11.png" },
    { text: "3.69 nice GPA, still not pulling bitches", gpa: "3.69", img: "/chill_guy_12.png" },
    { text: "graduated 144 credits but yo soul still stuck in that 8AM lecture", gpa: "SKS 144", img: "/chill_guy_1.png" },
    { text: "group project carried by one girl and you still pulled 1.8, criminal activity", gpa: "1.80", img: "/chill_guy_2.png" },
    { text: "26 credits again? you don't hate college, you hate yourself", gpa: "26 SKS", img: "/chill_guy_3.png" },
    { text: "prof said no remedial — hardest rug since my nigga Do Kwon", gpa: "2.50", img: "/chill_guy_4.png" },
    { text: "your GPA so cooked it needs a whole CTO and community takeover", gpa: "0.50", img: "/chill_guy_5.png" },
    { text: "2.30 but you tell the fam it's a 3.8 in \"the Asian system\" classic cope", gpa: "2.30", img: "/chill_guy_6.png" },
    { text: "4.20 high on copium and monster energy, not grades", gpa: "4.20", img: "/chill_guy_7.png" },
    { text: "3.69 nice again, still getting dogwalked by calc 2", gpa: "3.69", img: "/chill_guy_8.png" },
    { text: "nigga you deeper in the trenches than a Solana sniper bot", gpa: "2.50", img: "/chill_guy_9.png" },
    { text: "got absolutely fucked by one pop quiz, -97% in 0.2 seconds", gpa: "2.17", img: "/chill_guy_10.png" },
    { text: "PVP skill issue so bad the prof curved DOWN to punish you", gpa: "1.50", img: "/chill_guy_11.png" },
    { text: "straight C's, tell yo momma you \"rounded up\" lil bro", gpa: "3.00", img: "/chill_guy_12.png" },
    { text: "bare minimum merchant, nigga still coping with that B- like it's an A", gpa: "3.50", img: "/chill_guy_1.png" },
    { text: "exit liquidity for the whole class, thanks for carrying these niggas king", gpa: "3.00", img: "/chill_guy_2.png" },
    { text: "paper hands ass nigga, sold the notes before the exam even dropped", gpa: "2.80", img: "/chill_guy_3.png" },
    { text: "1.90 bagholding F's heavier than a nigga who YOLO'd rent on $BILLY", gpa: "1.90", img: "/chill_guy_4.png" },
    { text: "you probably pass… maybe. Or maybe you the reason the curve got rugged", gpa: "?", img: "/chill_guy_5.png" },
    { text: "3.98 lost 0.02 cuz you was live-tweeting instead of listening, dumbass", gpa: "3.98", img: "/chill_guy_6.png" },
    { text: "your parents opened the app and instantly started speaking in tongues", gpa: "0.00", img: "/chill_guy_7.png" },
    { text: "nigga this ain't even a GPA this is a shitcoin market cap", gpa: "0.42", img: "/chill_guy_8.png" },
    { text: "3.75 midcurve ass nigga, have fun staying average while I print", gpa: "3.75", img: "/chill_guy_9.png" },
    { text: "aped the curve early like a Solana JPEG, still got rugged by the final", gpa: "3.87", img: "/chill_guy_10.png" },
    { text: "professional midcurve degen. Have fun staying average", gpa: "3.75", img: "/chill_guy_11.png" },
    { text: "bare minimum merchant, quietly farming C's while CT calls you poor", gpa: "3.50", img: "/chill_guy_12.png" },
    { text: "average enjoyer. Your parents still think this is \"pretty good\"", gpa: "3.33", img: "/chill_guy_1.png" },
    { text: "deep in the trenches, treating 2 a.m. Red Bull like leverage", gpa: "2.50", img: "/chill_guy_2.png" },
    { text: "fully rekt by one pop quiz. Your GPA just did a -95% candle", gpa: "2.17", img: "/chill_guy_3.png" },
    { text: "PVP skill issue so bad even your calculator ghosted you", gpa: "1.50", img: "/chill_guy_4.png" },
    { text: "DO incoming, your parents already changed the Wi-Fi password", gpa: "1.33", img: "/chill_guy_5.png" },
    { text: "nice GPA, still failing with swagger", gpa: "0.69", img: "/chill_guy_6.png" },
    { text: "life path number of a shitcoiner who YOLO'd rent money", gpa: "0.42", img: "/chill_guy_7.png" },
    { text: "not even cooking, you're the burnt pan", gpa: "0.00", img: "/chill_guy_8.png" },
    { text: "144 credits completed – graduated, but at the cost of your soul", gpa: "SKS 144", img: "/chill_guy_9.png" },
    { text: "GPA 3.98 – lost 0.02 because you were ratioing someone on CT", gpa: "3.98", img: "/chill_guy_10.png" },
    { text: "Registered 26 credits again? Bro you're not degen, you're suicidal", gpa: "26 SKS", img: "/chill_guy_11.png" },
    { text: "Your GPA is so cooked it needs a CTO to revive it", gpa: "2.00", img: "/chill_guy_12.png" },
    { text: "2.3 but you tell your parents it's a 3.7 in the European system", gpa: "2.30", img: "/chill_guy_1.png" },
    { text: "You didn't choose the DO life, the DO life chose you", gpa: "1.00", img: "/chill_guy_2.png" },
    { text: "high GPA? Nah, just baked in degen treasury vibes", gpa: "4.20", img: "/chill_guy_3.png" },
    { text: "life-changing L today, boring infrastructure tomorrow", gpa: "0.42", img: "/chill_guy_4.png" },
    { text: "thirst traps for extra credit? PVP skill issue fr", gpa: "2.00", img: "/chill_guy_5.png" },
    { text: "quietly shipping Bs while CT farms engagement", gpa: "3.20", img: "/chill_guy_6.png" },
    { text: "from cypherpunk dreams to remedial hell, we rugged", gpa: "1.50", img: "/chill_guy_7.png" },
    { text: "nice try, but failing with style, degen entertainment", gpa: "0.69", img: "/chill_guy_8.png" },
    { text: "one decimal from god mode, stay delulu dumb money", gpa: "3.99", img: "/chill_guy_9.png" },
    { text: "close but NGMI, stay delulu", gpa: "3.89", img: "/chill_guy_10.png" },
    { text: "aped early like a JPEG, but finals rugged you fr", gpa: "3.89", img: "/chill_guy_11.png" },
    { text: "midcurve degen dream, have fun staying poor on that B+", gpa: "3.75", img: "/chill_guy_12.png" },
    { text: "bare minimum merchant, exit liquidity for the curve", gpa: "3.50", img: "/chill_guy_1.png" },
    { text: "average bagholder, wen lambo skripsi? NGMI szn", gpa: "3.33", img: "/chill_guy_2.png" },
    { text: "straight C vibes, quietly obsessed with coping", gpa: "3.00", img: "/chill_guy_3.png" },
    { text: "paper hands energy, sold your study notes too early", gpa: "2.75", img: "/chill_guy_4.png" },
    { text: "deep in the trenches every exam, peak dumb money", gpa: "2.50", img: "/chill_guy_5.png" },
    { text: "fully rekt by pop quiz, FOMO candle incoming?", gpa: "2.17", img: "/chill_guy_6.png" },
    { text: "bagholder of bad habits, revolution got rugged", gpa: "1.80", img: "/chill_guy_7.png" },
    { text: "DO incoming, there is no cap on this L", gpa: "1.33", img: "/chill_guy_8.png" },
    { text: "aped 24 credits, got nuked faster than a memecoin", gpa: "1.00", img: "/chill_guy_9.png" },
    { text: "nice, still failing", gpa: "0.69", img: "/chill_guy_10.png" },
    { text: "zero edge except timing, history rhymes with regret", gpa: "0.00", img: "/chill_guy_11.png" },
    { text: "SKS 144 overload — graduated? Nah, just yield farming excuses", gpa: "SKS 144", img: "/chill_guy_12.png" },
    { text: "You probably pass… maybe, or get max extracted by profs", gpa: "?", img: "/chill_guy_1.png" },
    { text: "GPA 3.99 — 0.01 short of printing, normies asking 'wen A?'", gpa: "3.99", img: "/chill_guy_2.png" },
    { text: "KRS 24 again? Degen behavior, treat it like high-risk szn", gpa: "24 SKS", img: "/chill_guy_3.png" },
    { text: "Prof: 'No remedial' → classic rug", gpa: "2.00", img: "/chill_guy_4.png" }
  ];

  const handleSealFate = async () => {
    setIsLoading(true);
    setShowResult(false);
    setLoadingTextIndex(0);

    // Start rotating loading texts
    const textInterval = setInterval(() => {
      setLoadingTextIndex(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    // Generate random GPA
    const gpaValues = [
      (Math.random() * 4.2).toFixed(2),
      "SKS 144", "DO", "26 SKS", "?"
    ];
    const randomGpa = gpaValues[Math.floor(Math.random() * gpaValues.length)];

    try {
      // Try to get dynamic result from API
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gpa: randomGpa })
      });

      if (response.ok) {
        const data = await response.json();
        setResult({
          text: data.roast,
          gpa: randomGpa,
          img: `/chill_guy_${Math.floor(Math.random() * 12) + 1}.png`
        });
      } else {
        // Fallback to static results
        const staticResult = staticResults[Math.floor(Math.random() * staticResults.length)];
        setResult(staticResult);
      }
    } catch (error) {
      // Fallback to static results
      const staticResult = staticResults[Math.floor(Math.random() * staticResults.length)];
      setResult(staticResult);
    }

    setTimeout(() => {
      clearInterval(textInterval);
      setIsLoading(false);
      setShowResult(true);
    }, 2500);
  };

  const handleShareToX = () => {
    if (!result) return;

    const text = `Grade Predictor just cooked my entire bloodline… "${result.text}" ${result.gpa} 💀 come get violated: ${window.location.href}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, '_blank');
  };

  const handleGenerateNew = () => {
    setShowResult(false);
    handleSealFate();
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
      {/* Landing Screen */}
      {!isLoading && !showResult && (
        <div className="text-center space-y-8 max-w-md mx-auto">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-wider">
            Grade Predictor
          </h1>
          <p className="text-xl md:text-2xl uppercase tracking-wide">
            click to find out how cooked you really are nigga
          </p>
          <button
            onClick={handleSealFate}
            className="bg-white text-black px-12 py-6 text-2xl md:text-3xl font-black uppercase tracking-wider hover:bg-gray-200 transition-colors transform hover:scale-105 transition-transform"
          >
            Seal My Fate
          </button>
        </div>
      )}

      {/* Loading Screen */}
      {isLoading && (
        <div className="text-center space-y-8 max-w-md mx-auto">
          <div className="animate-spin">
            <div className="w-24 h-24 border-8 border-white border-t-transparent rounded-full mx-auto"></div>
          </div>
          <p className="text-xl md:text-2xl uppercase tracking-wide animate-pulse">
            {loadingTexts[loadingTextIndex]}
          </p>
        </div>
      )}

      {/* Result Screen */}
      {showResult && result && (
        <div className="text-center space-y-6 max-w-md mx-auto">
          <p className="text-2xl md:text-3xl uppercase tracking-wide leading-tight">
            {result.text}
          </p>
          <div className="relative w-80 h-80 mx-auto">
            <img
              src={result.img}
              alt="Black Capybara Chill Guy"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
          <div className="text-6xl md:text-8xl font-black uppercase tracking-wider">
            {result.gpa}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGenerateNew}
              className="bg-white text-black px-8 py-4 text-xl font-black uppercase tracking-wider hover:bg-gray-200 transition-colors"
            >
              Generate New Fate
            </button>
            <button
              onClick={handleShareToX}
              className="bg-black border-2 border-white text-white px-8 py-4 text-xl font-black uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              Share to X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}