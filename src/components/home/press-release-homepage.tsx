'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const topStories = [
  {
    title: 'High-Precision Tech & New Product Expansion',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center&auto=format',
  },
  {
    title: 'Strategic Media Partnership Expands Reach',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop&crop=center&auto=format',
  },
  {
    title: 'Coverage Calendar: Upcoming Industry Releases',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=200&fit=crop&crop=center&auto=format',
  },
  {
    title: 'Startup Story of the Week and Client Spotlight',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=200&fit=crop&crop=center&auto=format',
  },
]

const featureCards = [
  {
    title: 'Reach the Right Readers',
    description: 'Distribute to media, journalists, and publication channels that match your niche.',
  },
  {
    title: 'Show It All Your Way',
    description: 'Customize sections, cards, and story highlights with an editorial-first layout.',
  },
  {
    title: 'Deliver Accurate & Reliable Stories',
    description: 'Publish announcements, press updates, and launch briefs with confidence.',
  },
  {
    title: 'Optimize with Analytics & Reporting',
    description: 'Track views, engagement, and pickup data to sharpen every news campaign.',
  },
]

const testimonials = [
  {
    quote: 'This service took our launch from unnoticed to featured in premium press and niche market media in days.',
    name: 'Jordan Ellis',
    role: 'Head of PR',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format',
  },
  {
    quote: 'Our team needed reliable publishing and media visibility. The flow is simple and performance has been excellent.',
    name: 'Maya Rao',
    role: 'Marketing Lead',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format',
  },
  {
    quote: 'The analytics gave us clarity immediately. We now optimize each release and see stronger results month over month.',
    name: 'Chris Ortega',
    role: 'Comms Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format',
  },
]

const solutions = ['PR Campaign', 'PR Releases', 'Anytime', 'Public Coverage', 'Industry Tools & Solutions']

export function PressReleaseHomepage() {
  return (
    <div className="bg-[#efeff3] text-slate-900">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#120028]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(220,40,170,0.35),transparent_45%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(72,24,181,0.3),transparent_48%)] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <p className="text-center text-xs uppercase tracking-[0.28em] text-[#d2a6d9]">Everything Your Media Team Needs</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-semibold leading-tight text-white sm:text-5xl">
            The News Starts Here
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-[#d4cbe7] sm:text-base">
            Publish and scale your best stories with a modern newsroom layout, clear calls-to-action, and strategic distribution.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#ff3fa4] px-6 py-2.5 text-sm font-medium text-white shadow-[0_0_35px_rgba(255,63,164,0.4)] hover:bg-[#ea218f]">
              Book a Free Press Call
            </a>
            <a href="/about" className="inline-flex items-center justify-center rounded-full border border-[#6e5d8f] bg-[#ffffff12] px-6 py-2.5 text-sm font-medium text-[#f1ecff] hover:bg-[#ffffff24] hover:text-white">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#efeff3] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {topStories.map((story) => (
              <Card key={story.title} className="overflow-hidden rounded-lg border-[#d8d8e4] bg-white shadow-sm">
                <div className="relative h-24 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-3">
                  <p className="line-clamp-2 text-xs font-medium text-[#2b2240]">{story.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#171026] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white">Turn Your News into Headlines</h2>
          <p className="mt-3 max-w-2xl text-sm text-[#d1cae3]">
            A clean, conversion-ready homepage block built for campaigns, media updates, and business launches.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((item) => (
              <Card key={item.title} className="rounded-xl border-[#3f315f] bg-[#23163a] text-slate-100">
                <CardContent className="space-y-3 p-5">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="text-sm text-[#cbc2dc]">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5fb] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold text-[#171717]">What teams are saying</h2>
          <p className="mt-2 text-center text-sm text-[#6d6680]">Real feedback from brands and communication teams.</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="rounded-xl border-[#dfd8ef] bg-white">
                <CardContent className="space-y-4 p-5">
                  <p className="text-sm leading-relaxed text-[#3c3450]">"{item.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-[#6d6680]">{item.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#ddd6ee] bg-[#f2eefb] py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold text-[#1e1e1e]">Get results with the solutions you need</h2>
          <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {solutions.map((item) => (
              <Card key={item} className="rounded-lg border-[#ddd7ef] bg-white">
                <CardContent className="flex min-h-20 items-center justify-center p-4 text-center text-sm font-medium text-[#3d3159]">
                  {item}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5fb] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#7f7398]">The Next Story</p>
            <h3 className="mt-3 text-3xl font-semibold text-[#171717]">Discover your next story</h3>
            <p className="mt-3 max-w-xl text-sm text-[#5e5673]">
              Build the next big press briefing, profile launch, or announcement with sections that help your audience act fast.
            </p>
            <Link href="/contact" className="mt-5 inline-flex items-center text-sm font-medium text-[#dd2f96] hover:text-[#b31e74]">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <Card className="overflow-hidden rounded-xl border-[#dfd8ef]">
            <div className="relative h-56">
              <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop&crop=center&auto=format" alt="Press media distribution" className="w-full h-full object-cover" />
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-[#120028] py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white">Ready to Share Your News?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#d4cbe7]">
            Start your next release with a layout made for visibility, clarity, and measurable media impact.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="rounded-full bg-[#ff3fa4] px-6 text-white hover:bg-[#ea218f]">
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#b7abc9]">
            <span className="inline-flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-[#ff5ab1]" />
              Editorial-ready blocks
            </span>
            <span className="inline-flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-[#ff5ab1]" />
              Conversion-focused CTAs
            </span>
            <span className="inline-flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-[#ff5ab1]" />
              Fast loading sections
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
