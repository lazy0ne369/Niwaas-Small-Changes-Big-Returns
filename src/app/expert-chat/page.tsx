"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { Bot, User, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getAIAnswer, type State } from './actions';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" disabled={pending}>
      {pending ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
      <span className="sr-only">Send</span>
    </Button>
  );
}

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export default function ExpertChatPage() {
    const initialState: State | undefined = undefined;
    const [state, formAction] = useFormState(getAIAnswer, initialState);
    const formRef = useRef<HTMLFormElement>(null);
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        if (state?.question) {
            const newMessages: Message[] = [];
            newMessages.push({ role: 'user', content: state.question });

            if (state.answer) {
                newMessages.push({ role: 'assistant', content: state.answer });
            }
            if (state.error) {
                newMessages.push({ role: 'assistant', content: state.error });
            }
            setMessages(prev => [...prev, ...newMessages]);
            formRef.current?.reset();
        }
    }, [state]);

  return (
    <div className="container py-12">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline">
            <Bot className="h-8 w-8 text-primary" />
            AI Expert Chat
          </CardTitle>
          <CardDescription>
            Ask your home improvement questions and get instant advice from our AI expert, trained on Indian home contexts.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <ScrollArea className="h-[400px] w-full pr-4">
                <div className="space-y-4">
                    {messages.map((message, index) => (
                        <div key={index} className={cn("flex items-start gap-4", message.role === 'user' ? 'justify-end' : 'justify-start')}>
                            {message.role === 'assistant' && (
                                <Avatar>
                                    <AvatarFallback><Bot /></AvatarFallback>
                                </Avatar>
                            )}
                            <div className={cn("rounded-lg p-3 max-w-[75%]", message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted')}>
                               <p className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>{message.content}</p>
                            </div>
                            {message.role === 'user' && (
                                <Avatar>
                                    <AvatarFallback><User /></AvatarFallback>
                                </Avatar>
                            )}
                        </div>
                    ))}
                    {messages.length === 0 && (
                        <div className="text-center text-muted-foreground p-8">
                            <p>No messages yet. Ask a question to start the conversation!</p>
                            <p className="text-sm mt-2">e.g., "How can I increase my home's resale value in Pune under ₹2L?"</p>
                        </div>
                    )}
                </div>
            </ScrollArea>
        </CardContent>
        <CardFooter>
          <form ref={formRef} action={formAction} className="w-full flex items-start gap-2">
            <Textarea
              name="question"
              placeholder="Type your question here..."
              className="min-h-0 flex-1 resize-none"
              rows={2}
              required
            />
            <SubmitButton />
             {state?.fieldErrors?.question && (
                <p className="text-sm text-destructive mt-1">{state.fieldErrors.question.join(', ')}</p>
             )}
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
