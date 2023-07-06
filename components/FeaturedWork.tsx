import { Section } from '@/components'
import { Projects } from '@/lib/data'
import { ProjectTypes } from '@/lib/types'
import Image from 'next/image'

const FeaturedWork = () => (
  <Section id='work'>
    <h2 className='text-[38px] sm:text-[46px] md:text-[54px] tracking-tight font-semibold mb-10 w-fit'>
      Featured work
    </h2>
    <div className='space-y-8 md:space-y-10'>
      {Projects.map((item: ProjectTypes, i: number) => (
        <div key={item.title} className='w-full h-[575px] rounded-3xl flex flex-col-reverse lg:flex-row lg:items-center lg:sticky' style={{ top: `${100 + (i * 15)}px`, backgroundColor: item.bgColor, color: item.textColor || 'inherit' }}>
          <div className='lg:w-1/2 p-6 md:p-8'>
            <h3 className='sm:w-4/5 lg:w-full text-xl md:text-3xl font-light'>{item.title}</h3>
            <p className='sm:w-4/5 md:w-[95%] lg:w-full mt-4 mb-10 font-light text-xs md:text-base'>{item.description}</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
              {item.tags.map((tag: string) => (
                <div key={tag} className={`inline-block border-[1px] ${item.textColor ? 'border-[#303030] text-[#ffffffb2]' : 'border-[#8a8a8a99] text-[#222]'} text-center text-sm font-light rounded-full px-3 py-1`}>{tag}</div>
              ))}
            </div>
          </div>
          <div className='lg:w-1/2 h-full rounded-3xl relative overflow-clip'>
            <Image
              className='rounded-3xl'
              style={{ objectFit: 'cover' }}
              alt={item.title}
              src={item.image}
              fill
            />
          </div>
        </div>
      ))}
    </div>
  </Section >
)

export default FeaturedWork