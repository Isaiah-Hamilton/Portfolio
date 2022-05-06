import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'

const repeat = (num: any, times: any) => {
  let result = ''
  for (let i = 0; i < times; i++) {
    result += num
  }
  return result
}

const Testimonials = () => {
  return (
    <div className="testimonials section" id="testimonials">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-center sm:text-5xl mb-10">
          Read trusted reviews from customers
        </h2>

        <div className="swiper-container">
          <Swiper
            spaceBetween={32}
            slidesPerView={1}
            autoplay={{
              delay: 8000,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            style={{ padding: '2rem 1rem 2rem 1rem' }}
          >
            <div className="swiper-wrapper">
              {/*{data.testimonial.map((testimonial, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="swiper-slide">
                      <blockquote className="p-8 bg-gray-100 shadow-lg rounded-lg">
                        <div className="flex items-center">
                          <Image
                            src={testimonial.image}
                            alt="testimonial image"
                            className="rounded-full"
                            width={64}
                            height={64}
                          />
                          <div className="ml-4">
                            <div className="rating">{repeat('⭐️ ', testimonial.rating)}</div>

                            <p className="mt-1 text-lg font-medium text-gray-700">
                              {testimonial.name}
                            </p>
                          </div>
                        </div>

                        <p className="mt-4 text-gray-500">{testimonial.quote}</p>
                      </blockquote>
                    </div>
                  </SwiperSlide>
                )
              })}*/}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
