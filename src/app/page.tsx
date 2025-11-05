import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, Star, Building, IndianRupee, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const heroImage = PlaceHolderImages.find(p => p.id === "hero-1")!;
const kitchenImage = PlaceHolderImages.find(p => p.id === "kitchen-remodel")!;
const bathroomImage = PlaceHolderImages.find(p => p.id === "bathroom-upgrade")!;
const livingRoomImage = PlaceHolderImages.find(p => p.id === "living-room-makeover")!;
const successStoryImage = PlaceHolderImages.find(p => p.id === "success-story-1")!;

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Add Value to Your Indian Home
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Personalized home improvement insights to help you increase your property's market value.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/onboarding">
                    <Button size="lg">Get Started</Button>
                  </Link>
                  <Link href="/ideas">
                    <Button size="lg" variant="secondary">Browse Ideas</Button>
                  </Link>
                </div>
              </div>
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        {/* Featured Improvements Section */}
        <section id="ideas" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Improvements</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Upgrade Your Home, Upgrade Your Life</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore curated project ideas with proven ROI, tailored for Indian homes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
              <Card>
                <CardHeader>
                  <Image src={kitchenImage.imageUrl} alt={kitchenImage.description} data-ai-hint={kitchenImage.imageHint} width={600} height={400} className="rounded-t-lg object-cover aspect-video" />
                  <CardTitle className="pt-4">Budget-Friendly Kitchen Remodel</CardTitle>
                  <CardDescription>ROI: 15-20%</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Give your kitchen a modern look without breaking the bank. Focus on smart storage, new countertops, and efficient lighting.</p>
                </CardContent>
                <CardFooter>
                  <Link href="/ideas/kitchen-remodel" className="w-full">
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Image src={bathroomImage.imageUrl} alt={bathroomImage.description} data-ai-hint={bathroomImage.imageHint} width={600} height={400} className="rounded-t-lg object-cover aspect-video" />
                  <CardTitle className="pt-4">Mid-Range Bathroom Upgrade</CardTitle>
                  <CardDescription>ROI: 12-18%</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Transform your bathroom into a spa-like retreat with modern fixtures, better ventilation, and stylish tiles.</p>
                </CardContent>
                <CardFooter>
                   <Link href="/ideas/bathroom-upgrade" className="w-full">
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Image src={livingRoomImage.imageUrl} alt={livingRoomImage.description} data-ai-hint={livingRoomImage.imageHint} width={600} height={400} className="rounded-t-lg object-cover aspect-video" />
                  <CardTitle className="pt-4">Living Room & Balcony Makeover</CardTitle>
                  <CardDescription>ROI: 10-15%</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Create a welcoming and functional living space that connects seamlessly with your outdoor area. Focus on lighting and flexible furniture.</p>
                </CardContent>
                <CardFooter>
                   <Link href="/ideas/living-room-makeover" className="w-full">
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
             <div className="text-center mt-12">
                <Link href="/ideas">
                  <Button size="lg" variant="outline">Explore All Ideas <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </div>
          </div>
        </section>

        {/* AI Suggestions & Expert Chat Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Get Expert Advice Instantly</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our AI-powered expert chat can answer your toughest home improvement questions.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link href="/expert-chat">
                <Button size="lg" className="w-full">
                  <Bot className="mr-2 h-5 w-5" /> Ask Our AI Expert
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Success Story & Insights Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Success Story</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] font-headline">
                  From Drab to Fab in 3 Weeks
                </h2>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    <Star className="w-5 h-5 fill-primary" />
                    <Star className="w-5 h-5 fill-primary" />
                    <Star className="w-5 h-5 fill-primary" />
                    <Star className="w-5 h-5 fill-primary" />
                    <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">(4.0)</span>
                </div>
                 <blockquote className="text-lg italic text-muted-foreground">
                  "Niwaas Pro helped us identify the best upgrades for our Pune flat. The kitchen remodel not only made our home more beautiful but also increased its value by 12%!"
                </blockquote>
                <div className="font-semibold">Priya & Rohan, Pune</div>
                <Link href="/projects"
                    className="inline-flex items-center justify-center text-sm font-medium transition-colors text-primary hover:text-primary/80">
                  Explore Their Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Local Market Insights</div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Stay updated on property trends in your city.
                </p>
                <div className="w-full max-w-md">
                    <Card>
                        <CardHeader>
                            <CardTitle>Mumbai Property Trends</CardTitle>
                            <CardDescription>Appreciation rates Q2 2024</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="flex items-center">
                                <Building className="h-6 w-6 mr-4 text-primary" />
                                <div>
                                    <p className="font-semibold">Apartment (2BHK)</p>
                                    <p className="text-sm text-muted-foreground">Suburban Areas</p>
                                </div>
                                <p className="ml-auto font-semibold text-green-600">+4.5%</p>
                            </div>
                            <div className="flex items-center">
                                <IndianRupee className="h-6 w-6 mr-4 text-accent" />
                                <div>
                                    <p className="font-semibold">Rental Yield</p>
                                    <p className="text-sm text-muted-foreground">City-wide Average</p>
                                </div>
                                <p className="ml-auto font-semibold text-green-600">+2.1%</p>
                            </div>
                            <div className="flex items-center">
                                <BarChart className="h-6 w-6 mr-4 text-secondary-foreground" />
                                <div>
                                    <p className="font-semibold">Most Valued Upgrade</p>
                                    <p className="text-sm text-muted-foreground">Kitchen & Bathroom</p>
                                </div>
                                <p className="ml-auto font-semibold">+8-12% Value</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
