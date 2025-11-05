import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Search, SlidersHorizontal } from "lucide-react";

type ProjectIdea = {
  id: string;
  title: string;
  description: string;
  roi: string;
  image: (typeof PlaceHolderImages)[0];
  budget: string;
  time: string;
};

const ideas: ProjectIdea[] = [
  {
    id: "kitchen-remodel",
    title: "Modular Kitchen Upgrade",
    description: "Install a modern modular kitchen for better space utilization and aesthetics.",
    roi: "15-20%",
    image: PlaceHolderImages.find(p => p.id === "kitchen-remodel")!,
    budget: "₹1,50,000 - ₹3,00,000",
    time: "2-3 Weeks"
  },
  {
    id: "bathroom-upgrade",
    title: "Bathroom Fixture Refresh",
    description: "Update taps, showerheads, and lighting to give your bathroom a modern feel.",
    roi: "10-15%",
    image: PlaceHolderImages.find(p => p.id === "bathroom-upgrade")!,
    budget: "₹50,000 - ₹1,00,000",
    time: "1 Week"
  },
  {
    id: "smart-home-integration",
    title: "Smart Home Integration",
    description: "Integrate smart lights, fans, and security systems for convenience and energy savings.",
    roi: "5-10%",
    image: PlaceHolderImages.find(p => p.id === "smart-home")!,
    budget: "₹30,000 - ₹80,000",
    time: "3-4 Days"
  },
    {
    id: "balcony-garden",
    title: "Balcony Garden & Landscaping",
    description: "Create a green oasis in your balcony with vertical gardens and comfortable seating.",
    roi: "3-7%",
    image: PlaceHolderImages.find(p => p.id === "landscaping")!,
    budget: "₹20,000 - ₹50,000",
    time: "1 Weekend"
  },
    {
    id: "fresh-paint",
    title: "A Fresh Coat of Paint",
    description: "Repainting interiors and exteriors is a cost-effective way to boost appeal.",
    roi: "20-25%",
    image: PlaceHolderImages.find(p => p.id === "painting")!,
    budget: "₹40,000 - ₹90,000",
    time: "1-2 Weeks"
  },
  {
    id: "living-room-makeover",
    title: "Living Room Makeover",
    description: "Create a welcoming and functional living space. Focus on lighting and flexible furniture.",
    roi: "10-15%",
    image: PlaceHolderImages.find(p => p.id === "living-room-makeover")!,
    budget: "₹75,000 - ₹1,50,000",
    time: "1-2 Weeks"
  }
];

export default function IdeasPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold font-headline">Explore Improvement Ideas</h1>
        <p className="text-muted-foreground text-lg">Find the perfect project to enhance your home's value and appeal.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search for ideas like 'kitchen' or 'bathroom'..." className="pl-10" />
        </div>
        <div className="flex gap-4">
            <Select>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Under ₹50,000</SelectItem>
                <SelectItem value="medium">₹50,000 - ₹2,00,000</SelectItem>
                <SelectItem value="high">Above ₹2,00,000</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="ROI Potential" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">High (15%+)</SelectItem>
                <SelectItem value="medium">Medium (8-15%)</SelectItem>
                <SelectItem value="low">Good to have (Below 8%)</SelectItem>
              </SelectContent>
            </Select>
             <Button variant="outline" className="hidden md:flex">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                More Filters
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ideas.map((idea) => (
          <Card key={idea.id} className="overflow-hidden hover:shadow-lg transition-shadow">
             <CardHeader className="p-0">
               <Image src={idea.image.imageUrl} alt={idea.image.description} data-ai-hint={idea.image.imageHint} width={600} height={400} className="object-cover aspect-video" />
             </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="mb-2">{idea.title}</CardTitle>
              <CardDescription>{idea.description}</CardDescription>
              <div className="mt-4 flex justify-between text-sm text-muted-foreground">
                <span>Budget: {idea.budget}</span>
                <span>Time: {idea.time}</span>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-between items-center">
               <div className="font-bold text-green-600">ROI: {idea.roi}</div>
               <Link href={`/ideas/${idea.id}`}>
                <Button variant="secondary">View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
