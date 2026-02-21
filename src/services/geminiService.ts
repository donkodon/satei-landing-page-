import { GoogleGenAI, Type } from "@google/genai";

const getAiClient = () => {
    // In a real production app, this should be handled via a backend proxy to hide the key.
    // For this frontend-only demo, we use the env variable directly.
    return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const getAiAppraisalEstimate = async (
    brand: string,
    item: string,
    condition: string
): Promise<{ minPrice: string; maxPrice: string; reason: string }> => {
    const ai = getAiClient();
    
    const prompt = `
    あなたは高級ブランド品の買取査定のプロフェッショナルです。
    以下の商品の現在の日本国内市場における買取価格の概算（レンジ）と、その理由を簡潔に教えてください。
    
    ブランド: ${brand}
    アイテム名: ${item}
    状態: ${condition}
    
    出力はJSON形式のみで、以下のスキーマに従ってください。
    価格は「円」を含めず、数値の文字列（例: "50,000"）にしてください。
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        minPrice: { type: Type.STRING, description: "Minimum estimated purchase price in JPY format" },
                        maxPrice: { type: Type.STRING, description: "Maximum estimated purchase price in JPY format" },
                        reason: { type: Type.STRING, description: "Brief explanation of the valuation based on market trends" }
                    },
                    required: ["minPrice", "maxPrice", "reason"]
                }
            }
        });

        const text = response.text;
        if (!text) throw new Error("No response from AI");
        return JSON.parse(text);

    } catch (error) {
        console.error("AI Appraisal Error:", error);
        return {
            minPrice: "---",
            maxPrice: "---",
            reason: "現在アクセスが集中しているため、概算を算出できませんでした。LINE査定をご利用ください。"
        };
    }
};