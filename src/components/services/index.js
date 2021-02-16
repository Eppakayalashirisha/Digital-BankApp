import React from 'react';
import {ServiceContainer, ServiceH1, ServiceWrapper, ServiceIcon,
ServiceH2, ServiceCard, ServiceP} from './servicesElements';
import Icon1 from '../../images/img5.png';
import Icon2 from '../../images/img3.png';
import Icon3 from '../../images/img6.png';

const Services = () => {
    return (
        <>
          <ServiceContainer id = "services">
             <ServiceH1>Our Services</ServiceH1> 
             <ServiceWrapper>
                <ServiceCard>
                    <ServiceIcon src = {Icon1}></ServiceIcon>
                    <ServiceH2>Reduce expenses</ServiceH2>
                    <ServiceP>We help reduce your fees and increase
                        your over all revenue.</ServiceP>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src = {Icon2}></ServiceIcon>
                    <ServiceH2>Virtual Offices</ServiceH2>
                    <ServiceP>You can access our platform online
                        anywhere in the world.</ServiceP>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src = {Icon3}></ServiceIcon>
                    <ServiceH2>Premium Benifits</ServiceH2>
                    <ServiceP>Unlock our special membership card that returns 
                        5% cash back.</ServiceP>
                </ServiceCard>
             </ServiceWrapper>
          </ServiceContainer>  
        </>
    )
}

export default Services
