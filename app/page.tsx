import { MainNav } from "@/components/main-nav";
import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Footer } from "@/components/footer";

// Mock data - replace with actual data fetching
const posts = [
  {
    title: "The Future of Remote Work",
    excerpt: "Exploring how remote work is reshaping the modern workplace...",
    author: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&quality=100",
    },
    category: "Business",
    date: "Mar 10, 2024",
    slug: "future-of-remote-work",
  },
];

// Empty card messages to encourage participation
const emptyCardMessages = [
  {
    title: "Share Your Tech Journey",
    excerpt: "Got insights about the latest technologies? Share your experiences and help others learn from your journey.",
    category: "Technology",
  },
  {
    title: "Design Inspiration Wanted",
    excerpt: "Are you passionate about design? Share your creative process and inspire fellow designers.",
    category: "Design",
  },
  {
    title: "Business Insights Welcome",
    excerpt: "Have valuable business lessons? Help others grow by sharing your entrepreneurial experiences.",
    category: "Business",
  },
  {
    title: "Write About Lifestyle",
    excerpt: "Your lifestyle tips could help others find balance. Share your perspective on modern living.",
    category: "Lifestyle",
  },
  {
    title: "Tech Tutorial Ideas",
    excerpt: "Know a programming language or tool really well? Create a tutorial and help others master it.",
    category: "Technology",
  },
  {
    title: "Share UX/UI Insights",
    excerpt: "Your design process could help others. Share your approach to creating user-friendly interfaces.",
    category: "Design",
  },
  {
    title: "Startup Stories Needed",
    excerpt: "Every startup journey has valuable lessons. Share yours and inspire future entrepreneurs.",
    category: "Business",
  },
  {
    title: "Productivity Tips",
    excerpt: "Got strategies for staying productive? Share your methods for managing work and life.",
    category: "Lifestyle",
  },
];

export default function Home() {
  // Combine real posts with empty cards
  const displayCards = [...posts];
  
  // Fill the remaining slots with empty cards
  while (displayCards.length < 8) {
    const emptyCard = emptyCardMessages[displayCards.length - 1];
    displayCards.push({
      title: emptyCard.title,
      excerpt: emptyCard.excerpt,
      author: {
        name: "Write for Us",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=64&h=64&fit=crop&quality=100",
      },
      category: emptyCard.category,
      date: "Start Writing",
      slug: "new",
      isEmpty: true,
    });
  }

  return (
    <main className="min-h-screen bg-background">
      <MainNav />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCards.map((post, i) => (
            <BlogCard 
              key={i} 
              {...post} 
              className={post.isEmpty ? "opacity-80 hover:opacity-100 transition-opacity" : ""}
            />
          ))}
        </div>
        
        <div className="fixed bottom-8 right-8 flex items-center space-x-4">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="bg-primary text-primary-foreground rounded-full px-4 py-2">
            20+ more
          </div>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Footer />
    </main>
  );
}