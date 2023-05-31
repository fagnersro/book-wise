import Image from 'next/image'

interface AvatarProps {
  width: number
  height: number
  source: string
}

export default function Avatar({ width, height, source }: AvatarProps) {
  return (
    <div className="h-[fit-content] w-[fit-content] rounded-full border-2 border-gray-300 object-cover">
      <Image
        className="rounded-full"
        src={source}
        width={width}
        height={height}
        alt=""
        quality={100}
        priority
      />
    </div>
  )
}
