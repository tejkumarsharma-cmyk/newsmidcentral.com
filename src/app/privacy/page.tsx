import type { Metadata } from 'next'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { buildPageMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/privacy',
    title: 'Privacy Policy - Newsmidcentral',
    description: 'Read the privacy policy for Newsmidcentral press media distribution platform.',
    keywords: ['privacy policy', 'data protection', 'press media distribution'],
  })
}

const sections = [
  { 
    title: 'Information We Collect', 
    body: 'We collect account information, contact details, press media content, and usage analytics to provide our distribution services. This includes name, email, company information, and payment details for service delivery.'
  },
  { 
    title: 'How We Use Your Information', 
    body: 'Your information is used to deliver press media distribution services, process payments, provide customer support, and improve our platform. We analyze usage patterns to enhance service quality and user experience.'
  },
  { 
    title: 'Data Sharing and Distribution', 
    body: 'Your press media are shared with our media network of journalists and publications. Personal information is never sold or shared with third parties for marketing purposes without your explicit consent.'
  },
  { 
    title: 'Data Security', 
    body: 'We implement industry-standard security measures including encryption, secure servers, and regular security audits to protect your data from unauthorized access, alteration, or destruction.'
  },
  { 
    title: 'Your Rights and Choices', 
    body: 'You have the right to access, update, or delete your personal information. You can manage email preferences, export your data, or request account deletion at any time through your account settings.'
  },
  { 
    title: 'Cookies and Tracking', 
    body: 'We use essential cookies for platform functionality and analytics cookies to understand user behavior. You can control cookie preferences through your browser settings.'
  },
  { 
    title: 'International Data Transfers', 
    body: 'Your data may be processed and stored in secure data centers within the UK and EU. We ensure adequate protection for any international data transfers in compliance with GDPR requirements.'
  },
  { 
    title: 'Policy Updates', 
    body: 'We may update this privacy policy to reflect changes in our practices or legal requirements. Significant changes will be communicated via email or prominent website notice.'
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#f8f4ff] to-[#faf0ff]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-[#640D5F] text-white">Privacy & Security</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              How we collect, use, and protect your information on Newsmidcentral.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm text-gray-500">Last updated: March 16, 2026</p>
          </div>
          
          <div className="space-y-6">
            {sections.map((section) => (
              <Card key={section.title} className="border-[#640D5F]/20 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#640D5F] mb-3">{section.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{section.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Information */}
          <Card className="mt-12 border-[#D91656]/20 bg-gradient-to-br from-[#fef7ff] to-[#faf0ff]">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Privacy Questions?</h3>
              <p className="text-gray-600 mb-6">
                If you have any questions about our privacy practices or need to exercise your data rights, please contact our privacy team.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-full bg-[#640D5F] px-6 py-3 text-white hover:bg-[#4a0a47] transition-colors"
                >
                  Contact Privacy Team
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-full border border-[#640D5F] px-6 py-3 text-[#640D5F] hover:bg-[#640D5F] hover:text-white transition-colors"
                >
                  General Support
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
