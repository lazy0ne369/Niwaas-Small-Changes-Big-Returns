import Link from "next/link";
import { Menu, Home, Lightbulb, GanttChart, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "./logo";

export function Header() {
  const navLinks = [
    { href: "/ideas", label: "Ideas", icon: Lightbulb },
    { href: "/projects", label: "My Projects", icon: GanttChart },
    { href: "/expert-chat", label: "Expert Chat", icon: Bot },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Logo />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <div className="mb-4">
                <Logo />
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 rounded-md p-2 text-lg font-medium hover:bg-accent"
                >
                  <link.icon className="h-5 w-5" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Can add search bar here later */}
          </div>
          <nav className="hidden items-center gap-4 text-sm md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
             <Link href="/auth/signin">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
             <Link href="/auth/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
