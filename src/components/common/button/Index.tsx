import React from 'react'

interface Props {
    border: string;
    color: string;
    children?: React.ReactNode;
    height: string;
    radius: string
    width: string;    
  } 
  export const OutLineButton: React.FC<Props> = ({ 
      border, 
      color,
      children,
      height,
      radius,
      width
    }) => { 
    return (
      <button 
        style={{
           backgroundColor: color,
           borderColor:color,
           borderRadius: radius,
           height,
           width,
           border
           
        }}
      >
      {children}
      </button>
    );
  }



  export const FillButton: React.FC<Props> = ({ 
    border,
    color,
    children,
    height, 
    radius,
    width
  }) => { 
  return (
    <button 
      
      style={{
         backgroundColor: color,
         borderBlockColor:color,
         border,
         borderRadius: radius,
         height,
         width
      }}
    >
    {children}
    </button>
  );
}


