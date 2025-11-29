import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { gpa } = await request.json();
    
    const apiKey = process.env.GROK_API_KEY;
    
    if (!apiKey) {
      // Fallback to static response if no API key
      const fallbackResponses = [
        "nigga you missed perfection cuz you was in the trenches ratioing some broke boy",
        "1.33 DO loading, yo momma already changed the locks and the wifi password",
        "your transcript did a pump.fun launch: 1000x then straight to zero",
        "3.69 nice GPA, still not pulling bitches",
        "prof curved down just to spite you specifically",
        "aped 24 credits with 1000x leverage, liquidated week 2",
        "group project carried by one girl and you still pulled 1.8, criminal activity",
        "graduated 144 credits but yo soul still stuck in that 8AM lecture",
        "0.69 nice GPA, still getting cooked in every group chat",
        "26 credits again? you don't hate college, you hate yourself"
      ];
      
      return NextResponse.json({
        roast: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
      });
    }

    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'grok-4',
        messages: [
          {
            role: 'system',
            content: 'You are a savage black chill guy from 2025 Crypto Twitter. You roast with zero filter, use "nigga" naturally, include degen slang, pump.fun references, and ratio energy. Max 100 words.'
          },
          {
            role: 'user',
            content: `Roast this random GPA ${gpa} like a black chill guy from 2025 Crypto Twitter. Full savage, zero filter, include 'nigga' naturally, degen slang, pump.fun references, ratio energy. Max 100 words.`
          }
        ],
        max_tokens: 150,
        temperature: 0.9,
      }),
    });

    if (!response.ok) {
      throw new Error(`Grok API error: ${response.status}`);
    }

    const data = await response.json();
    const roast = data.choices[0]?.message?.content || "nigga you so cooked even the API failed";

    return NextResponse.json({ roast });

  } catch (error) {
    console.error('Error in prediction API:', error);
    
    // Fallback responses in case of API failure
    const fallbackResponses = [
      "nigga you missed perfection cuz you was in the trenches ratioing some broke boy",
      "1.33 DO loading, yo momma already changed the locks and the wifi password",
      "your transcript did a pump.fun launch: 1000x then straight to zero",
      "3.69 nice GPA, still not pulling bitches",
      "prof curved down just to spite you specifically"
    ];
    
    return NextResponse.json({
      roast: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
    });
  }
}