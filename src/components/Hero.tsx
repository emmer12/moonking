import React from 'react';
import {HeroContainer, Wrapper} from './style'

const Hero = () => {
    return (
        <HeroContainer>
            <Wrapper className='flex'>
            <button className='btn-skew gradient'>
                How To Buy
            </button>
            <button className='btn-skew white'>
                Buy with USD
            </button>
            </Wrapper>
        </HeroContainer>
    );
};

export default Hero;