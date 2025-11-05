"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Building, Home, LandPlot, MapPin, IndianRupee } from "lucide-react";

const totalSteps = 4;

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const progress = (step / totalSteps) * 100;

  const nextStep = () => setStep((prev) => (prev < totalSteps ? prev + 1 : prev));
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-10rem)] py-12">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          {step > 1 && (
            <Button variant="ghost" size="sm" onClick={prevStep} className="absolute top-4 left-4 flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          )}
          <CardTitle className="font-headline text-center">Tell us about your home</CardTitle>
          <CardDescription className="text-center">This will help us personalize your recommendations.</CardDescription>
          <Progress value={progress} className="w-full mt-4" />
        </CardHeader>
        <CardContent>
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
        </CardContent>
        <CardFooter>
          {step < totalSteps ? (
            <Button onClick={nextStep} className="w-full">Next</Button>
          ) : (
            <Button className="w-full">Finish & See Ideas</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

function Step1() {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-lg text-center">What type of home do you own?</h3>
      <RadioGroup defaultValue="apartment" className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Label htmlFor="apartment" className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
          <RadioGroupItem value="apartment" id="apartment" className="sr-only" />
          <Building className="mb-3 h-8 w-8" />
          Apartment / Flat
        </Label>
        <Label htmlFor="villa" className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
          <RadioGroupItem value="villa" id="villa" className="sr-only" />
          <Home className="mb-3 h-8 w-8" />
          Independent House / Villa
        </Label>
        <Label htmlFor="rowhouse" className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
          <RadioGroupItem value="rowhouse" id="rowhouse" className="sr-only" />
          <Building className="mb-3 h-8 w-8" />
          Row House
        </Label>
        <Label htmlFor="plot" className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
          <RadioGroupItem value="plot" id="plot" className="sr-only" />
          <LandPlot className="mb-3 h-8 w-8" />
          Independent Plot
        </Label>
      </RadioGroup>
    </div>
  );
}

function Step2() {
  return (
    <div className="space-y-6">
      <h3 className="font-semibold mb-4 text-lg text-center">Property Location & Size</h3>
      <div className="space-y-2">
        <Label htmlFor="location" className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Location (City)</Label>
        <Input id="location" placeholder="e.g., Mumbai, Pune, Bangalore" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="size">Property Size (in sq. ft.)</Label>
        <Input id="size" type="number" placeholder="e.g., 1200" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="bhk">Configuration (BHK)</Label>
        <Input id="bhk" placeholder="e.g., 2 BHK" />
      </div>
    </div>
  );
}

function Step3() {
    return (
        <div className="space-y-6">
            <h3 className="font-semibold mb-4 text-lg text-center">Your Budget & Goals</h3>
            <div className="space-y-4">
                <Label htmlFor="budget" className="flex items-center gap-2"><IndianRupee className="h-4 w-4"/>What's your approximate budget?</Label>
                <RadioGroup defaultValue="medium" className="grid grid-cols-3 gap-4">
                    <div>
                        <RadioGroupItem value="low" id="low" className="peer sr-only" />
                        <Label htmlFor="low" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                        Below ₹1L
                        </Label>
                    </div>
                    <div>
                        <RadioGroupItem value="medium" id="medium" className="peer sr-only" />
                        <Label htmlFor="medium" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                        ₹1L - ₹5L
                        </Label>
                    </div>
                    <div>
                        <RadioGroupItem value="high" id="high" className="peer sr-only" />
                        <Label htmlFor="high" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                        ₹5L+
                        </Label>
                    </div>
                </RadioGroup>
            </div>
             <div className="space-y-4">
                <Label>What is your primary goal?</Label>
                <RadioGroup defaultValue="resale" className="grid grid-cols-2 gap-4">
                    <Label htmlFor="resale" className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                        <RadioGroupItem value="resale" id="resale" className="sr-only" />
                        Increase Resale Value
                    </Label>
                    <Label htmlFor="comfort" className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                        <RadioGroupItem value="comfort" id="comfort" className="sr-only" />
                        Improve Comfort & Living
                    </Label>
                </RadioGroup>
            </div>
        </div>
    );
}

function Step4() {
    return(
        <div className="text-center space-y-4 py-8">
            <h3 className="font-semibold text-2xl font-headline">You're all set!</h3>
            <p className="text-muted-foreground">We're now ready to generate personalized home improvement ideas just for you.</p>
            <p>Click the button below to see your tailored recommendations.</p>
        </div>
    );
}
