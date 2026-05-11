import Link from 'next/link'
import type { Metadata } from 'next'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Mail, Phone, Send, ArrowRight } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/contact',
    title: 'Contact Us - Press Media Distribution Support',
    description: 'Get in touch with Newsmidcentral for press media distribution services, support, and partnership opportunities.',
    keywords: ['contact', 'support', 'press media distribution', 'customer service'],
  })
}


const faqs = [
  {
    question: 'How quickly can my press media be distributed?',
    answer: 'We offer same-day distribution for press media submitted before 12 PM GMT. Express distribution options are available for urgent releases.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We distribute press media across all industries including technology, healthcare, finance, fashion, real estate, and more.',
  },
  {
    question: 'Do you offer writing services?',
    answer: 'Yes, we have professional writers who can help craft your press media for maximum impact.',
  },
  {
    question: 'Can I track the performance of my press media?',
    answer: 'Yes, all our plans include detailed analytics and reporting to track media pickups and engagement.',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#f8f4ff] to-[#faf0ff]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-[#640D5F] text-white">Get in Touch</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Contact Newsmidcentral
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help with your press media distribution needs. Reach out to our team for expert support and guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto w-full">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input placeholder="John" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Doe" className="h-12" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="john@example.com" className="h-12" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="+44 20 1234 5678" className="h-12" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="distribution">Press Media Distribution</SelectItem>
                      <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                      <SelectItem value="support">Customer Support</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                      <SelectItem value="media">Media Inquiry</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us more about your needs..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-[#640D5F] hover:bg-[#4a0a47] h-12">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="py-16 bg-[#640D5F] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Distribute Your Press Media?
          </h2>
          <p className="mt-4 text-xl opacity-90">
            Get started today and reach thousands of media contacts with your news.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild className="bg-white text-[#640D5F] hover:bg-gray-100 font-semibold">
              <Link href="/register">Get Started Now</Link>
            </Button>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
