import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Circle, FileDown, PlusCircle } from "lucide-react";

const timelineTasks = [
  { week: 1, task: "Finalize Design & Layout", status: "completed" },
  { week: 1, task: "Hire Contractor & Electrician", status: "completed" },
  { week: 2, task: "Demolition & Civil Work", status: "completed" },
  { week: 2, task: "Electrical & Plumbing Rough-in", status: "in_progress" },
  { week: 3, task: "Cabinetry & Countertop Installation", status: "pending" },
  { week: 3, task: "Appliance Installation & Final Touches", status: "pending" },
];

const budgetItems = [
  { item: "Cabinetry", allocated: "₹80,000", spent: "₹75,000" },
  { item: "Countertops", allocated: "₹40,000", spent: "₹42,000" },
  { item: "Appliances", allocated: "₹50,000", spent: "₹0" },
  { item: "Labor", allocated: "₹30,000", spent: "₹15,000" },
];

export default function ProjectsPage() {
  const totalSpent = budgetItems.reduce((acc, item) => acc + Number(item.spent.replace(/₹|,/g, '')), 0);
  const totalAllocated = budgetItems.reduce((acc, item) => acc + Number(item.allocated.replace(/₹|,/g, '')), 0);

  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold font-headline">My Projects</h1>
          <p className="text-muted-foreground text-lg">Track your ongoing and planned improvements.</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Project
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project: Kitchen Remodel</CardTitle>
          <CardDescription>Overall Progress: 55% complete. Expected finish: 2 weeks.</CardDescription>
          <Progress value={55} className="mt-4" />
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="timeline">
            <div className="flex justify-between items-center">
                <TabsList>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                <TabsTrigger value="budget">Budget</TabsTrigger>
                <TabsTrigger value="progress">Progress</TabsTrigger>
                </TabsList>
                 <Button variant="outline">
                    <FileDown className="mr-2 h-4 w-4" />
                    Export Plan
                </Button>
            </div>
            <TabsContent value="timeline" className="mt-6">
                <h3 className="font-semibold mb-4">Project Timeline</h3>
                <ul className="space-y-4">
                    {timelineTasks.map((item, index) => (
                        <li key={index} className="flex items-center gap-4">
                            {item.status === 'completed' ? <CheckCircle2 className="h-6 w-6 text-green-500" /> : <Circle className="h-6 w-6 text-muted-foreground" />}
                            <div>
                                <p className="font-medium">Week {item.week}: {item.task}</p>
                                <p className="text-sm text-muted-foreground capitalize">{item.status.replace('_', ' ')}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </TabsContent>
            <TabsContent value="budget" className="mt-6">
                <h3 className="font-semibold mb-4">Budget Tracker</h3>
                <div className="space-y-4">
                    {budgetItems.map((item, index) => (
                        <div key={index}>
                            <div className="flex justify-between mb-1">
                                <p>{item.item}</p>
                                <p className="text-muted-foreground">{item.spent} / {item.allocated}</p>
                            </div>
                            <Progress value={(Number(item.spent.replace(/₹|,/g, '')) / Number(item.allocated.replace(/₹|,/g, ''))) * 100} />
                        </div>
                    ))}
                </div>
                 <div className="mt-6 pt-4 border-t">
                    <div className="flex justify-between font-bold text-lg">
                        <p>Total:</p>
                        <p>₹{totalSpent.toLocaleString('en-IN')} / ₹{totalAllocated.toLocaleString('en-IN')}</p>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="progress" className="mt-6">
                 <div className="text-center p-8">
                     <h3 className="font-semibold mb-4">Progress Visuals</h3>
                     <p className="text-muted-foreground">Charts and graphs showing project progress will appear here.</p>
                     {/* Recharts components would go here */}
                 </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
