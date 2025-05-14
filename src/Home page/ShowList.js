import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../Your next watch/1stimage.jpg'
import img2 from '../Your next watch/2ndimage.jpg'
import img3 from '../Your next watch/3rdimage.jpg'
import img4 from '../Your next watch/4thimage.jpg'
import img5 from '../Your next watch/image7 (1).jpg'
import img6 from '../Your next watch/image7 (5).jpg'
import img7 from '../Your next watch/image7 (6).jpg'
import img8 from '../Your next watch/image7 (7).jpg'
import img9 from '../Your next watch/image7 (3).jpg'
import img10 from '../Your next watch/image7 (4).jpg'

import img11 from '../Bingworthy TV Dramas/image7 (8).jpg'
import img12 from '../Bingworthy TV Dramas/image7 (9).jpg'
import img13 from '../Bingworthy TV Dramas/image7 (10).jpg'
import img14 from '../Bingworthy TV Dramas/image7 (11).jpg'
import img15 from '../Bingworthy TV Dramas/image7 (12).jpg'
import img16 from '../Bingworthy TV Dramas/image7 (13).jpg'
import img17 from '../Bingworthy TV Dramas/image7 (14).jpg'
import img18 from '../Bingworthy TV Dramas/image7 (15).jpg'
import img19 from '../Bingworthy TV Dramas/image7 (16).jpg'
import img20 from '../Bingworthy TV Dramas/image7 (17).jpg'

import img21 from '../Madin india/test.jpg'
import img22 from '../Madin india/khakee.jpg'
import img23 from '../Madin india/mismatched.jpg'
import img24 from '../Madin india/black warent.jpg'
import img25 from '../Madin india/dhoom.jpg'
import img26 from '../Madin india/great indian.jpg'
import img27 from '../Madin india/do pattai.jpg'
import img28 from '../Madin india/topper.jpg'
import img29 from '../Madin india/ic814.jpg'
import img30 from '../Madin india/nadaaniyan.jpg'

import img31 from '../k-drama/King the land.jpg'
import img32 from '../k-drama/queen of tears 2.jpg'
import img33 from '../k-drama/weak hero 3.jpg'
import img34 from '../k-drama/my demon 4.jpg'
import img35 from '../k-drama/Business proposal 5.jpg'
import img36 from '../k-drama/all of us are dead 6.jpg'
import img37 from '../k-drama/extraordinary attorney woo 7.jpg'
import img38 from '../k-drama/crash landing on you 8.jpg'
import img39 from '../k-drama/its okay to not be okay 9.jpg'
import img40 from '../k-drama/the trauma code-heroes on call 10.jpg'

import img41 from '../Epic World/Sweet Tooth 1.jpg'
import img42 from '../Epic World/The Witcher 2.jpg'
import img43 from '../Epic World/Rangnarok 3.jpg'
import img44 from '../Epic World/Damsel 4.jpg'
import img45 from '../Epic World/The King Eternal Monarch 5.jpg'
import img46 from '../Epic World/The Sandman 6.jpg'
import img47 from '../Epic World/Family Pack 7.jpg'
import img48 from '../Epic World/Mowgli Legend Of The Jungle8.jpg'
import img49 from '../Epic World/Cursed 9.jpg'
import img50 from '../Epic World/Shadow Bone 10.jpg'

import img51 from '../Hollywood/Back In Action 1.jpg'
import img52 from '../Hollywood/Mary Mother Of Jesus 2.jpg'
import img53 from '../Hollywood/Carry On 3.jpg'
import img54 from '../Hollywood/The Union 4.jpg'
import img55 from '../Hollywood/Rebel Ridge 5.jpg'
import img56 from '../Hollywood/Dont Move 6.jpg'
import img57 from '../Hollywood/Extraction 2 7.jpg'
import img58 from '../Hollywood/The Gray Man 8.jpg'
import img59 from '../Hollywood/Atlas 9.jpg'
import img60 from '../Hollywood/Lift 10.jpg'

import img61 from '../Watch together for old kid/Pangolin Kulu s Journey 1.jpg'
import img62 from '../Watch together for old kid/Jurassic World Chaos Theory 2.jpg'
import img63 from '../Watch together for old kid/Lost In Space 3.jpg'
import img64 from '../Watch together for old kid/Spellbound 4.jpg'
import img65 from '../Watch together for old kid/Kung Fu Panda The Dragon Knight 10.jpg'
import img66 from '../Watch together for old kid/The Sea Beast 54.jpg'
import img67 from '../Watch together for old kid/The Worst Witch 6.jpg'
import img68 from '../Watch together for old kid/Wish Dragon 7.jpg'
import img69 from '../Watch together for old kid/Spy Kids Armageddon 8.jpg'
import img70 from '../Watch together for old kid/Leo 9.jpg'

import img71 from '../us tv shows/Devil May Cry 1.jpg'
import img72 from '../us tv shows/Avatar The Last Airbender 2.jpg'
import img73 from '../us tv shows/Xo, Kitty3.jpg'
import img74 from '../us tv shows/Ginny & Georgia 4.jpg'
import img75 from '../us tv shows/Wednesday 5.jpg'
import img76 from '../us tv shows/Emily in Paris 6.jpg'
import img77 from '../us tv shows/Locke & Key 7.jpg'
import img78 from '../us tv shows/Lost In Space 8.jpg'
import img79 from '../us tv shows/Titans 9.jpg'
import img80 from '../us tv shows/Sweet Tooth 10.jpg'
import ShadowPage from './ShadowPage';


const categories = [
  {
    title: 'Your Next Watch',
    shows: [
      { image: img1, title: 'When Life Gives You Tangeriness' ,   video: 'https://www.w3schools.com/html/movie.mp4'},
      { image: img2, title: 'Khakee: The Bengal chapter',         video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { image: img3, title: 'Adolescence',                        video: 'https://www.w3schools.com/html/movie.mp4' },
      { image: img4, title: 'Stranger Things',                    video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
      { image: img5, title: 'Business Proposal' ,                 video: 'https://www.w3schools.com/html/movie.mp4'},
      { image: img6, title: 'GyoeongSeong Creature' ,             video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
      { image: img7, title: 'The Last Kingdom',                   video: 'https://www.w3schools.com/html/movie.mp4' },
      { image: img8, title: 'The King Eternal + Monarch' ,        video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
      { image: img9, title: 'Our Belowed Summer',                 video: 'https://www.w3schools.com/html/movie.mp4' },
      { image: img10, title: 'Millen Doller secret',              video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    
    ],
  },
  {
    title: 'Bingworthy TV Dramas',
    shows: [
      { image: img11, title: 'Queen of Tears',                    video: 'https://www.w3schools.com/html/movie.mp4' },
      { image: img12, title: 'Tribhuvan Mishra Cs Topper',        video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
      { image: img13, title: 'Emily In Paris',                    video: 'https://www.w3schools.com/html/movie.mp4' },
      { image: img14, title: 'Brid Geriton',                      video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { image: img15, title: 'My Life With The Walter Boys' ,     video: 'https://www.w3schools.com/html/movie.mp4'},
      { image: img16, title: 'Pulse',                             video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { image: img17, title: 'House Of Cards',                    video: 'https://www.w3schools.com/html/movie.mp4' },
      { image: img18, title: 'Destined With You',                 video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { image: img19, title: 'Back In Action',                    video: 'https://www.w3schools.com/html/movie.mp4' },
      { image: img20, title: 'Mr.Plankton',                       video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      // ...continue till img20
    ],
  },
  {
    title: 'Made In India',
    shows: [
      { image: img21, title: 'Test',                              video: 'https://www.w3schools.com/html/movie.mp4' },
      { image: img22, title: 'Khakee: The Bihar Chapter',         video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { image: img23, title: 'Mismatched' ,                       video: 'https://www.w3schools.com/html/movie.mp4'},
      { image: img24, title: 'Black Warrant' ,                    video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
      { image: img25, title: 'Dhoom Dhaam' ,                      video: 'https://www.w3schools.com/html/movie.mp4'},
      { image: img26, title: 'The Great Indian Kapil Show',       video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { image: img27, title: 'Do Patti',                          video: 'https://www.w3schools.com/html/movie.mp4' },
      { image: img28, title: 'Tribhuvan Mishra CA Topper',        video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { image: img29, title: 'IC 814: The Kandahar Hijack',       video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { image: img30, title: 'Nadaaniyan' ,                       video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
      // ...continue till img30
    ],
  },
{

  title: 'K-Drama',
  shows: [
    { image: img31, title: 'King The Land',                        video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { image: img32, title: 'queen of t ',                          video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img33, title: 'weak hero' ,                           video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img34, title: 'my demon ',                            video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { image: img35, title: 'Business proposal',                    video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { image: img36, title: 'all of us are dead' ,                  video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img37, title: 'extraordinary attorney woo' ,          video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img38, title: 'crash landing on you' ,                video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img39, title: 'its okay to not be okay' ,             video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img40, title: 'the trauma code-heroes on call',       video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    // ...continue till img30
  ],
},
{

  title: 'Epic world',
  shows: [
    { image: img41, title: 'Sweet Tooth' ,                            video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img42, title: 'The Witcher',                             video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { image: img43, title: 'Rangnarok',                               video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { image: img44, title: 'Damsel' ,                                 video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img45, title: 'The King Eternal Monarch ' ,              video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img46, title: 'The Sandman' ,                            video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img47, title: 'Family Pack',                             video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { image: img48, title: 'Mowgli Legend Of The Jungle',             video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { image: img49, title: 'Cursed' ,                                 video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img50, title: 'Shadow Bone' ,                            video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    // ...continue till img30
  ],
},
{

  title: 'Hollywod',
  shows: [
    { image: img51, title: 'Back In Action' ,                video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img52, title: 'Mary Mother Of Jesus',           video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img53, title: 'Carry On' ,                      video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img54, title: 'The Union ' ,                    video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img55, title: 'Rebel Ridge' ,                   video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img56, title: 'Dont Move',                      video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { image: img57, title: 'Extraction' ,                    video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img58, title: 'The Gray Man' ,                  video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img59, title: 'Atlas' ,                         video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img60, title: 'Lift',                           video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    // ...continue till img30
  ],
},
{

  title: 'Watch To Gether For Old',
  shows: [
    { image: img61, title: 'Pangolin Kulu s Journey' ,           video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img62, title: 'Jurassic World Chaos Theory',        video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { image: img63, title: 'Lost In Space' ,                     video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img64, title: 'Spellbound' ,                        video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img65, title: 'Kung Fu Panda The Dragon Knight',    video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { image: img66, title: 'The Sea Beast' ,                     video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img67, title: 'The Worst Witch',                    video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { image: img68, title: 'Wish Dragon' ,                       video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img69, title: 'Spy Kids Armageddon',                video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { image: img70, title: 'Leo' },
    // ...continue till img30
  ],
},
{

  title: 'US TV Shows',
  shows: [
    { image: img71, title: 'Devil May Cry' ,                  video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img72, title: 'Avatar The Last Airbender',       video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { image: img73, title: 'Xo, Kitty' ,                      video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img74, title: 'Ginny & Georgia ',                video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { image: img75, title: 'Wednesday' ,                      video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img76, title: 'Emily in Paris',                  video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { image: img77, title: 'Locke & Key',                     video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { image: img78, title: 'Lost In Space',                   video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { image: img79, title: 'Titans ' ,                        video: 'https://www.w3schools.com/html/mov_bbb.mp4'},
    { image: img80, title: 'Sweet Tooth',                     video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    // ...continue till img30
  ],
},
];




export default function ShowList() {
  const scrollRefs = useRef([]);
  const navigate = useNavigate();
  
  const handleImageClick = (category, clickedShow) => {

    navigate('/details', { state: { category, clickedShow } });
  };

  const scrollLeft = (index) => {
    if (scrollRefs.current[index]) {
      scrollRefs.current[index].scrollBy({ left: -945, behavior: 'smooth' });
    }
  };

  const scrollRight = (index) => {
    if (scrollRefs.current[index]) {
      scrollRefs.current[index].scrollBy({ left: 945, behavior: 'smooth' });
    }
  };

  return (
    <div className="allhead">
      {categories.map((category, idx) => (
        <div key={idx}>
          <div className="title tooltip">
            <p>{category.title}</p>
            <span className="tooltiptext">Explore More</span>
          </div>

          <div className="slider-container">
            <button className="scroll-btn" onClick={() => scrollLeft(idx)}>
              &lt;
            </button>

            <div
              className="slider-wrapper"
              ref={(el) => (scrollRefs.current[idx] = el)}
            >
              {category.shows.map((show, index) => (
                <div
                  className="imagefun"
                  key={index}
                  onClick={() => handleImageClick(category, show)}
                >
                  <img src={show.image} alt={show.title} />
                  <span>{show.title}</span>
                </div>
              ))}
            </div>

            <button className="scroll-btn" onClick={() => scrollRight(idx)}>
              &gt;
            </button>
          </div>
        </div>
      ))}
      <ShadowPage />
    </div>
  );
}
