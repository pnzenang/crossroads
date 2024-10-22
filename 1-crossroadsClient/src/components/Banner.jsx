import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sentences from '../utils/sentences';

function Banner() {
  const settings = {
    // dots: false,
    // infinite: true,
    // slidesToShow: 2,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 10000,
    // pauseOnHover: true,

    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 10,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
  };
  return (
    <div className='slider-container content-center  border-red-400 bg-primary text-white'>
      <Slider {...settings}>
        {sentences.map((sentence) => {
          return (
            <div key={sentence.name.length} className=''>
              <h2 className='text-[10px] font-bold sm:text-xl my-10 mx-5 p-2 border-secondary border-4 bg-indigo-600  rounded-lg min-h-20'>
                {sentence.name}
              </h2>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Banner;
