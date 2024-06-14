import { dataSlider } from "@/data";
import Title from "./shared/title";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";

const AboutMe = () => {
    return (
      <div className="p-6 md:px-12 md:py-40 max-w-5xl mx-auto" id="about-me">
          <Title title="" subtitle="Sobre mi" />

          <div className="grid md:grid-cols-2">
              <div className="py-12 md:py-0 flex items-center justify-center">
                <Carousel
                opts={{
                    align: "start"
                }}
                orientation="vertical"
                className="w-full max-w-xs h-fit"
                >
                    <CarouselContent className="mt-1 h-[450px]">
                        {dataSlider.map((data) =>(
                            <CarouselItem key={data.id}>
                                <div className="flex items-center justify-center">
                                    <Image 
                                    src={data.url}
                                    alt="Image"
                                    width={250} height={300}
                                    className="w-full h-auto rounded-lg" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
              </div>
              <div>
                <p className="my-8">Soy un apasionado de la tecnología y disfruto profundizando en todos sus aspectos, aprendiendo cada día algo nuevo. Me encanta sentarme frente a una pantalla para programar, ya sea por trabajo o por entretenimiento. Actualmente, como se puede ver en mi CV, trabajo en atención al cliente en ventas al por menor y al por mayor. Esta experiencia me ha proporcionado valiosos conocimientos en áreas administrativas, contables y de gestión de datos.
                                    <br />
                                    <br />
                                    En mi tiempo libre, disfruto del ciclismo, explorando diversos lugares sobre dos ruedas. Además, soy un entusiasta de los juegos de estrategia y simulación, como Cities: Skylines y Age of Evolution, que me permiten desafiar y desarrollar mi pensamiento crítico y creativo.</p>
                <Button>
                    <Phone size={20} className="mr-2" />Hablamos
                </Button>
              </div>
          </div>
      </div>
    );
}

export default AboutMe;