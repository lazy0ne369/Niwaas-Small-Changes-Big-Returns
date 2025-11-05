'use server';

/**
 * @fileOverview An AI agent that answers questions about home improvement.
 *
 * - answerHomeImprovementQuestion - A function that answers home improvement questions.
 * - AnswerHomeImprovementQuestionInput - The input type for the answerHomeImprovementQuestion function.
 * - AnswerHomeImprovementQuestionOutput - The return type for the answerHomeImprovementQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerHomeImprovementQuestionInputSchema = z.object({
  question: z.string().describe('The home improvement question to answer.'),
});
export type AnswerHomeImprovementQuestionInput = z.infer<typeof AnswerHomeImprovementQuestionInputSchema>;

const AnswerHomeImprovementQuestionOutputSchema = z.object({
  answer: z.string().describe('The answer to the home improvement question.'),
});
export type AnswerHomeImprovementQuestionOutput = z.infer<typeof AnswerHomeImprovementQuestionOutputSchema>;

export async function answerHomeImprovementQuestion(
  input: AnswerHomeImprovementQuestionInput
): Promise<AnswerHomeImprovementQuestionOutput> {
  return answerHomeImprovementQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerHomeImprovementQuestionPrompt',
  input: {schema: AnswerHomeImprovementQuestionInputSchema},
  output: {schema: AnswerHomeImprovementQuestionOutputSchema},
  prompt: `You are an expert in home improvement, with a focus on the Indian middle-class homeowner. Answer the following question to the best of your ability:\n\nQuestion: {{{question}}}`,
});

const answerHomeImprovementQuestionFlow = ai.defineFlow(
  {
    name: 'answerHomeImprovementQuestionFlow',
    inputSchema: AnswerHomeImprovementQuestionInputSchema,
    outputSchema: AnswerHomeImprovementQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
