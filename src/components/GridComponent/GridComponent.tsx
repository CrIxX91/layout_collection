import { useEffect, useRef, useState } from 'react';
import nendo from '../../assets/images/Nendo/nen-ados.png';
import { useResizeDetector } from 'react-resize-detector';
import useBreakpoint from '../../hooks/useBreakpoint';


const figures = ['1','2','3','4','5','6','7','8','9','10','1','2','3','4','5','6','7','8','9','10','1','2','3','4','5','6','7','8','9','10','1','2','3','4','5','6','7','8','9','10','1','2','3','4','5','6','7','8','9','10','1','2','3','4','5','6','7','8','9','10'];


export const GridComponent = () => {

    const { width, height, ref } = useResizeDetector();
    let bp = useBreakpoint();

    const divStyle = {
        height: height + 'px',
    };

    const dataAugmented = ():string => {

      let resp:string ='';

      switch (bp) {

        case 'xxl':
              resp = 'tl-clip-x tr-clip-x bl-clip';
            break;

        case 'xl':
          resp = 'tl-clip-x tr-clip-x bl-clip';
        break;

        case 'lg':
            resp = 'bl-clip';
          break;

          case 'md':
            resp = 'bl-clip';
          break;

          case 'sm':
            resp = 'bl-clip';
          break;

        case 'xs':
            resp = 'bl-clip';
          break;
      }

      return resp
    }

    return (
      <>
        <div className='GridContainer' >
          

          {
            figures.map((fig,index)=>
            (
                <div key={index} data-augmented-ui={dataAugmented()} className="augborder image-wrap" style={divStyle} >
                  <img src={nendo} ref={ref}/>
                </div>
              
            )
            )
          }
        </div>
      </>
     
        
      );
}