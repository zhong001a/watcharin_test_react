import React from "react";

import { Box, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../feature/user/userSclice";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.user.favoriteList);
  const movie = {
    id: 2161,
    movieCode: ["HO00004739"],
    title_en: "E-Sarn Zombie",
    title_th: "อีสานซอมบี้",
    rating: "ทป.",
    rating_id: 0,
    duration: 101,
    release_date: "2023-12-28",
    sneak_date: "2022-12-09",
    synopsis_th:
      "บ่ใช่ปอบ บ่ใช่กระสือ แล้วมันคือ...อิหยังว่ะ?\r\n\r\nเรื่องราวของ “อิฐ” (พีช พชร) หนุ่มหล่อไฟแรง ผู้เคร่งครัดในกฎระเบียบ ต้องมาเป็นผู้จัดการซูเปอร์มาเก็ต ที่มีแต่เรื่องชวนปวดหัว \r\nทำให้เขาพบเจอกับ “ต้นนุ่น” (ออกแบบ ชุติมณฑน์) พนักงานสาวที่มีพฤติกรรมแปลกๆ ลึกลับ เธอมักจะแอบขโมยเนื้อสดหมดอายุออกไปจากซูเปอร์มาเก็ต ทำให้อิฐเกิดความสงสัยสู่การตามหาความจริง ว่าต้นนุ่นขโมยเนื้อหมดอายุออกไปเพื่ออะไร \r\n\r\nแต่กว่า “อิฐ” จะรู้ความจริง มันก็อาจจะสายเกินไปแล้ว นำไปสู่หายนะเหล่า “พนักงานตัวแสบ” แห่งกู๊ดสโตร์ และชาวบ้าน ต้องเผชิญความอันตราย กับความคลั่งของฝูงซอมบี้ ทวีจำนวนเพิ่มขึ้นอย่างรวดเร็ว และกำลังพุ่ง!! มุ่งมาหาพวกเขา งานนี้เลยต้อง “ฟ้อน” สู้เท่านั้น เพื่อเอาชีวิตรอด\r\n\r\nนำทัพนักแสดงโดย พีช พชร , ออกแบบ ชุติมณฑน์ , จตุรงค์ พลบูรณ์ , แจ๊ค แฟนฉัน , ฮันนี่ ภัสสร , ต้นหอม ศกุนตลา , พี่บอย ภิษณุ, เป๊กกี้ ศรีธัญญา, สายเชีย วงศ์วิโรจน์ \r\n\r\nงานนี้จะชุลมุน และม่วนขนาดไหน...ติดตามต่อได้ใน “อีสานซอมบี้”\r\n",
    synopsis_en:
      "บ่ใช่ปอบ บ่ใช่กระสือ แล้วมันคือ...อิหยังว่ะ?\r\n\r\nเรื่องราวของ “อิฐ” (พีช พชร) หนุ่มหล่อไฟแรง ผู้เคร่งครัดในกฎระเบียบ ต้องมาเป็นผู้จัดการซูเปอร์มาเก็ต ที่มีแต่เรื่องชวนปวดหัว \r\nทำให้เขาพบเจอกับ “ต้นนุ่น” (ออกแบบ ชุติมณฑน์) พนักงานสาวที่มีพฤติกรรมแปลกๆ ลึกลับ เธอมักจะแอบขโมยเนื้อสดหมดอายุออกไปจากซูเปอร์มาเก็ต ทำให้อิฐเกิดความสงสัยสู่การตามหาความจริง ว่าต้นนุ่นขโมยเนื้อหมดอายุออกไปเพื่ออะไร \r\n\r\nแต่กว่า “อิฐ” จะรู้ความจริง มันก็อาจจะสายเกินไปแล้ว นำไปสู่หายนะเหล่า “พนักงานตัวแสบ” แห่งกู๊ดสโตร์ และชาวบ้าน ต้องเผชิญความอันตราย กับความคลั่งของฝูงซอมบี้ ทวีจำนวนเพิ่มขึ้นอย่างรวดเร็ว และกำลังพุ่ง!! มุ่งมาหาพวกเขา งานนี้เลยต้อง “ฟ้อน” สู้เท่านั้น เพื่อเอาชีวิตรอด\r\n\r\nนำทัพนักแสดงโดย พีช พชร , ออกแบบ ชุติมณฑน์ , จตุรงค์ พลบูรณ์ , แจ๊ค แฟนฉัน , ฮันนี่ ภัสสร , ต้นหอม ศกุนตลา , พี่บอย ภิษณุ, เป๊กกี้ ศรีธัญญา, สายเชีย วงศ์วิโรจน์ \r\n\r\nงานนี้จะชุลมุน และม่วนขนาดไหน...ติดตามต่อได้ใน “อีสานซอมบี้”\r\n",
    director: "Thanawat Eiamjinda",
    actor:
      "Pachara Chirathivat/Chutimon Chuengcharoensukying/Jaturong Pollaboon/Chaleumpol Tikumpornteerawong/Sudarat Butrprom/Pisanu Nimsakul/Sakuntala Teinpairoj",
    genre: "Comedy/Horror",
    poster_ori: "/uploads/movie/3665/thumb_3665.jpg",
    poster_url:
      "https://cdn.majorcineplex.com/uploads/movie/3665/thumb_3665.jpg?v=202312291442",
    trailer: "https://cdn.majorcineplex.com/embed/8046",
    tr_ios:
      "http://27.254.80.209:1935/media/_definst_/mp4:major/trailer/8046/8046_720.mp4/playlist.m3u8",
    tr_hd:
      "rtsp://27.254.80.209:1935/media/_definst_/mp4:major/trailer/8046/8046_720.mp4",
    tr_sd:
      "rtsp://27.254.80.209:1935/media/_definst_/mp4:major/trailer/8046/8046_360.mp4",
    tr_mp4:
      "https://cdn.majorcineplex.com/uploads/trailer/rawvideo/8046/8046.mp4",
    priority: "80000",
    now_showing: "1",
    advance_ticket: "0",
    date_update: "2023-12-28 13:10:42",
    show_buyticket: "1",
    trailer_cms_id: "8046",
    trailer_ivx_key: null,
  };

  const handlerLoveMovie = (movie) => {
    dispatch(addFavorite(movie));

  };

  return (
    <Box>
      <Button
        onClick={() => {
          handlerLoveMovie(movie);
        }}
      >
        Love
      </Button>
      <FavoriteBorderIcon />
      <FavoriteIcon />

      {favorite?.map((movie,index) => (
        <h2 key={index}>{movie.id}</h2>
      ))}
    </Box>
  );
};

export default SearchComponent;
