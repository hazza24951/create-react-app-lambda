import React, { useLayoutEffect } from 'react'
import { useRef } from 'react';
import styled from "styled-components";
import DrawSvg from "../DrawSvg"; 
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
`

const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: lightblue; */

  @media (max-width: 48em) {
    width: 90%;
  }

  & >*:nth-of-type(2n + 1) {
    justify-content: start;

    div {
        border-radius: 50px 0 50px 0;
        text-align:right;
    }
  p{
    border-radius: 40px 0 40px 0;

  }
}
  &>*:nth-of-type(2n){
    justify-content:end;
    div {
        border-radius: 50px 0 50px 0;
        text-align:left;
    }
  p{
    border-radius: 40px 0 40px 0;

  }
  }
    
  `

  const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};
`

const Box = styled.p`
  height: fit-content;
  background-color: ${(props) => props.theme.carouselColor};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
`;
const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;
const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  font-weight: 400;
  margin: 0.5rem 0;
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const RoadMapItem = ({ title, subtext, addToRef }) => {
    return (
      <Item ref={addToRef}>
        <ItemContainer>
          <Box>
            <SubTitle>{title} </SubTitle>
            <Text>{subtext}</Text>
          </Box>
        </ItemContainer>
      </Item>
    );
  };

const Roadmap = () => {

    const revealRefs = useRef([]);
    revealRefs.current = [];
    gsap.registerPlugin(ScrollTrigger)

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() =>{
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: "0",
        },
        {
          y: "-30%",

          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200px",
            end: "bottom center",
            scrub: true,
            // markers:true,
          },
        }
      );
    });
    
    return () => {
        if (t1) t1.kill();
    };
  }, [])
    return (
        <Section id="roadmap">
           <Title>Roadmap</Title> 
           <Container>
            <SvgContainer>
                <DrawSvg />
            </SvgContainer>
            <Items>
                <Item>&nbsp;</Item>
                <RoadMapItem addToRef={addToRefs} title='Phase 1' subtext='The building of our community. This includes Discord, Twitter and communications with other projects ' />
                <RoadMapItem addToRef={addToRefs} title='Phase 2' subtext='Time to MINT! Staking will be released a few days after mint. Staking your NFT will earn you tokens which can be redeemed in our marketplace in exchange for Gift Cards, NFTs and W.A.C merchandise' />
                <RoadMapItem addToRef={addToRefs} title='Phase 3' subtext='Early access to our tools and services. this phase will start approximately one month after the mint date, this will give our holders access to; alpha call services, portfolio tracking, exclusive holders area for NFT and blockchain news and educational guides' />
                <RoadMapItem addToRef={addToRefs} title='Phase 4' subtext='Access to final version of Tools. This will mark the success of our team. The actions to be developed in this part of the plan will be to make it easier for holders to know how to maximize the effectiveness of all our tools' />
                <RoadMapItem addToRef={addToRefs} title='Phase 5' subtext='we do not only believe that this is the first version of our roadmap, but that it is also the begginign of something much bigger. BUT, for now lets DOMINATE THE SOLANA NETWORK❗❗❗❗❗' />

            </Items>
           </Container>
        </Section>
    )
}

export default Roadmap