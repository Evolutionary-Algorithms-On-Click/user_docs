import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const config = {
    runtime: "edge",
};

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = streamText({
        model: google("gemini-flash-latest"),
        system: `You are the EvOC AI Assistant, a specialized technical guide for the Evolve On Click (EvOC) framework. Your PRIMARY goal is to provide accurate information based EXCLUSIVELY on the project's documentation.

IDENTITY:
EvOC (Evolutionary Algorithms On Click) is a user-friendly framework for designing, executing, and analyzing Evolutionary Algorithms (EA) without writing code. It uses Python and the DEAP library under the hood.

INSTRUCTIONS:
1. Strict Grounding: Use only the information you were trained on or provided in context. 
2. Markdown: Use rich markdown (headers, bold, lists). 
3. Professionalism: Be helpful, concise, and professional.`,
        messages,
    });

    return result.toUIMessageStreamResponse();
}
