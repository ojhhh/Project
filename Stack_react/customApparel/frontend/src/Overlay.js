import React from 'react'
import {Logo} from '@pmndrs/branding'
import {AiOutlineHighlight, AiOutlineShopping, AiFillCamera, AiOutlineArrowLeft } from 'react-icons/ai'
import { useSelector } from "react-redux";

const Overlay = () => {

    const color = useSelector(state => state.cloth.clothColor);

    function Intro(){
        return(
             <div className='container'>
                <header>
                    <AiOutlineShopping size={"3em"} />
                </header>
             </div>
             )
    }

    function Customizer() {
        const colors = [
            '#ccc',
            '#EFBD4E',
            '#80C670',
            '#726DE8',
            '#EF674E',
            '#353934',
            'Purple'
        ]

        const decals = ['jordan', 'three2', 'pmndrs']

        return(
            <section key="custom">
            <div className="customizer">
              <div className="color-options">
                {colors.map((color) => (
                  <div
                    key={color}
                    className="circle"
                    style={{ background: color }}></div>
                ))}
              </div>
              <div className="decals">
                <div className="decals--container">
                  {decals.map((decal) => (
                    <div key={decal} className="decal">
                      <img src={decal + '_thumb.png'} alt="brand" />
                    </div>
                  ))}
                </div>
              </div>
              <button className="share" style={{ background: 'black' }}>
                DOWNLOAD
                <AiFillCamera size="1.3em" />
              </button>
              <button className="exit" style={{ background: 'black' }}>
                GO BACK
                <AiOutlineArrowLeft size="1.3em" />
              </button>
            </div>
          </section>
        )
    }

  return (
    <>
        <Intro />
        {/* <Customizer /> */}
        <div>{color}</div>
    </>
  )
}



export default Overlay