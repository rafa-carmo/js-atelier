'use client'
import { SliderComponent } from '@/components/Slider'
import { PostCard, PostCardProps } from '@/components/Post-Card'

interface SliderPostsProps {
  posts: PostCardProps[]
}

export default function SliderPosts({ posts }: SliderPostsProps) {
  return (
    <SliderComponent className="my-24">
      {posts.map((item) => (
        <PostCard key={item.id} {...item} scale />
      ))}
    </SliderComponent>
  )
}
