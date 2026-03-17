import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Payments in Africa",
    excerpt: "Exploring how mobile money and fintech are transforming the African financial landscape.",
    date: "2024-01-15",
    author: "Sarah Johnson",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Building a Successful Payment Gateway: 5 Key Principles",
    excerpt: "Learn the essential factors for creating a robust and scalable payment infrastructure.",
    date: "2024-01-10",
    author: "Michael Chen",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Mobile Money Adoption Rates Soar Across Sub-Saharan Africa",
    excerpt: "New data shows unprecedented growth in mobile money transactions across the continent.",
    date: "2024-01-05",
    author: "Emma Okafor",
    category: "Market Analysis",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Regulatory Compliance in Fintech: What You Need to Know",
    excerpt: "Understanding the regulatory landscape for payment service providers in Africa.",
    date: "2023-12-28",
    author: "David Mwangi",
    category: "Compliance",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl text-white/80">
              Stay updated with the latest trends, news, and insights from the African fintech ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-[#6B2D7B] font-semibold hover:text-purple-800"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
