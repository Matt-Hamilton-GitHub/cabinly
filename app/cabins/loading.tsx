'use client'
import styled from "styled-components";
import SpinnerBoxJump from "../_components/SpinnerBoxJump";
import { div } from "framer-motion/client";
import LoadingComponent from "../_components/LoadingComponent";


export default function loading(){

    return (<div className="w-full "><LoadingComponent /></div>)
    
}
