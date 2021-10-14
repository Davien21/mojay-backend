import { jsx } from '@keystone-ui/core';
import LogoIcon from "../public/images/full-logo.svg"
import React from "react"
import Image from "next/image";

console.log(LogoIcon)
function CustomLogo () {
    return <Image src={LogoIcon} alt="" layout="intrinsic" />
}

export const components = {
    Logo: CustomLogo
}