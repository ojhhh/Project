import React from "react";
import { DecalsPopupWrap, DecalsClosebtn } from "./CustomDecalsPopup.styled";
import { useDispatch } from "react-redux";
import { decalName, decalNum } from "../../features/decalslice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {useState} from "react"
import axios from "axios"
import { decalMyPic } from "../../features/decalslice";
const PROXY = process.env.REACT_APP_PROXY;

const CustomMyPicPopup = ({ handlerMyPic }) => {

    const dispatch = useDispatch();

    const [file,setFile] = useState(null);

    const handleFileChange = (e)=>{
        setFile(e.target.files[0]);
    }


    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('image',file)

        const response = await axios.post(`${PROXY}/custom/postdecal`,formData, {
            headers : {
                'Content-Type' : 'multipart/form-data',
            }
        })

        dispatch(decalMyPic(response.data.filename));

        handlerMyPic();
    }



  return (
    <DecalsPopupWrap>
        <div className="decalsPopupContainer">
            <div className="popupClose">
            <DecalsClosebtn onClick={handlerMyPic} />
            </div>
            <div className="popupTitle">
            <div className="title">
                <span>MyPicture</span>
            </div>
            </div>
            <div style={{ position: 'relative', width: 500, height: 500 }}>
              <img src="polaroid.png" alt="Polaroid" style={{ width: '100%', height: '100%', marginLeft: "180px" }} />
                <div style={{
                    position: 'absolute',
                    top: '40%',
                    left: '86%',
                    transform: 'translate(-50%, -50%)',
                    color: 'black',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    zIndex : "3",
                    width : "160px"
                    }}>
                        "사진은 추억의 미래, 추억은 사진의 과거다 <br/>-Team IKE"
                </div>
            </div>
            <div className="popupBody">
                <form onSubmit={handleSubmit}>
                    <input type="file" onChange={handleFileChange} />
                    <button type="submit" className="obutton uploadbtn">업로드</button>
                </form>
            </div>
        </div>
    
    </DecalsPopupWrap>
  );
};

export default CustomMyPicPopup;
