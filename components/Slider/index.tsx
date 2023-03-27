import React from 'react'
import './slick.css'
// import './slick-theme.css'
import Slider, { Settings } from 'react-slick'

const settings: Settings = {
  arrows: false,
  dots: false,
  speed: 500,
  slidesToShow: 4.5,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3.3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.4,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2.1,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.3,
        slidesToScroll: 1,
      },
    },
  ],
}

interface SliderProps {
  className?: string
  children: React.ReactNode
}
export function SliderComponent({ className, children }: SliderProps) {
  return (
    <Slider className={className} {...settings}>
      {children}
    </Slider>
  )
}
