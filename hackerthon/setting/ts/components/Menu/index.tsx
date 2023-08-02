
import {CloseModalButton, CreateMenu} from '@components/Menu/style'
import React , {CSSProperties, FC, useCallback} from "react";


interface Props {
    show : boolean;
    onCloseModal : (e : any) => void;
    style : CSSProperties;
    closeButton? : boolean
}
    // [props 타입 설정 후 에러잡기]
        // react 에서 props 들어올 때, 해당 props 의 데이터 타입을 써줘야 하는데, 
        // 타입 스크립트에서는 여기에 씀 | 꼭 써야 하나? 

        // FC<Props> 여기에서 <Props> 이렇게 Props 를 쓰면, 
        // Menu 에 위에 쓴 Props 타입이 연결이 된다. 
        // 여기까지 하면, props 타입들에 그어진 밑줄은 사라짐.

        
const Menu : FC<Props> = ({ closeButton , style , show , children  , onCloseModal }) => {
    
    const stopPropagation = useCallback( (e) => {
        e.stopPropagation();
    } , [])


    if (!show) {
        return null
    }

    return (
        <CreateMenu onClick={onCloseModal} >
            <div onClick={stopPropagation} style={style}  >
                {closeButton && <CloseModalButton onClick={onCloseModal} > &times; </CloseModalButton>}
                {children}
            </div>
        </CreateMenu>
    )
}

    // prpos 의 기본값 설정해주기 
        Menu.defaultProps = {
            closeButton : true
        }
            // 이렇게 기본값 설정해주면, 부모레벨에서 값 넣어주지 않아도 가능⭐⭐⭐⭐⭐ 



export default Menu