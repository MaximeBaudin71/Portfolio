// import React, { useState } from 'react';

// import IconNext from '../public/icon-next.svg';
// import IconPrev from '../public/icon-prev.svg';

// import style from '../styles/style.css';

// import userData from "@constants/data";

// const CodingBootcampTestimonialsSliderComponent = () => {
//   const [index, setIndex] = useState(0);

//   const handleClickPrev = () => {
//     if (index === 0) return setIndex(userData.testimonial.length - 1);
//     setIndex(index - 1);
//   }

//   const handleClickNext = () => {
//     if(index === data.length - 1) return setIndex(0);
//     setIndex(index + 1);
//   }

//   return (
//     <div className={style.container}>
//       <div className={style.testimonial_container}>
//         <div className={style.slider}>
//           <div className={style.slider_images}>
//           </div>
//           <div className={style.slider_buttons}>
//             <button onClick={() => handleClickPrev()}>
//               <IconPrev />
//             </button>
//             <button onClick={() => handleClickNext()}>
//               <IconNext />
//             </button>
//           </div>
//         </div>
//         <div className={style.testimonial}>
//           <p className={style.testimonial_content}>
//             “ {`${userData.testimonial.testimonial}`} ”
//           </p>
//           <div className={style.testimonial_author}>
//             <p className={style.testimonial_author_name}>{`${userData.testimonial.name}`}</p>
//             <p className={style.testimonial_author_job}>{`${userData.testimonial.job}`}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CodingBootcampTestimonialsSliderComponent;