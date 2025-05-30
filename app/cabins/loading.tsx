'use client'
import styled from "styled-components";
import SpinnerBoxJump from "../_components/SpinnerBoxJump";
import { div } from "framer-motion/client";


export default function loading(){

    return (<div className="w-full flex text-center justify-center items-center"><SpinnerBoxJump /></div>)
    
}
