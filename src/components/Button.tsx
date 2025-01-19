import React, { HTMLAttributes } from 'react'
import { cva } from 'class-variance-authority'//easy way to define the classes that are to be applied to the button

const classes = cva('border h-12 rounded-full px-6 font-medium' , {
    variants: {
        variant:{
            primary: 'bg-lime-400 text-neutral-950, border-lime-400 text-black',
            secondary: 'border-white text-white bg-transparent',
        }
    }
})

// type PropType = {
//     variant: "primary" | "secondary";
//     className: String;
// }

function Button(props: {variant: "primary" | "secondary"} & HTMLAttributes <HTMLButtonElement>) {
    const {variant, className, ...otherProps} = props;
  return (
    
    <button className={classes({
            variant,
            className,
        })} 
        {...otherProps}> 
     </button>
      
  
  )
}

export default Button
