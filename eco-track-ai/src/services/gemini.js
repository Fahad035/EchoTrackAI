import { GoogleGenerativeAI } from "@google/generative-ai";

const PRIMARY_MODEL = "gemini-2.5-flash";
const FALLBACK_MODEL = "gemini-2.5-flash-lite";

const buildPrompt = (carbonScore, carKm, electricityUnits, diet) => `
You are an AI Sustainability Coach.

User Data:

Car Travel: ${carKm} km
Electricity: ${electricityUnits} units
Diet: ${diet}

Total Carbon Footprint:
${carbonScore} kg CO₂

Return ONLY in this format:

SUSTAINABILITY SCORE:
[number out of 100]

MAIN EMISSION SOURCE:
[max contributor]

TOP 3 RECOMMENDATIONS:
• recommendation 1
• recommendation 2
• recommendation 3

ESTIMATED REDUCTION:
[number] kg CO₂/month

SUGGESTED GOAL:
[target footprint]

Keep response under 200 words.
Do not use headings like analysis, explanation, conclusion.
`;

const generateAdviceWithModel = async (genAI, modelName, prompt) => {
  const model = genAI.getGenerativeModel({ model: modelName });
  const result = await model.generateContent(prompt);
  return result.response.text().trim();
};

export const getCarbonAdvice = async (
  carbonScore,
  carKm,
  electricityUnits,
  diet
) => {

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY?.trim();

  if (!apiKey) {
    return "Gemini AI is not configured. Add VITE_GEMINI_API_KEY to your .env file and restart the Vite dev server.";
  }

  try {

    const genAI = new GoogleGenerativeAI(apiKey);

    const prompt = buildPrompt(carbonScore, carKm, electricityUnits, diet);
    let advice = "";

    try {
      advice = await generateAdviceWithModel(genAI, PRIMARY_MODEL, prompt);
    } catch (primaryError) {
      const status = primaryError?.status || primaryError?.response?.status;

      if (status === 503 || status === 429) {
        advice = await generateAdviceWithModel(genAI, FALLBACK_MODEL, prompt);
      } else {
        throw primaryError;
      }
    }

    if (!advice) {
      return "Gemini returned an empty response. Check your API key and model access, then try again.";
    }

    return advice;

  } catch (error) {

    console.error("Gemini API error:", error);

    return error?.message
      ? `Unable to generate AI insights: ${error.message}`
      : "Unable to generate AI insights. Check your Gemini API key and try again.";

  }
};