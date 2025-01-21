import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PenLine } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  date: string;
  slug: string;
  isEmpty?: boolean;
  className?: string;
}

export function BlogCard({ 
  title, 
  excerpt, 
  author, 
  category, 
  date, 
  slug,
  isEmpty,
  className 
}: BlogCardProps) {
  return (
    <Link href={isEmpty ? "/new" : `/post/${slug}`}>
      <Card className={cn(
        "h-full overflow-hidden hover:shadow-lg transition-all duration-200",
        isEmpty && "border-dashed hover:border-primary",
        className
      )}>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src={author.avatar} />
              <AvatarFallback>
                {isEmpty ? <PenLine className="h-4 w-4" /> : author.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{author.name}</p>
              <p className="text-xs text-muted-foreground">{date}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{excerpt}</p>
        </CardContent>
        <CardFooter>
          <span className={cn(
            "text-xs",
            isEmpty ? "text-primary font-medium" : "text-muted-foreground"
          )}>
            {category}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}