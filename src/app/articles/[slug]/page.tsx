import type { Metadata } from 'next'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Calendar, Clock, User, ArrowRight, Share2, Facebook, Twitter, Linkedin, Mail, Eye } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'

export const revalidate = 3

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const slug = resolvedParams.slug
  
  // Mock data - in real implementation, fetch from API
  const pressRelease = {
    title: 'Tech Startup Raises $10M in Series A Funding Round',
    excerpt: 'London-based fintech company announces major investment round to expand European operations.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Technology',
    readTime: '3 min read',
  }

  return buildPageMetadata({
    path: `/articles/${slug}`,
    title: pressRelease.title,
    description: pressRelease.excerpt,
    keywords: ['press media', 'funding', 'technology', 'startup'],
  })
}

// Mock related press media
const relatedPressReleases = [
  {
    id: 1,
    title: 'Healthcare Partnership Aims to Revolutionize Patient Care',
    excerpt: 'Leading healthcare providers join forces to implement cutting-edge telemedicine solutions.',
    date: '2024-01-14',
    category: 'Healthcare',
    image: '/placeholder-healthcare.jpg',
  },
  {
    id: 2,
    title: 'Sustainable Fashion Brand Launches Eco-Friendly Collection',
    excerpt: 'British fashion house unveils new line made entirely from recycled materials.',
    date: '2024-01-13',
    category: 'Fashion',
    image: '/placeholder-fashion.jpg',
  },
  {
    id: 3,
    title: 'Real Estate Developer Announces Green Building Initiative',
    excerpt: 'Major property development company commits to carbon-neutral construction.',
    date: '2024-01-12',
    category: 'Real Estate',
    image: '/placeholder-realestate.jpg',
  },
]

export default async function PressReleaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const slug = resolvedParams.slug

  // Mock press media data - in real implementation, fetch from API using slug
  const pressRelease = {
    title: 'Tech Startup Raises $10M in Series A Funding Round',
    subtitle: 'London-based FinTech InnovateSecures Investment to Revolutionize Digital Banking',
    featuredImage: '/placeholder-tech-hero.jpg',
    content: `
      <p>LONDON, UK – FinTech startup TechFlow announced today the successful completion of a $10 million Series A funding round led by prominent venture capital firm Digital Ventures. The investment will fuel the company's expansion across European markets and accelerate the development of its AI-powered payment solutions.</p>
      
      <p>The funding round, which saw participation from several strategic investors, values the company at $50 million post-money. TechFlow plans to use the capital to enhance its proprietary technology platform, expand its team, and establish operations in key European markets including Germany, France, and Spain.</p>
      
      <h3>Transforming Digital Banking</h3>
      <p>TechFlow's innovative platform leverages artificial intelligence and machine learning to provide businesses with real-time payment processing, fraud detection, and financial analytics. The company has already processed over £500 million in transactions since its launch in 2022.</p>
      
      <blockquote>
        <p>"This investment represents a significant milestone for TechFlow and validates our mission to revolutionize digital banking for businesses," said Sarah Johnson, CEO of TechFlow. "We're excited to partner with Digital Ventures as we scale our operations and bring our cutting-edge solutions to more businesses across Europe."</p>
      </blockquote>
      
      <h3>Market Expansion Plans</h3>
      <p>With the new funding, TechFlow plans to establish offices in Berlin, Paris, and Madrid within the next 12 months. The company will also double its engineering team to support the development of new features including cross-border payments and advanced analytics tools.</p>
      
      <p>Digital Ventures Partner Michael Chen commented: "TechFlow has demonstrated exceptional growth and innovation in the FinTech space. Their AI-driven approach to payment processing addresses critical pain points for businesses, and we're confident in their ability to scale successfully across European markets."</p>
      
      <h3>About TechFlow</h3>
      <p>TechFlow is a London-based FinTech company founded in 2022 with the mission to simplify and secure digital payments for businesses. The company's platform serves over 1,000 businesses across the UK and processes millions in transactions monthly. TechFlow is committed to leveraging cutting-edge technology to provide secure, efficient, and scalable payment solutions.</p>
      
      <h3>Contact Information</h3>
      <p>For media inquiries:<br />
      Sarah Johnson<br />
      CEO, TechFlow<br />
      Email: media@techflow.com<br />
      Phone: +44 20 1234 5678</p>
    `,
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Technology',
    readTime: '3 min read',
    views: 1250,
    tags: ['Funding', 'FinTech', 'AI', 'Banking', 'Investment'],
  }

  return (
    <div className="min-h-screen bg-background">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-[#f8f4ff] to-[#faf0ff]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-[#640D5F] text-white">
              {pressRelease.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              {pressRelease.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {pressRelease.subtitle}
            </p>
            
            {/* Meta Information */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {pressRelease.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {pressRelease.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {pressRelease.readTime}
              </span>
              <span className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                {pressRelease.views} views
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={pressRelease.featuredImage}
              alt={pressRelease.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: pressRelease.content }}
                className="text-gray-700 leading-relaxed"
              />
              
              {/* Tags */}
              <div className="mt-8 pt-8 border-t">
                <div className="flex flex-wrap gap-2">
                  {pressRelease.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-[#640D5F] text-[#640D5F]">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Share Buttons */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Share this press media</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2] hover:text-white">
                    <Facebook className="mr-2 h-4 w-4" />
                    Facebook
                  </Button>
                  <Button variant="outline" className="border-[#1DA1F2] text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white">
                    <Twitter className="mr-2 h-4 w-4" />
                    Twitter
                  </Button>
                  <Button variant="outline" className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" className="border-[#640D5F] text-[#640D5F] hover:bg-[#640D5F] hover:text-white">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Button>
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-[#640D5F] hover:bg-[#4a0a47]">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Press Media
                  </Button>
                  <Button variant="outline" className="w-full border-[#640D5F] text-[#640D5F]">
                    Download PDF
                  </Button>
                  <Button variant="outline" className="w-full border-[#640D5F] text-[#640D5F]">
                    Print Article
                  </Button>
                </div>
              </Card>

              {/* Newsletter Signup */}
              <Card className="p-6 bg-gradient-to-br from-[#f8f4ff] to-[#faf0ff]">
                <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get the latest press media delivered to your inbox.
                </p>
                <Button className="w-full bg-[#640D5F] hover:bg-[#4a0a47]">
                  Subscribe Now
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Press Media */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Related Press Media
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Explore more news and announcements from various industries.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedPressReleases.map((release) => (
              <Card key={release.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={release.image}
                    alt={release.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#640D5F] text-white">
                      {release.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4" />
                    {release.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#640D5F] transition-colors">
                    {release.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {release.excerpt}
                  </p>
                  <Button variant="link" className="text-[#640D5F] hover:text-[#4a0a47] p-0">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#640D5F] to-[#D91656] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Distribute Your Press Media with Newsmidcentral
          </h2>
          <p className="mt-4 text-xl opacity-90">
            Reach thousands of journalists and media outlets with our professional distribution service.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-white text-[#640D5F] hover:bg-gray-100">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#640D5F]">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
