import { Star } from 'lucide-react'

export default function BigStar() {
  return (
    <div className="flex h-[100%] w-[100%] items-center justify-between">
      <Star className="h-[1.75rem] w-[1.75rem] text-purple-100" />
      <Star className="h-[1.75rem] w-[1.75rem] text-purple-100" />
      <Star className="h-[1.75rem] w-[1.75rem] text-purple-100" />
      <Star className="h-[1.75rem] w-[1.75rem] text-purple-100" />
      <Star className="h-[1.75rem] w-[1.75rem] text-purple-100" />
    </div>
  )
}
