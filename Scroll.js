import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

const ScrollArea=styled.div`
  width:7px;
  height:100vh;
  position:fixed;
  top:0;
  right:0;
  &:hover > div{
    opacity:1;
  }
`;
const ScrollStick=styled(motion.div)`
  width:100%;
  height:30px;
  background-color: #424242;
  position:absolute; 
  border-radius:3px;
  border:1px solid white;
  box-sizing: border-box;
`;
function Scroll(){
    const {scrollYProgress}=useViewportScroll();
    const scrollAni=useAnimation();
    useEffect(()=>{
        scrollYProgress.onChange(()=>{
        scrollAni.start({opacity:1 ,top:`calc( ${scrollYProgress.current*100}% - ${scrollYProgress.current*30}px`,transition:{type:"linear",duration:0.1}}).then(()=>scrollAni.start({opacity:0, transition:{delay:0.7,duration:0.5}}));
        });
    },[scrollYProgress]);
    return (
        <>
            <ScrollArea>
                <ScrollStick initial={{opacity:0}} animate={scrollAni}></ScrollStick>
            </ScrollArea>
        </>
    );
}
export default Scroll;