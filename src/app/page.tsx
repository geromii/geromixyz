"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogPortal } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";

const navItems = [
  { href: "/blog", label: "Blog", dotClass: "bg-primary", bgClass: "bg-primary/10", hoverClass: "hover:bg-primary/10" },
  { href: "/projects", label: "Projects", dotClass: "bg-secondary", bgClass: "bg-secondary/10", hoverClass: "hover:bg-secondary/10" },
  { href: "/journal", label: "Journal", dotClass: "bg-accent", bgClass: "bg-accent/10", hoverClass: "hover:bg-accent/10" },
  { href: "/about", label: "About", dotClass: "bg-primary", bgClass: "bg-primary/10", hoverClass: "hover:bg-primary/10" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient bg-300%">
            Geromi
          </h1>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-muted"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-background/95 backdrop-blur-md">
          <div className="p-8 pt-20">
            <div className="mb-8">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="w-24 h-24 rounded-xl overflow-hidden mx-auto cursor-pointer focus:outline-none focus:ring-0">
                    <Image
                      src="/baby_jeremy.jpg"
                      alt="Jeremy Russell"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </button>
                </DialogTrigger>
                <DialogPortal>
                  <div className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[1px]" />
                  <DialogPrimitive.Content className="fixed top-[50%] left-[50%] z-50 translate-x-[-50%] translate-y-[-50%] max-w-lg w-full max-w-[calc(100%-2rem)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200">
                    <DialogTitle className="sr-only">Jeremy Russell - Baby Photo</DialogTitle>
                    <div className="aspect-square w-full">
                      <Image
                        src="/baby_jeremy.jpg"
                        alt="Jeremy Russell - Baby Photo"
                        width={512}
                        height={512}
                        className="w-full h-full object-cover rounded-xl"
                        style={{ boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.7), 0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 10px 20px -5px rgba(0, 0, 0, 0.3)' }}
                      />
                    </div>
                    <DialogPrimitive.Close className="absolute -top-4 -right-4 rounded-full bg-background border shadow-lg opacity-90 hover:opacity-100 transition-opacity p-2 focus:outline-none focus:ring-0">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </DialogPrimitive.Close>
                  </DialogPrimitive.Content>
                </DialogPortal>
              </Dialog>
            </div>
            <nav>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg ${item.hoverClass} transition-all duration-200`}
                    >
                      <div className={`w-8 h-8 rounded-lg ${item.bgClass} flex items-center justify-center`}>
                        <div className={`w-3 h-3 rounded-full ${item.dotClass}`}></div>
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
      
      <div className="relative flex min-h-screen">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:flex w-80 border-r border-border/50 bg-background/80 backdrop-blur-sm p-8 flex-col fixed h-full">
          <div className="mb-12">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient bg-300%">
              Geromi
            </h1>
            <p className="text-sm text-muted-foreground mt-2">Jeremy Russell</p>
          </div>

          {/* Profile Image */}
          <div className="mb-8">
            <Dialog>
              <DialogTrigger asChild>
                <button className="w-32 h-32 rounded-xl overflow-hidden cursor-pointer focus:outline-none focus:ring-0">
                  <Image
                    src="/baby_jeremy.jpg"
                    alt="Jeremy Russell"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </button>
              </DialogTrigger>
              <DialogPortal>
                <div className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[1px]" />
                <DialogPrimitive.Content className="fixed top-[50%] left-[50%] z-50 translate-x-[-50%] translate-y-[-50%] max-w-lg w-full max-w-[calc(100%-2rem)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200">
                  <DialogTitle className="sr-only">Jeremy Russell - Baby Photo</DialogTitle>
                  <div className="aspect-square w-full">
                    <Image
                      src="/baby_jeremy.jpg"
                      alt="Jeremy Russell - Baby Photo"
                      width={512}
                      height={512}
                      className="w-full h-full object-cover rounded-xl shadow-2xl"
                    />
                  </div>
                  <DialogPrimitive.Close className="absolute -top-4 -right-4 rounded-full bg-background border shadow-lg opacity-90 hover:opacity-100 transition-opacity p-2 focus:outline-none focus:ring-0">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </DialogPrimitive.Close>
                </DialogPrimitive.Content>
              </DialogPortal>
            </Dialog>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group flex items-center gap-3 px-4 py-3 rounded-lg ${item.hoverClass} transition-all duration-200`}
                  >
                    <div className={`w-8 h-8 rounded-lg ${item.bgClass} flex items-center justify-center`}>
                      <div className={`w-3 h-3 rounded-full ${item.dotClass}`}></div>
                    </div>
                    <span className="font-medium group-hover:translate-x-1 transition-transform">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="mt-auto pt-8 border-t border-border/50">
            <p className="text-xs text-muted-foreground">
              © 2024 Geromi. Built with Next.js & love.
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-80 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-20">
            <section className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Welcome to my digital space
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  I'm a developer who loves building things on the internet. 
                  This is where I share my thoughts, showcase my work, and document my journey.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      Latest Posts
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Coming soon... Check back for thoughts on tech, coding, and life.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      This Week
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Weekly reflections will appear here.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      Current Focus
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Building this personal site and exploring new web technologies.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      Get in Touch
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Feel free to reach out if you want to collaborate or just say hi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="flex items-center gap-4 pt-8">
                <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                <div className="h-1 w-16 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
                <div className="h-1 w-16 bg-gradient-to-r from-accent to-primary rounded-full"></div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}