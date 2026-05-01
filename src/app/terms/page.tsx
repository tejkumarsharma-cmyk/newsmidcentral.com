import type { Metadata } from 'next'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/terms',
    title: 'Terms of Service - Newsmidcentral',
    description: 'Read the terms of service for Newsmidcentral press release distribution platform.',
    keywords: ['terms of service', 'legal', 'press release distribution'],
  })
}

const sections = [
  { 
    title: "Press Release Distribution Services", 
    body: "Our press release distribution services are provided on a per-release basis. Each submission includes distribution to our media network and basic analytics reporting."
  },
  {
    title: "Content Guidelines",
    body: "All press releases must be factual, newsworthy, and comply with UK media standards. We reserve the right to reject content that is misleading, defamatory, or illegal."
  },
  { 
    title: "Payment Terms", 
    body: "Payment is required before distribution. We offer refunds if distribution fails due to technical issues on our end. All prices are in GBP and exclusive of VAT where applicable."
  },
  {
    title: "Media Network Access",
    body: "We provide access to our network of journalists and media outlets. We cannot guarantee specific media pickup but ensure broad distribution across relevant channels."
  },
  {
    title: "User Responsibilities",
    body: "Users are responsible for the accuracy and legality of their press releases. You must have the right to distribute all content submitted to our platform."
  },
  {
    title: "Service Limitations",
    body: "We strive for 99.9% uptime but cannot guarantee uninterrupted service. We are not liable for losses resulting from service interruptions or third-party actions."
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#f8f4ff] to-[#faf0ff]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-[#640D5F] text-white">Legal Information</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              The rules and guidelines for using {SITE_CONFIG.name} press release distribution services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Terms?</h3>
              <p className="text-gray-600 mb-6">
                If you have any questions about our terms of service, please don't hesitate to contact our legal team.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a 
                  href="mailto:legal@newsmidcentral.com" 
                  className="inline-flex items-center justify-center rounded-full bg-[#640D5F] px-6 py-3 text-white hover:bg-[#4a0a47] transition-colors"
                >
                  Contact Legal Team
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
