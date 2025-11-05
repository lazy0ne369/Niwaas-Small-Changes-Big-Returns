"use server";

import { answerHomeImprovementQuestion, AnswerHomeImprovementQuestionInput } from '@/ai/flows/answer-home-improvement-questions';
import { z } from 'zod';

const AskQuestionSchema = z.object({
  question: z.string().min(10, { message: 'Please ask a more detailed question (at least 10 characters).' }),
});

export type State = {
  answer?: string;
  error?: string;
  fieldErrors?: {
    question?: string[];
  };
  question?: string;
}

export async function getAIAnswer(prevState: State | undefined, formData: FormData): Promise<State> {
  const question = formData.get('question');
  const validatedFields = AskQuestionSchema.safeParse({ question });

  if (!validatedFields.success) {
    return {
      fieldErrors: validatedFields.error.flatten().fieldErrors,
      error: 'Validation failed.',
      question: typeof question === 'string' ? question : '',
    };
  }
  
  const questionStr = validatedFields.data.question;

  try {
    const input: AnswerHomeImprovementQuestionInput = {
      question: questionStr,
    };
    const result = await answerHomeImprovementQuestion(input);
    return { answer: result.answer, question: questionStr };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { error: `An error occurred while getting an answer: ${errorMessage}`, question: questionStr };
  }
}
