import type { Metadata } from 'next'
import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Users, TrendingUp, Award, Globe, Clock, Target, Shield, Zap } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/about',
    title: 'About Us - UK\'s Leading Press Media Distribution Service',
    description: 'Learn about Newsmidcentral\'s mission to connect businesses with media outlets through professional press media distribution services.',
    keywords: ['about', 'press media distribution', 'media relations', 'PR services'],
  })
}

const stats = [
  { label: "Press Media Distributed", value: "50,000+", icon: Globe },
  { label: "Media Contacts", value: "10,000+", icon: Users },
  { label: "Client Satisfaction", value: "98%", icon: Award },
  { label: "Years of Experience", value: "15+", icon: Clock },
]

const values = [
  {
    icon: Target,
    title: "Precision Targeting",
    description: "We ensure your press media reaches the most relevant journalists and media outlets in your industry.",
  },
  {
    icon: Shield,
    title: "Reliable Service",
    description: "Trusted by hundreds of businesses for consistent, professional press media distribution with guaranteed delivery.",
  },
  {
    icon: Zap,
    title: "Fast Distribution",
    description: "Get your news out quickly with same-day distribution options and express services for urgent announcements.",
  },
]

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "15+ years in PR and media relations. Former journalist turned PR tech entrepreneur.",
    location: "London, UK",
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    bio: "Expert in media distribution logistics and client relationship management.",
    location: "Manchester, UK",
  },
  {
    name: "Emma Williams",
    role: "Director of Media Relations",
    bio: "Former BBC journalist with extensive network across UK media outlets.",
    location: "London, UK",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#f8f4ff] to-[#faf0ff]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-[#640D5F] text-white">About Newsmidcentral</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Connecting Your Stories with
              <span className="block text-[#640D5F">The Right Audience</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              We're the UK's trusted partner for professional press media distribution, helping businesses of all sizes get their message heard by the right people at the right time.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Making an Impact in UK Media
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Numbers that speak to our commitment and success
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="mx-auto w-12 h-12 bg-[#f8f4ff] rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="h-6 w-6 text-[#640D5F]" />
                </div>
                <div className="text-3xl font-bold text-[#640D5F] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-[#640D5F] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Our Story: From Newsroom to Newswire
              </h2>
              <div className="space-y-4 text-white/90">
                <p>
                  Founded in 2009 by former journalists and PR professionals, Newsmidcentral was born from a simple realization: businesses needed a better way to connect with media outlets.
                </p>
                <p>
                  What started as a small service helping local businesses get press coverage has grown into the UK's leading independent press media distribution platform, serving everyone from startups to Fortune 500 companies.
                </p>
                <p>
                  Today, we combine cutting-edge technology with deep media industry expertise to deliver press media distribution that gets real results for our clients.
                </p>
              </div>
              
              <div className="mt-8">
                <Button size="lg" className="bg-[#640D5F] hover:bg-[#4a0a47] text-white">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="relative h-96 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&crop=center&auto=format"
                    alt="Newsmidcentral Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#640D5F]/80 to-transparent" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="mx-auto w-16 h-16 bg-[#f8f4ff] rounded-full flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-[#640D5F]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Leadership Team
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="mx-auto w-20 h-20 bg-[#f8f4ff] rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[#640D5F]">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#640D5F] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                <p className="text-gray-500 text-sm">{member.location}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#640D5F] to-[#D91656] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Share Your Story?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of businesses who trust Newsmidcentral for their press media distribution needs.
          </p>
          <div className="flex justify-center">
            <Button size="lg" asChild className="bg-white text-[#640D5F] hover:bg-gray-100 font-semibold">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
