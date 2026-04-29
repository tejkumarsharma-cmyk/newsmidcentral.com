import type { Metadata } from 'next'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Star, ArrowRight, Zap, Users, BarChart3, Shield } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/pricing',
    title: 'Pricing Plans - Press Release Distribution Services',
    description: 'Choose the perfect press release distribution plan for your business. From basic to enterprise solutions.',
    keywords: ['press release pricing', 'PR distribution costs', 'media distribution plans'],
  })
}

const pricingPlans = [
  {
    name: 'Basic',
    price: '£199',
    period: 'per release',
    description: 'Perfect for small businesses and startups',
    features: [
      'Distribution to 500+ media contacts',
      'Basic analytics and reporting',
      '24-hour distribution',
      'Email support',
      'Standard press release template',
      '1 revision included',
    ],
    excluded: [
      'Media monitoring',
      'Custom targeting',
      'Priority distribution',
      'Dedicated account manager',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '£499',
    period: 'per release',
    description: 'Ideal for growing businesses and agencies',
    features: [
      'Distribution to 1,000+ media contacts',
      'Advanced analytics and reporting',
      '12-hour distribution',
      'Priority email & phone support',
      'Custom press release templates',
      '3 revisions included',
      'Media monitoring for 7 days',
      'Industry-specific targeting',
      'SEO optimization',
    ],
    excluded: [
      'Dedicated account manager',
      'White-label options',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '£999',
    period: 'per release',
    description: 'Complete solution for large enterprises',
    features: [
      'Distribution to 2,000+ media contacts',
      'Real-time analytics dashboard',
      '6-hour express distribution',
      '24/7 dedicated support',
      'Custom branding templates',
      'Unlimited revisions',
      'Extended media monitoring (30 days)',
      'Advanced targeting options',
      'Full SEO optimization',
      'Dedicated account manager',
      'White-label distribution options',
      'Monthly performance reports',
    ],
    excluded: [],
    highlighted: false,
  },
]

const addOns = [
  {
    name: 'Media Monitoring Plus',
    price: '£99',
    period: 'per month',
    description: 'Extended monitoring and alerts for 90 days',
    features: ['Real-time media alerts', 'Comprehensive coverage report', 'Competitor tracking'],
  },
  {
    name: 'Professional Writing Service',
    price: '£299',
    period: 'one-time',
    description: 'Our expert team writes your press release',
    features: ['Professional copywriting', 'SEO optimization', '2 revisions included'],
  },
  {
    name: 'Translation Service',
    price: '£149',
    period: 'per language',
    description: 'Translate your press release for international distribution',
    features: ['Professional translation', 'Cultural adaptation', 'Distribution to international media'],
  },
]

const faqs = [
  {
    question: 'What\'s included in the distribution network?',
    answer: 'Our network includes national newspapers, regional publications, trade magazines, online news sites, bloggers, and broadcast media contacts across the UK and internationally.',
  },
  {
    question: 'Can I target specific industries or regions?',
    answer: 'Yes! Our Pro and Premium plans include advanced targeting options to reach specific industries, geographic regions, or types of media outlets.',
  },
  {
    question: 'How quickly will my press release be distributed?',
    answer: 'Basic plans offer 24-hour distribution, Pro plans include 12-hour priority distribution, and Premium plans feature 6-hour express distribution.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a full refund if we\'re unable to distribute your press release due to content violations or technical issues within our control.',
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately for future releases.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#f8f4ff] to-[#faf0ff]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-[#640D5F] text-white">Transparent Pricing</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Choose Your Press Release Distribution Plan
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent pricing for businesses of all sizes. No hidden fees, no long-term contracts.
            </p>
            
            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-[#FFB200] text-[#FFB200]" />
                <span className="text-sm text-gray-600">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-[#640D5F]" />
                <span className="text-sm text-gray-600">500+ Companies</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-[#EB5B00]" />
                <span className="text-sm text-gray-600">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.highlighted ? 'border-[#640D5F] shadow-2xl scale-105' : 'border-gray-200 shadow-lg'}`}>
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#640D5F] text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-[#640D5F]">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-gray-600">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#EB5B00] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.excluded.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 opacity-50">
                        <div className="h-5 w-5 border-2 border-gray-300 rounded-full flex-shrink-0 mt-0.5" />
                        <span className="text-gray-500 line-through">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`mt-8 w-full ${plan.highlighted ? 'bg-[#640D5F] hover:bg-[#4a0a47]' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Every Release Includes
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              All plans come with essential features to ensure your press release reaches the right audience
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: BarChart3,
                title: 'Detailed Analytics',
                description: 'Track opens, clicks, and media pickups with comprehensive reporting',
              },
              {
                icon: Users,
                title: 'Media Database',
                description: 'Access to our extensive network of journalists and media contacts',
              },
              {
                icon: Shield,
                title: 'Quality Assurance',
                description: 'Professional review to ensure your press release meets editorial standards',
              },
              {
                icon: Zap,
                title: 'Fast Distribution',
                description: 'Quick distribution to ensure timely news coverage',
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <div className="mx-auto w-12 h-12 bg-[#f8f4ff] rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-[#640D5F]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Enhance Your Distribution
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Add-on services to maximize your press release impact
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {addOns.map((addon, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{addon.name}</h3>
                    <div className="mt-1">
                      <span className="text-2xl font-bold text-[#640D5F]">{addon.price}</span>
                      <span className="text-gray-600 ml-1">{addon.period}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-[#640D5F] text-[#640D5F] hover:bg-[#640D5F] hover:text-white">
                    Add
                  </Button>
                </div>
                <p className="text-gray-600 mb-4">{addon.description}</p>
                <ul className="space-y-2">
                  {addon.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-[#EB5B00]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button className="bg-[#640D5F] hover:bg-[#4a0a47]">
              Contact Support
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
            Join hundreds of businesses trust Newsmidcentral for their press release distribution needs.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-white text-[#640D5F] hover:bg-gray-100">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#640D5F]">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
