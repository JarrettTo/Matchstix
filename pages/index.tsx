import type { NextPage } from 'next';
import VectorBG from '../public/hero/bg_vector.svg'
import Feature1 from '../public/hero/feature-1.svg'
import Event1 from '../public/hero/event-1.jpg'
import Event2 from '../public/hero/event-2.jpg'
import Event3 from '../public/hero/event-3.jpg'
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import animationData from '../utils/animation';
import FilmBG from '../public/hero/film_bg.svg'
import Film1 from '../public/hero/film1.jpg'
import Film2 from '../public/hero/film2.jpg'
import Film3 from '../public/hero/film3.jpg'
import Film4 from '../public/hero/film4.jpg'
import Film5 from '../public/hero/film5.jpg'
import Img1 from '../public/hero/1.jpg'
import Img2 from '../public/hero/2.jpg'
import Img3 from '../public/hero/3.jpg'
import Img4 from '../public/hero/4.jpg'
import Img5 from '../public/hero/5.jpg'
import Img6 from '../public/hero/6.jpg'
import Star from '../public/hero/star.png'
import Ticket from '../public/hero/ticket.png'
import Camera from '../public/hero/camera.png'
import Overlay from '../public/hero/overlay.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/styles.module.css';
import { cn } from '../utils/cn';
import { ButtonsCard } from '../components/ui/button';
import { FormComponent } from '../components/typeform';
import Head from 'next/head';
const Home: NextPage = () => {
  const animationContainer = useRef<HTMLDivElement>(null);
    const animationInstance = useRef<any>(null);
    const joinDivRef = useRef<HTMLDivElement>(null);
    
    const [fixed, setFixed] = useState(true)
    const [slideSettings, setSlideSettings] = useState({
      dots: false,
      infinite: true,
      speed: 5000,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      variableWidth: false,
      pauseOnHover: false,
    });
  
    const scrollToDiv = () => {
      joinDivRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    
    useEffect(() => {
        if (animationContainer.current) {
            animationInstance.current = lottie.loadAnimation({
                container: animationContainer.current,
                renderer: 'svg',
                loop: false,
                autoplay: false,
                animationData: animationData
            });
        }
        animationInstance.current.addEventListener('DOMLoaded', () => {
          const totalFrames = animationInstance.current.totalFrames;
          const seventyFivePercentFrame = totalFrames * 0.5;

          
      });

        const handleScroll = () => {
          if (animationContainer.current) {
            const rect = animationContainer.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const isInMiddle = rect.top + rect.height / 2 < windowHeight / 2 && rect.top + rect.height / 2 > windowHeight / 2 - rect.height / 2;

            if (isInMiddle) {
                setFixed(true);
            } 
        }
            const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
            const totalFrames = animationInstance.current.totalFrames;
            const frame = totalFrames * scrollPercentage;
            animationInstance.current.goToAndStop(frame, true);
        };

        window.addEventListener('scroll', handleScroll);
        function updateSliderSettings() {
          const width = window.innerWidth;
          let slidesToShow = 5;
          let variableWidth = false;
          if (width < 600) {
            slidesToShow = 1;
            variableWidth = true;
          } else if (width < 1024) {
            slidesToShow = 2;
            variableWidth = false;
          }
          setSlideSettings((prevSettings) => ({
            ...prevSettings,
            slidesToShow,
            variableWidth
          }));
        }
    
        updateSliderSettings();
        window.addEventListener('resize', updateSliderSettings);
    


        return () => {
          window.removeEventListener('resize', updateSliderSettings);
            window.removeEventListener('scroll', handleScroll);
            animationInstance.current?.destroy();
        };
    }, []);
    const films = [Img1, Img4, Img2, Film4, Film5];
  return (
    <>
    
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova&display=swap" rel="stylesheet"></link>
      

    </Head>
    <div style={{scrollBehavior:'smooth'}}>
    
      <section id="hero" className="bg-black flex flex-col items-center justify-center" style={{width: '100%', height: '100vh', overflow: 'hidden', position:'relative', scrollBehavior:'smooth', zIndex:'99'}}>
        
        <video id="background-video" muted loop autoPlay playsInline style={{ width: '100%', height: '100%', objectFit: 'cover',fontWeight: 'bold',  position:'absolute', zIndex:'100', top: 0, left: 0 }}>
          <source src="/hero/bg_video.mp4" type="video/mp4" />
        </video>
        <div className='flex flex-col relative w-full h-full justify-center items-center' style={{width:'100%', height:'60%'}}>
        
          <div className='flex flex-row justify-center w-7/10' style={{ textAlign: 'center', color: 'white',  position:'relative' }}>
            <Image src={VectorBG} className="px-12" alt="vector" width={40} height={10} style={{ width: '70%', objectFit: 'cover', fontWeight: 'bold', zIndex: 150, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />            
            <header className={styles['p-styled']}>
            Find new experiences<br/>with new people.
            </header>
            
          </div>
          
          <div className='flex flex-row w-7/10 justify-between mt-2 sm:mt-2 md:mt-2 lg:mt-7'>
            <div style={{ display: 'flex', alignItems: 'center', zIndex:200 }}>
              <p className={styles['hero-button']}>
                about us
              </p>
              <span className={styles['span-divider']}>|</span>
              <p className={styles['hero-button']} onClick={scrollToDiv}>
                join us
              </p>
              <span className={styles['span-divider']}>|</span>
              <p className={styles['hero-button']} onClick={scrollToDiv}>
                organize
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col relative justify-center items-center' style={{width:'100%', marginTop:'100px', zIndex:200 }}>
          <div className='flex flex-row w-10/10 justify-between'>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent:'between', width:'100%', height:'30px' }}>
              {/* Instagram Button */}
              <div onClick={()=>{window.location.href="https://www.instagram.com/matchstix.ph"}} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginRight:'60px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="#FFF1D6">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#FFF1D6"/>
                  <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#FFF1D6"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#FFF1D6"/>
                </svg>
                
              </div>
              
              
              {/* Twitter Button */}
              <div  onClick={()=>{window.location.href="https://www.facebook.com/profile.php?id=61560194810198&mibextid=LQQJ4d"}} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginRight:'60px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF1D6" width="29px" height="29px" viewBox="0 0 24 24">
                <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"/>
              </svg>
                                
              </div>
              
              {/* TikTok Button */}
              <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF1D6" width="25px" height="25px" viewBox="0 0 32 32" version="1.1">
                <title>tiktok</title>
                <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"/>
                </svg>
                
              </div>
            </div>
          </div>
          <div style={{ marginTop:'15px',height:'30px', maxWidth:'75%'}}>
    
            <p className={styles['copyright']}>
              © 2024 Matchstix. All rights reserved. Unauthorized use or reproduction is strictly prohibited. Waffle Daffle.
            </p>
          </div>
          
        </div>
      </section>


      <section id="features"  className="h-[50rem] w-full dark:bg-black bg-black  relative flex items-center justify-center" style={{height:'150vh', width:'100%', position:'relative'}}>
        <div style={{position:'absolute', width:'100%', height:'100%', backgroundImage:`url('/hero/overlay.jpg')`, mixBlendMode: 'screen', opacity:'10%', zIndex:20}}>

        </div>
        <div className="flex flex-col justify-center items-center" style={{
          zIndex:49,
          height: '100vh', // Adjust height as needed
          width: '100%', // Adjust width as needed

          position: fixed? 'fixed' : 'relative',top: '50%', transform: 'translateY(-50%)',
        }}>
          <header className={styles['p-styled-2']}>
            Right place. Right time.<br/>
            Right people.
          </header>
          <h2 className={styles['p-styled-sub']}>
            We match you with events and hangouts with the people that we know you'll vibe with to create the perfect experience.
          </h2>
    
        </div>
        <div ref={animationContainer} className={styles['animation']} style={{  zIndex:50,height: 'auto', margin: '0 auto', position: fixed? 'fixed' : 'relative',top: '50%', transform: 'translateY(-50%)' }}></div>
      </section>
      
      <section id="events" className={`${styles['events']} bg-darkgray flex flex-col w-10/10 py-14`} style={{position:'relative', zIndex:100, justifyContent:'center', paddingTop:'100px', paddingBottom:'100px', overflow:'hidden'}}>
        <div style={{position:'absolute', width:'100%', height:'100%', backgroundImage:`url('/hero/overlay.jpg')`, mixBlendMode: 'screen', opacity:'30%'}}>

        </div>
        <div className={styles['star']} >
            <Image
              src={Star}
              height="1000"
              width="1000"
              className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
        </div>
        <div className={styles['ticket']} >
            <Image
              src={Ticket}
              height="1000"
              width="1000"
              className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
        </div>
        <div className={styles['camera']} >
            <Image
              src={Camera}
              height="1000"
              width="1000"
              className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
        </div>
      
        <div className='flex flex-col relative ml-14 mr-0 px-0 w-10/10'>
          <p className={styles['p-styled-3']}>
            Our recent events.
          </p>

        </div>
        <div className="flex flex-col lg:flex-row justify-center mt-14 mb-10" style={{position:'relative',zIndex:100}}>
          <div className={styles['card1']} >
          <CardContainer className="inter-var py-0 mx-0 my-0 w-9/10">
            <CardBody className="bg-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full  h-auto rounded-xl p-4 border  ">
              
              <CardItem
                translateZ="100"
                rotateX={0}
                rotateZ={0}
                className="w-full mt-4"
              
              >
                <Image
                  src={Img3}
                  height="1000"
                  width="1000"
                  className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Party Event At Poblacion"
                />
              </CardItem>
              <CardItem
                translateZ="30"
                className="text-xl font-bold text-black mt-6 dark:text-white"
              >
                House party at Kaye's
              </CardItem>
              <CardItem
                as="p"
                translateZ="30"
                className="text-black text-sm max-w-sm dark:text-neutral-300"
              >
                April 12, 2024
              </CardItem>
            </CardBody>
          </CardContainer>
          </div>
          <div className={styles['card2']} style={{  }}>
          <CardContainer className="inter-var px-2 py-0 mx-0 my-0 w-5/10">
            <CardBody className="bg-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full  h-auto rounded-xl p-4 border  ">
              
              <CardItem
                translateZ="100"
                rotateX={0}
                rotateZ={0}
                className="w-full mt-4"
              >
                <Image
                  src={Img6}
                  height="1000"
                  width="1000"
                  className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Party Event At BGC"
                />
              </CardItem>
              <CardItem
                translateZ="30"
                className="text-xl font-bold text-black mt-6 dark:text-white"
              >
                Night at Clubhouse, BGC
              </CardItem>
              <CardItem
                as="p"
                translateZ="30"
                className="text-black text-sm max-w-sm dark:text-neutral-300"
              >
                May 4, 2024
              </CardItem>
            </CardBody>
          </CardContainer>
          </div>
          <div className="mt-10" style={{ transform: "rotate(1deg)"}}>
          <CardContainer className="inter-var px-2 py-0 mx-0 my-0 w-5/10">
            <CardBody className="bg-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full  h-auto rounded-xl p-4 border  ">
              
              <CardItem
                translateZ="100"
                rotateX={0}
                rotateZ={0}
                className="w-full mt-4"
              >
                <Image
                  src={Img5}
                  height="500"
                  width="500"
                  className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Dinner at Makati"
                />
              </CardItem>
              <CardItem
                translateZ="30"
                className="text-xl font-bold text-black mt-6 dark:text-white"
              >
                Trip to the beach
              </CardItem>
              <CardItem
                as="p"
                translateZ="30"
                className="text-black text-sm max-w-sm dark:text-neutral-300"
              >
                April 20, 2024
              </CardItem>
            </CardBody>
          </CardContainer>
          </div>
        </div>
        
        
        <div className={`${styles['slider']} flex flex-row mt-14 mb-0`}>
          <div style={{ width: '100%', overflow: 'hidden', zIndex:200 }}>
            <Slider {...slideSettings}>
              {[...films, ...films].map((film, index) => (
                <>
                <div key={index} style={{ width: '400px', height: '100%', position: 'relative' }}>
                  <Image src={film} width={800} height={100} alt="Party Event" className='w-9/10 h-9/10' layout='responsive'  style={{ position:'absolute',zIndex:150, top:15}}  />
                  <Image src={FilmBG} width={800} height={100} alt="Party Event" className="" style={{position:'relative',zIndex:100}} layout='responsive' />
                  
                </div>
                
                </>
              ))}
            </Slider>
          </div>
          
        </div>
      </section>
           
      <div ref={joinDivRef} className="flex flex-col justify-center items-center" style={{zIndex:100, backgroundColor:'#000000', position:'relative', width:'100%', height:'100vh'}}>
        <FormComponent/>
        

      
      </div>
    </div>
    </>
  );
};

export default Home;
