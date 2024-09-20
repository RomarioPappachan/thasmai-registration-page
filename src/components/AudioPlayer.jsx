// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import { useState } from "react"
// import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';
// import './AudioPlayer.css'

// const AudioPlay = (props) => {

//     // console.log(props.language);
//     // const [selectedLanguage, setSelectedLanguage] = useState(props.language);
//     const [selectedLanguage, setSelectedLanguage] = useState();

//     const [ audios, setAudios] = useState({
//         English: "https://dl.sndup.net/kr6x/TSL_ENGLISH.mp4",
//         Malayalam: "https://dl.sndup.net/cr76/TSL_Malayalam.mp4",
//         Hindi: "https://dl.sndup.net/rrqr/TSL_Hindi.mp4",
//         Kannada: "https://dl.sndup.net/jrr7/TSL_Kannada.mp4",
//         Tamil: "https://dl.sndup.net/vtdn/TSL_Tamil.mp4",
//         Telugu: "https://dl.sndup.net/cxfj/TSL_Telugu.mp4"
//     });

//   return (
    
//     <div className="audio-section">
//         <div className="row g-0 w-100 h-100 d-flex justify-content-center align-items-center">
//             <div className="col-9 col-md-10 h-100">
//                 <AudioPlayer
//                     autoPlay
//                     layout = "horizontal-reverse"
//                     showJumpControls = {false} 
//                     showFilledVolume = {false} 
//                     showFilledProgress = {false} src={audios[`${selectedLanguage}`]}
//                     volume={1} 
//                     // Try other props!
//                 />
//             </div>
//             <div className="col-3 col-md-2 h-100 d-flex justify-content-center align-items-center">
//                 <select className="reg-language-select-button text-start h-50" 
//                   value={selectedLanguage} 
//                   onChange={(e) =>{ const val = e.target.value;
//                         setSelectedLanguage(val);
//                     }}
//                 >
//                     <option value="English">English</option>
//                     <option value="Hindi">Hindi</option>
//                     <option value="Kannada">Kannada</option>
//                     <option value="Malayalam">Malayalam</option>
//                     <option value="Tamil">Tamil</option>
//                     <option value="Telugu">Telugu</option>
//                 </select>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default AudioPlay;



/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './AudioPlayer.css'; // You may remove this if no longer needed

const AudioPlay = (props) => {
  // const [selectedLanguage, setSelectedLanguage] = useState(props.language);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const [audios, setAudios] = useState({
    English: "https://dl.sndup.net/kr6x/TSL_ENGLISH.mp4",
    Malayalam: "https://dl.sndup.net/cr76/TSL_Malayalam.mp4",
    Hindi: "https://dl.sndup.net/rrqr/TSL_Hindi.mp4",
    Kannada: "https://dl.sndup.net/jrr7/TSL_Kannada.mp4",
    Tamil: "https://dl.sndup.net/vtdn/TSL_Tamil.mp4",
    Telugu: "https://dl.sndup.net/cxfj/TSL_Telugu.mp4",
  });

  useEffect(() => {
    try {
      
      setSelectedLanguage(localStorage.getItem("selectedLanguage"));
      console.log("Referral Id", selectedLanguage);
      
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="audio-section flex justify-center items-center w-full h-full">
      <div className="flex w-full h-full items-center justify-center">
        <div className="w-9/12 md:w-10/12 h-full">
          <AudioPlayer
            autoPlay
            layout="horizontal-reverse"
            showJumpControls={false}
            showFilledVolume={false}
            showFilledProgress={false}
            src={audios[selectedLanguage]}
            volume={1}
          />
        </div>
        <div className="w-3/12 md:w-2/12 h-full flex justify-center items-center">
          <select
            className="reg-language-select-button text-left h-12 p-2 border border-gray-300 rounded bg-white outline-none"
            value={selectedLanguage}
            onChange={(e) => {
              const val = e.target.value;
              setSelectedLanguage(val);
            }}
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Kannada">Kannada</option>
            <option value="Malayalam">Malayalam</option>
            <option value="Tamil">Tamil</option>
            <option value="Telugu">Telugu</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AudioPlay;



// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import { useState } from "react";
// import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';

// const AudioPlay = (props) => {
//   const [selectedLanguage, setSelectedLanguage] = useState();

//   const [audios, setAudios] = useState({
//     English: "https://dl.sndup.net/kr6x/TSL_ENGLISH.mp4",
//     Malayalam: "https://dl.sndup.net/cr76/TSL_Malayalam.mp4",
//     Hindi: "https://dl.sndup.net/rrqr/TSL_Hindi.mp4",
//     Kannada: "https://dl.sndup.net/jrr7/TSL_Kannada.mp4",
//     Tamil: "https://dl.sndup.net/vtdn/TSL_Tamil.mp4",
//     Telugu: "https://dl.sndup.net/cxfj/TSL_Telugu.mp4",
//   });

//   return (
//     <div className="flex justify-center items-center w-full h-[3.7rem] bg-gray-800">
//       <div className="flex w-full h-full items-center justify-center bg-black text-white">
//         <div className="w-9/12 md:w-10/12 h-full">
//           <AudioPlayer
//             autoPlay
//             layout="horizontal-reverse"
//             showJumpControls={false}
//             showFilledVolume={false}
//             showFilledProgress={false}
//             src={audios[selectedLanguage]}
//             volume={1}
//           />
//         </div>
//         <div className="w-3/12 md:w-2/12 h-full flex justify-center items-center">
//           <select
//             className="h-[4vh] w-[95%] border-2 border-white rounded-md bg-black text-white outline-none text-left p-0"
//             value={selectedLanguage}
//             onChange={(e) => {
//               const val = e.target.value;
//               setSelectedLanguage(val);
//             }}
//           >
//             <option value="English">English</option>
//             <option value="Hindi">Hindi</option>
//             <option value="Kannada">Kannada</option>
//             <option value="Malayalam">Malayalam</option>
//             <option value="Tamil">Tamil</option>
//             <option value="Telugu">Telugu</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AudioPlay;
