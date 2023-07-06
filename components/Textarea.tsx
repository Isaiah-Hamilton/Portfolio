import { useEffect, useRef, useState } from 'react'

type Props = {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  className?: string
  required?: boolean
  value: string
}

const Textarea = ({ className, placeholder, required, value, onChange }: Props) => {
  const [isRequired, setisRequired] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const regularClass = 'block mt-4 w-full  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-[#e9e8e4] px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
  const requiredClass = 'block mt-4 w-full  placeholder-gray-400/70 rounded-lg border border-red-400 bg-[#e9e8e4] px-4 h-32 py-2.5 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40'

  useEffect(() => {
    const handleBlur = () => {
      if (required && value.trim() === '') {
        setisRequired(true)
      } else {
        setisRequired(false)
      }
    }

    const textareaElement = textareaRef.current
    if (textareaElement) {
      textareaElement.addEventListener('blur', handleBlur)
    }

    return () => {
      if (textareaElement) {
        textareaElement.removeEventListener('blur', handleBlur)
      }
    }
  }, [value, required])

  return (
    <div>
      <textarea
        ref={textareaRef}
        className={`${isRequired ? requiredClass : regularClass} ${className}`}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
      />
      {isRequired && <p className="mt-1.5 text-xs text-red-400">This field is required</p>}
    </div>
  )
}

export default Textarea