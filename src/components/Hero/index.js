import React ,{useState}from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent,
HeroH1, Herop, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import Video from '../../videos/v3.mp4';
import {Button} from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = ()=>{
        setHover(!hover)
    }
    return (
        <HeroContainer id="/">
            <HeroBg>
                <VideoBg autoPlay loop muted src = {Video} 
                type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <Herop>Sign up for a new account today and receive NOK 200 
                    in credit towards your next payment.
                </Herop>
                <HeroBtnWrapper>
                    <Button to= 'signup' onMouseEnter={onHover}
                    onMouseLeave ={onHover} primary = 'true'
                    dark ='true' smooth = 'true'
                    duration ={500} spy = {true}
                    exact = 'true' offset ={-80}>Get started{hover? <ArrowRight/>:
                    <ArrowForward/>} </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
