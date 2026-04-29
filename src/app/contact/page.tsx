import type { Metadata } from 'next'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Mail, Phone, MapPin, Clock, Send, FileText, Users, HeadphonesIcon, Building2, ArrowRight } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/contact',
    title: 'Contact Us - Press Release Distribution Support',
    description: 'Get in touch with Newsmidcentral for press release distribution services, support, and partnership opportunities.',
    keywords: ['contact', 'support', 'press release distribution', 'customer service'],
  })
}

const contactOptions = [
  {
    icon: FileText,
    title: 'Press Release Distribution',
    description: 'Submit your press release for distribution to our media network',
    email: 'distribution@newsmidcentral.com',
    phone: '+44 20 1234 5678',
  },
  {
    icon: Users,
    title: 'Partnership Opportunities',
    description: 'Explore partnership and collaboration opportunities with us',
    email: 'partnerships@newsmidcentral.com',
    phone: '+44 20 1234 5679',
  },
  {
    icon: HeadphonesIcon,
    title: 'Customer Support',
    description: 'Get help with your account, billing, or technical issues',
    email: 'support@newsmidcentral.com',
    phone: '+44 20 1234 5670',
  },
  {
    icon: Building2,
    title: 'Media Inquiries',
    description: 'For journalists seeking information about Newsmidcentral',
    email: 'media@newsmidcentral.com',
    phone: '+44 20 1234 5671',
  },
]

const officeLocations = [
  {
    city: 'London',
    address: '123 Fleet Street, London EC4A 2AB',
    phone: '+44 20 1234 5678',
    email: 'london@newsmidcentral.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
  },
  {
    city: 'Manchester',
    address: '456 Deansgate, Manchester M3 4FG',
    phone: '+44 161 234 5678',
    email: 'manchester@newsmidcentral.com',
    hours: 'Monday - Friday: 9:00 AM - 5:00 PM',
  },
]

const faqs = [
  {
    question: 'How quickly can my press release be distributed?',
    answer: 'We offer same-day distribution for press releases submitted before 12 PM GMT. Express distribution options are available for urgent releases.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We distribute press releases across all industries including technology, healthcare, finance, fashion, real estate, and more.',
  },
  {
    question: 'Do you offer writing services?',
    answer: 'Yes, we have professional writers who can help craft your press release for maximum impact.',
  },
  {
    question: 'Can I track the performance of my press release?',
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
              We're here to help with your press release distribution needs. Reach out to our team for expert support and guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How Can We Help You?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Choose the right contact option for your specific needs
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactOptions.map((option) => (
              <Card key={option.title} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="mx-auto w-12 h-12 bg-[#f8f4ff] rounded-full flex items-center justify-center mb-4">
                  <option.icon className="h-6 w-6 text-[#640D5F]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span className="text-[#640D5F]">{option.email}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>{option.phone}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Locations */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
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
                      <SelectItem value="distribution">Press Release Distribution</SelectItem>
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

            {/* Office Locations */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
              <div className="space-y-6">
                {officeLocations.map((office) => (
                  <Card key={office.city} className="p-6">
                    <h3 className="text-lg font-semibold mb-4">{office.city}</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-[#640D5F] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{office.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-[#640D5F]" />
                        <span className="text-gray-700">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-[#640D5F]" />
                        <span className="text-[#640D5F]">{office.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-[#640D5F]" />
                        <span className="text-gray-700">{office.hours}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#640D5F] to-[#D91656] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Distribute Your Press Release?
          </h2>
          <p className="mt-4 text-xl opacity-90">
            Get started today and reach thousands of media contacts with your news.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-white text-[#640D5F] hover:bg-gray-100">
              Get Started Now
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
