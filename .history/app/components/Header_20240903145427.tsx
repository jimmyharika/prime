'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#tracker', label: 'Tracker' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Mobile menu button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground/60 transition-colors hover:text-foreground/80"
                >
                  {item.label}
                </Link>
              ))}
              <Button className="mt-6 w-full">Get a Quote</Button>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Logo (centered) */}
        <Link href="/" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-2">
          <span className="font-bold text-xl">PrimeFlatbeds</span>
        </Link>

        {/* Desktop navigation (right side) */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.slice(2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {item.label}
            </Link>
          ))}
          <Button>Get a Quote</Button>
        </div>
      </div>
    </header>
  )
}

export default Header