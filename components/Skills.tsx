import { Skills } from '@/lib/data'
import { SkillTypes } from '@/lib/types'
import { Section } from '@/components'

const Expertise = () => (
  <Section id='skills'>
    <h2 className='text-[38px] sm:text-[46px] md:text-[54px] lg:text-[72px] text-left lg:text-center tracking-tight font-semibold mb-16'>Skills & Expertise</h2>
    <div className='grid lg:grid-cols-2 gap-6'>
      {Skills.map((item: SkillTypes) => (
      <div className='flex items-start p-6 rounded-3xl bg-[#DFDDD9]'>
        <div className='mr-4 mt-0.5'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
          </svg>
        </div>
        <div>
          <h3 className='text-xl font-medium'>{item.skill}</h3>
          <p className='text-sm'>{item.description}</p>
        </div>
      </div>
      ))}
    </div>
    
  </Section>
)


export default Expertise
