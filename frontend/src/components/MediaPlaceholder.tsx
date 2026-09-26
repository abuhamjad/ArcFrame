import { Video, Image, Upload } from 'lucide-react'

interface MediaPlaceholderProps {
  type: 'video' | 'image'
  label: string
  description: string
  aspect?: string
  darkMode?: boolean
}

export default function MediaPlaceholder({
  type,
  label,
  description,
  aspect = 'aspect-video',
  darkMode = false,
}: MediaPlaceholderProps) {
  const isVideo = type === 'video'

  return (
    <div
      className={`${aspect} w-full flex items-center justify-center ${
        darkMode ? 'bg-neutral-950' : 'bg-neutral-850'
      }`}
    >
      <div className="text-center p-8 max-w-md">
        <div
          className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center ${
            darkMode ? 'bg-neutral-900 border-gray-700' : 'bg-gray-200 border-gray-300'
          } border`}
        >
          {isVideo ? (
            <Video size={32} className="text-gray-500" />
          ) : (
            <Image size={32} className="text-gray-500" />
          )}
        </div>

        <p
          className={`text-sm font-semibold tracking-wider uppercase mb-2 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {label}
        </p>

        <p
          className={`text-sm ${
            darkMode ? 'text-gray-500' : 'text-gray-500'
          }`}
        >
          {description}
        </p>

        <div
          className={`mt-6 inline-flex items-center gap-2 text-xs px-4 py-2 ${
            darkMode
              ? 'bg-neutral-800 text-gray-400 border border-gray-700'
              : 'bg-gray-100 text-gray-600 border border-gray-300'
          }`}
        >
          <Upload size={14} />
          <span>Replace with your {isVideo ? 'video' : 'image'}</span>
        </div>
      </div>
    </div>
  )
}
