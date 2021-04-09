import Carousel from 'react-bootstrap/Carousel'
import background1 from './bg1.png'

const slides = [
  {'title': 'Primer Elemento', 'subtitle': 'Primer Elemento, un poco mejor explicado', 'img': background1},
  {'title': 'Segundo Elemento', 'subtitle': 'Segundo Elemento, un poco mejor explicado', 'img': background1},
  {'title': 'Tercer Elemento', 'subtitle': 'Tercer Elemento, un poco mejor explicado', 'img': background1},
  {'title': 'Cuarto Elemento', 'subtitle': 'Cuarto Elemento, un poco mejor explicado', 'img': background1},
]

const Slider = () => {
  return (
    <Carousel fade>
    {slides.map((slide) => (
      <Carousel.Item>
	<img
	  className="d-block w-100"
          src={slide.img}
	  alt={slide.title}
	/>
	<Carousel.Caption>
	  <h3>{slide.title}</h3>
	  <p>{slide.subtitle}</p>
	</Carousel.Caption>
      </Carousel.Item>
    ))}
    </Carousel>
  );
}

export default Slider;
