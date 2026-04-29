import type { Metadata } from 'next'
import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, Filter, Calendar, ArrowRight, Clock, Eye } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'

export const revalidate = 3

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/articles',
    title: 'Press Releases - Latest News & Updates',
    description: 'Browse the latest press releases and news updates from businesses and organizations across the UK.',
    keywords: ['press releases', 'news updates', 'media releases', 'company announcements'],
  })
}

// Mock data for press releases
const pressReleases = [
  {
    id: 1,
    title: 'Tech Startup Raises $10M in Series A Funding Round',
    excerpt: 'London-based fintech company announces major investment round to expand European operations and launch new AI-powered payment solutions.',
    category: 'Technology',
    date: '2024-01-15',
    author: 'Sarah Johnson',
    readTime: '3 min read',
    views: 1250,
    image: '/placeholder-tech.jpg',
  },
  {
    id: 2,
    title: 'Healthcare Partnership Aims to Revolutionize Patient Care',
    excerpt: 'Leading healthcare providers join forces to implement cutting-edge telemedicine solutions across 50 NHS trusts in the UK.',
    category: 'Healthcare',
    date: '2024-01-14',
    author: 'Michael Chen',
    readTime: '4 min read',
    views: 890,
    image: '/placeholder-healthcare.jpg',
  },
  {
    id: 3,
    title: 'Sustainable Fashion Brand Launches Eco-Friendly Collection',
    excerpt: 'British fashion house unveils new line made entirely from recycled materials, setting new industry standards for sustainability.',
    category: 'Fashion',
    date: '2024-01-13',
    author: 'Emma Williams',
    readTime: '2 min read',
    views: 2340,
    image: '/placeholder-fashion.jpg',
  },
  {
    id: 4,
    title: 'Real Estate Developer Announces Green Building Initiative',
    excerpt: 'Major property development company commits to carbon-neutral construction across all new projects starting in 2024.',
    category: 'Real Estate',
    date: '2024-01-12',
    author: 'David Brown',
    readTime: '5 min read',
    views: 1560,
    image: '/placeholder-realestate.jpg',
  },
  {
    id: 5,
    title: 'Educational Tech Platform Partners with UK Universities',
    excerpt: 'Innovative learning management system adopted by multiple universities to enhance student engagement and academic performance.',
    category: 'Education',
    date: '2024-01-11',
    author: 'Lisa Anderson',
    readTime: '3 min read',
    views: 980,
    image: '/placeholder-education.jpg',
  },
  {
    id: 6,
    title: 'Food Delivery Service Introduces Electric Vehicle Fleet',
    excerpt: 'Major food delivery platform announces transition to 100% electric vehicles in London by end of 2024, reducing carbon emissions.',
    category: 'Food & Beverage',
    date: '2024-01-10',
    author: 'James Wilson',
    readTime: '2 min read',
    views: 1870,
    image: '/placeholder-food.jpg',
  },
]

const categories = ['All Categories', 'Technology', 'Healthcare', 'Fashion', 'Real Estate', 'Education', 'Food & Beverage', 'Finance', 'Travel']

export default function PressReleasesPage({ searchParams }: { searchParams?: { category?: string; search?: string } }) {
  const currentCategory = searchParams?.category || 'All Categories'
  const searchQuery = searchParams?.search || ''

  return (
    <div className="min-h-screen bg-background">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-[#f8f4ff] to-[#faf0ff]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Press Releases & News
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest press releases and announcements from businesses and organizations across the UK.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search press releases..."
                  className="pl-10 h-12 text-base"
                  defaultValue={searchQuery}
                />
              </div>
              <Select defaultValue={currentCategory}>
                <SelectTrigger className="h-12 w-full sm:w-48">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Stats */}
      <section className="py-4 bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{pressReleases.length}</span> press releases
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="border-[#640D5F] text-[#640D5F]">
                <Calendar className="mr-2 h-4 w-4" />
                Latest First
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Press Release Grid */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pressReleases.map((release) => (
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
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {release.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {release.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {release.views}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#640D5F] transition-colors">
                    {release.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {release.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#f8f4ff] rounded-full flex items-center justify-center">
                        <span className="text-xs font-semibold text-[#640D5F]">
                          {release.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">{release.author}</span>
                    </div>
                    <Link href={`/articles/${release.id}`}>
                      <Button variant="link" className="text-[#640D5F] hover:text-[#4a0a47] p-0">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="py-8 bg-white border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Showing 1-6 of {pressReleases.length} results
            </p>
            <div className="flex gap-2">
              <Button variant="outline" disabled className="border-[#640D5F] text-[#640D5F]">
                Previous
              </Button>
              <Button className="bg-[#640D5F] hover:bg-[#4a0a47]">1</Button>
              <Button variant="outline" className="border-[#640D5F] text-[#640D5F]">2</Button>
              <Button variant="outline" className="border-[#640D5F] text-[#640D5F]">3</Button>
              <Button variant="outline" className="border-[#640D5F] text-[#640D5F]">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-[#640D5F] to-[#D91656] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Stay Updated with Latest Press Releases
          </h2>
          <p className="mt-4 text-xl opacity-90">
            Get the latest press releases delivered directly to your inbox.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder-white/70"
            />
            <Button className="bg-white text-[#640D5F] hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
