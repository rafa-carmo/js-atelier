import React from 'react'
import './slick.css'

// import './slick-theme.css'
import Slider, { Settings } from 'react-slick'

const baseSettings: Settings = {
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
      breakpoint: 900,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.8,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

interface SliderProps {
  className?: string
  children: React.ReactNode
  settings?: Settings
}
export function SliderComponent({
  className,
  children,
  settings,
}: SliderProps) {
  return (
    <Slider className={className} {...baseSettings} {...settings}>
      {children}
    </Slider>
  )
}
