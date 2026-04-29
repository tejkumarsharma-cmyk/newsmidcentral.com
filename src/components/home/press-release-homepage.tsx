'use client'

import Link from 'next/link'
import { ArrowRight, Star, Check, Play, Calendar, Clock, Users, TrendingUp, Award, MessageSquare, ChevronDown } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function PressReleaseHomepage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f8f4ff 0%, #faf0ff 50%, #fcf5ff 100%)' }}>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            {/* Left Side */}
            <div>
              <Badge className="mb-6 bg-[#640D5F] text-white">
                Trusted by 500+ Companies
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Get Your Story in Front of
                <span className="block text-[#640D5F]">10,000+ Media Contacts</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-8">
                Professional press release distribution that delivers real results. From local newsrooms to national publications, we ensure your message reaches the right audience.
              </p>
              
              {/* Star Rating */}
              <div className="mt-6 flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#FFB200] text-[#FFB200]" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9/5 from 500+ reviews</span>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-[#640D5F] hover:bg-[#4a0a47] text-white px-8 py-3">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-[#640D5F] text-[#640D5F] hover:bg-[#640D5F] hover:text-white px-8 py-3">
                  Talk to an Expert
                </Button>
              </div>
            </div>

            {/* Right Side - Card */}
            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="relative h-64 overflow-hidden">
                  <ContentImage 
                    src="/placeholder-hero.jpg" 
                    alt="Press Release Distribution" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">Start Your PR Campaign Today</h3>
                    <p className="text-sm text-white/90">Get your press release distributed to 1000+ media contacts</p>
                    <Button className="mt-2 bg-[#D91656] hover:bg-[#b01248] text-white">
                      Get Started Now
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Newsmidcentral for Your PR Distribution?
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven PR strategies to ensure your press release gets maximum exposure and measurable results.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Startups & SMEs Card */}
            <Card className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <ContentImage 
                  src="/placeholder-startup.jpg" 
                  alt="Startups & SMEs" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#640D5F]/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold">Startups & SMEs</h3>
                    <p className="mt-2">Get noticed by investors & media</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Affordable press release distribution designed for growing businesses. Reach investors, customers, and media with your company news and milestones.
                </p>
                <Button className="w-full bg-[#D91656] hover:bg-[#b01248] text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Large Enterprises Card */}
            <Card className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <ContentImage 
                  src="/placeholder-enterprise.jpg" 
                  alt="Large Enterprises" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#640D5F]/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold">Large Enterprises</h3>
                    <p className="mt-2">Corporate communications at scale</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Enterprise-grade distribution with advanced targeting, analytics, and dedicated support for corporate PR teams and communications departments.
                </p>
                <Button className="w-full bg-[#D91656] hover:bg-[#b01248] text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            {/* Left Side */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Newsmidcentral?
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                We combine cutting-edge technology with proven PR strategies to ensure your press releases reach the right audience at the right time.
              </p>
              
              <ul className="mt-8 space-y-4">
                {[
                  'Access to 1000+ journalists and media outlets',
                  'Real-time analytics and performance tracking',
                  'SEO optimization for maximum online visibility',
                  'Dedicated account manager for enterprise clients',
                  '24/7 support and distribution monitoring',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-[#EB5B00] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-[#640D5F] hover:bg-[#4a0a47] text-white px-8 py-3">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-[#640D5F] text-[#640D5F] hover:bg-[#640D5F] hover:text-white px-8 py-3">
                  Speak to Us
                </Button>
              </div>
            </div>

            {/* Right Side - Video */}
            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="relative h-80 overflow-hidden bg-gray-900">
                  <ContentImage 
                    src="/placeholder-video.jpg" 
                    alt="How it works" 
                    fill 
                    className="object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="bg-[#D91656] hover:bg-[#b01248] text-white rounded-full h-16 w-16 p-0">
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Digital PR solutions tailored to your industry
            </h2>
          </div>
          
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              {
                title: 'Business News PR',
                description: 'Reach business publications and financial news outlets with your corporate announcements.',
                image: '/placeholder-business.jpg',
              },
              {
                title: 'Crypto PR',
                description: 'Specialized distribution to crypto and blockchain media outlets for maximum industry impact.',
                image: '/placeholder-crypto.jpg',
              },
              {
                title: 'Book Publishing PR',
                description: 'Connect with literary reviewers, book bloggers, and publishing industry contacts.',
                image: '/placeholder-books.jpg',
              },
            ].map((solution, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <ContentImage 
                    src={solution.image} 
                    alt={solution.title} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <Button className="w-full bg-[#EB5B00] hover:bg-[#c44900] text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment/Calendar Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Talk To Our Experts Today
              </h2>
              <p className="mt-4 text-gray-600">
                Schedule a free consultation with our PR experts to discuss your distribution needs and learn how we can help amplify your message.
              </p>
              <Button className="mt-6 bg-[#640D5F] hover:bg-[#4a0a47] text-white">
                Book a Consultation
              </Button>
            </div>

            {/* Center Column - Calendar */}
            <Card className="p-4">
              <div className="text-center mb-4">
                <h3 className="font-semibold text-gray-900">Select a Date</h3>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-xs">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={i} className="font-semibold text-gray-600 py-2">{day}</div>
                ))}
                {[...Array(31)].map((_, i) => (
                  <div 
                    key={i} 
                    className="py-2 hover:bg-[#640D5F] hover:text-white rounded cursor-pointer transition-colors"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </Card>

            {/* Right Column - Time Slots */}
            <Card className="p-4">
              <div className="text-center mb-4">
                <h3 className="font-semibold text-gray-900">Available Times</h3>
              </div>
              <div className="space-y-2">
                {['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'].map((time) => (
                  <Button 
                    key={time}
                    variant="outline" 
                    className="w-full justify-start hover:bg-[#640D5F] hover:text-white hover:border-[#640D5F]"
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    {time}
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Latest Insights
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Expert tips and industry insights to maximize your PR impact
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              {
                title: 'How to Write Press Releases That Get Picked Up',
                excerpt: 'Learn the essential elements of crafting press releases that journalists actually want to read.',
                image: '/placeholder-insight-1.jpg',
              },
              {
                title: 'The Future of PR Distribution in 2024',
                excerpt: 'Discover emerging trends and technologies shaping the PR distribution landscape.',
                image: '/placeholder-insight-2.jpg',
              },
              {
                title: 'Measuring PR Success: Key Metrics to Track',
                excerpt: 'Understand which metrics matter most and how to prove ROI on your PR efforts.',
                image: '/placeholder-insight-3.jpg',
              },
            ].map((insight, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <ContentImage 
                    src={insight.image} 
                    alt={insight.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{insight.title}</h3>
                  <p className="text-gray-600 mb-4">{insight.excerpt}</p>
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="mt-12">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: 'How quickly will my press release be distributed?',
                  answer: 'Once submitted and approved, your press release will be distributed within 24 hours to our entire network of media contacts.'
                },
                {
                  question: 'Can I target specific industries or regions?',
                  answer: 'Yes, we offer targeted distribution options allowing you to reach specific industries, geographic regions, or types of media outlets.'
                },
                {
                  question: 'Do you provide analytics and reporting?',
                  answer: 'Absolutely! All our distribution packages include detailed analytics showing opens, clicks, media pickups, and engagement metrics.'
                },
                {
                  question: 'What is included in the basic package?',
                  answer: 'Our basic package includes distribution to 500+ media contacts, basic analytics, and one revision. Premium packages include additional features.'
                },
                {
                  question: 'Can you help write my press release?',
                  answer: 'Yes, we offer professional press release writing services as an add-on. Our experienced writers can craft compelling releases that get results.'
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-gray-200 px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-[#640D5F] text-[#640D5F] hover:bg-[#640D5F] hover:text-white">
                View All FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsroom Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Latest From Our Newswire Newsroom
            </h2>
          </div>
          
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              {
                title: 'Tech Startup Raises $10M in Series A Funding',
                excerpt: 'London-based fintech company announces major investment round to expand European operations.',
                image: '/placeholder-news-1.jpg',
              },
              {
                title: 'New Healthcare Partnership Announced',
                excerpt: 'Leading healthcare providers join forces to improve patient care across the UK.',
                image: '/placeholder-news-2.jpg',
              },
              {
                title: 'Sustainable Fashion Brand Launches New Collection',
                excerpt: 'Eco-friendly clothing company unveils latest line made from recycled materials.',
                image: '/placeholder-news-3.jpg',
              },
            ].map((news, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <ContentImage 
                    src={news.image} 
                    alt={news.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <Link href="/articles">
                    <Button variant="link" className="text-[#640D5F] hover:text-[#4a0a47] p-0">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Newsmidcentral is here to help your businesses PR
            </h2>
          </div>
          
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              {
                name: 'Sarah Johnson',
                rating: 5,
                review: 'Outstanding service! Our press release was picked up by major news outlets within hours. The team is professional and results-driven.',
              },
              {
                name: 'Michael Chen',
                rating: 5,
                review: 'We\'ve tried several distribution services, but Newsmidcentral delivers the best ROI. The analytics are incredibly detailed and helpful.',
              },
              {
                name: 'Emma Williams',
                rating: 5,
                review: 'As a freelance PR consultant, this service has been a game-changer. My clients are thrilled with the media coverage we\'re getting.',
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FFB200] text-[#FFB200]" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-[#640D5F] text-[#640D5F] hover:bg-[#640D5F] hover:text-white">
              Read More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
