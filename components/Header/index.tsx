import React, { VFC, useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  HeaderBody,
  HeaderTitle,
  HeaderUtilIcons,
  ImagePopupBody,
  ImageThumnail,
  HeaderContainer,
} from "./styles";
import { BsChevronLeft, BsSearch } from "react-icons/bs";
import { AiOutlinePicture } from "react-icons/ai";

interface Props {
  title: string;
  sendImage: Function;
}
interface PopupProps {
  isActive: boolean;
}
interface Image {
  file: File;
  id: string;
  url: string;
}

const Header: VFC<Props> = ({ title, sendImage }) => {
  const history = useHistory();
  const [isImagePopup, setIsImagePopup] = useState<boolean>(false);
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [imageList, setImageList] = useState<Array<Image>>([]);
  const onClickLoadedImage = (
    e: React.MouseEvent<HTMLElement>,
    url: string
  ) => {
    sendImage(e, url);
  };

  const ImagePopup: VFC<PopupProps> = ({ isActive }) => {
    return (
      //사진버튼누르면 뿅 나타남
      //디테일을 구현할 시간이 너무 없다
      <ImagePopupBody className={isActive ? "popupbody-active" : ""}>
        {isActive
          ? imageList.map((element) => (
              <ImageThumnail
                src={element.url}
                key={element.url}
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  onClickLoadedImage(e, element.url);
                }}
              />
            ))
          : null}
      </ImagePopupBody>
    );
  }; //폴더 안에 파일 목록을 어떻게 가져오지? 그냥 버튼 누를때 input으로 불러오게 함.

  const onClickPopupImage = () => {
    if (isImagePopup) {
      setImageList([]);
      setIsImagePopup(false);
    } else {
      if (inputFileRef != null && inputFileRef.current != null) {
        inputFileRef.current.click();
      }
      setIsImagePopup(true);
    }
  };
  const onHandlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const result: any = [];
    if (files == null) return;
    for (const [key, file] of Object.entries(files)) {
      result.push({
        id: file.name,
        file: file,
        url: URL.createObjectURL(file),
      });
    }
    setImageList(result);
  };
  useEffect(() => {}, [imageList]);

  return (
    <HeaderContainer>
      <HeaderBody>
        <BsChevronLeft
          size="25"
          onClick={() => history.push("/list")}
        ></BsChevronLeft>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderUtilIcons>
          <input
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            multiple
            className="image-load"
            aria-label="image-load"
            ref={inputFileRef}
            style={{ display: "none" }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onHandlePhoto(e);
            }}
          />
          <AiOutlinePicture
            className="util-icon-image"
            size="20"
            onClick={(e) => onClickPopupImage()}
          ></AiOutlinePicture>
          <BsSearch className="util-icon-chat-search" size="20" />
        </HeaderUtilIcons>
      </HeaderBody>
      <ImagePopup isActive={isImagePopup} />
    </HeaderContainer>
  );
};
export default Header;
