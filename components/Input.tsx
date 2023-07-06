import { useEffect, useRef, useState } from 'react'

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
  required?: boolean
  value: string
  type: string
}

const Input = ({ className, type, placeholder, required, value, onChange }: Props) => {
  const [isRequired, setisRequired] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const regularClass = 'block mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-[#e9e8e4] px-5 py-2.5 text-gray-700 focus:outline-none focus:ring focus:ring-opacity-40 focus:border-blue-400 focus:ring-blue-300'
  const requiredClass = 'block mt-2 w-full placeholder-gray-400/70 rounded-lg border border-red-400 bg-[#e9e8e4] px-5 py-2.5 text-gray-700 focus:outline-none focus:ring focus:ring-opacity-40 focus:border-red-400 focus:ring-red-300'

  useEffect(() => {
    const handleBlur = () => {
      if (required && value.trim() === '') {
        setisRequired(true)
      } else {
        setisRequired(false)
      }
    }

    const inputElement = inputRef.current
    if (inputElement) {
      inputElement.addEventListener('blur', handleBlur)
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener('blur', handleBlur)
      }
    }
  }, [value, required])

  return (
    <div>
      <input
        ref={inputRef}
        className={`${isRequired ? requiredClass : regularClass} ${className}`}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
        type={type}
      />
      {isRequired && <p className="mt-1.5 text-xs text-red-400">This field is required</p>}
    </div>
  )
}

export default Input