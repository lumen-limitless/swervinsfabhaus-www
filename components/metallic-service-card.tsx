import { cn } from "@/lib/utils"
import Image from "next/image"

interface MetallicServiceCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  imageSrc: string
}

export function MetallicServiceCard({
  title,
  description,
  icon,
  imageSrc,
}: MetallicServiceCardProps) {
  return (
    <div className="group relative h-full w-full transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Metallic background with slanted edges */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-300 via-zinc-400 to-zinc-500 shadow-md skew-y-1 transform-gpu" />
      
      {/* Content container */}
      <div className="relative z-10 flex h-full flex-col overflow-hidden rounded-sm border border-zinc-700/20 bg-gradient-to-br from-zinc-200 via-zinc-300 to-zinc-400 p-6 shadow-md">
        {/* Highlight edge */}
        <div className="absolute -right-1 -top-1 h-16 w-16 bg-gradient-to-br from-yellow-300 to-yellow-500 skew-x-12 skew-y-12" />
        
        {/* Image background with overlay */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-1 flex-col">
          {icon && <div className="mb-4 text-yellow-600">{icon}</div>}
          <h3 className="mb-3 text-xl font-bold text-zinc-900">{title}</h3>
          <div className="mb-2 h-1 w-12 bg-yellow-500" />
          <p className="flex-1 text-zinc-700">{description}</p>
          
          {/* Metallic button */}
          <div className="mt-6">
            <button className="group/btn relative overflow-hidden rounded-sm bg-gradient-to-r from-zinc-700 to-zinc-800 px-4 py-2 text-sm font-medium text-white transition-all hover:from-zinc-800 hover:to-zinc-900">
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:opacity-20"></span>
            </button>
          </div>
        </div>
        
        {/* Rivets decoration */}
        <div className="absolute left-3 top-3 h-2 w-2 rounded-full bg-zinc-700" />
        <div className="absolute bottom-3 left-3 h-2 w-2 rounded-full bg-zinc-700" />
        <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-zinc-700" />
        <div className="absolute bottom-3 right-3 h-2 w-2 rounded-full bg-zinc-700" />
      </div>
    </div>
  )
}
