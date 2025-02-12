/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
// import AudioPlayer from "react-h5-audio-player";
// import "react-h5-audio-player/lib/styles.css";
// import "./AudioPlayer.css"; // You may remove this if no longer needed

// const AudioPlay = (props) => {
//   // const [selectedLanguage, setSelectedLanguage] = useState(props.language);
//   const [selectedLanguage, setSelectedLanguage] = useState(
//     localStorage.getItem("selectedLanguage") || "English"
//   );

//   const [audios, setAudios] = useState({
//     English: "https://dl.sndup.net/kr6x/TSL_ENGLISH.mp3",
//     Malayalam: "https://dl.sndup.net/cr76/TSL_Malayalam.mp3",
//     Hindi: "https://dl.sndup.net/rrqr/TSL_Hindi.mp3",
//     Kannada: "https://dl.sndup.net/jrr7/TSL_Kannada.mp3",
//     Tamil: "https://dl.sndup.net/vtdn/TSL_Tamil.mp3",
//     Telugu: "https://dl.sndup.net/cxfj/TSL_Telugu.mp3",
//   });

//   useEffect(() => {
//     try {
//       setSelectedLanguage(localStorage.getItem("selectedLanguage"));
//       // console.log(selectedLanguage);
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);

//   return (
//     <div className="audio-section flex justify-center items-center w-full h-full">
//       <div className="flex w-full h-full items-center justify-center">
//         <div className="w-9/12 md:w-10/12 h-full">
//           <AudioPlayer
//             autoPlay
//             layout="horizontal-reverse"
//             showJumpControls={false}
//             showFilledVolume={false}
//             showFilledProgress={false}
//             src={audios[selectedLanguage]}
//             volume={1}
//             controls
//           />
//         </div>
//         <div className="w-3/12 md:w-2/12 h-full flex justify-center items-center">
//           <select
//             className="reg-language-select-button text-left h-12 p-2 border border-gray-300 rounded bg-white outline-none"
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

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./AudioPlayer.css"; // You may remove this if no longer needed

const AudioPlay = (props) => {
  // const [selectedLanguage, setSelectedLanguage] = useState(props.language);
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "English"
  );

  const [audios, setAudios] = useState({
    English: "./audios/TSL_ENGLISH.mp4",
    Malayalam: "./audios/TSL_Malayalam.mp4",
    Hindi: "./audios/TSL_Hindi.mp4",
    Kannada: "./audios/TSL_Kannada.mp4",
    Tamil: "./audios/TSL_Tamil.mp4",
    Telugu: "./audios/TSL_Telugu.mp4",
  });

  useEffect(() => {
    try {
      setSelectedLanguage(localStorage.getItem("selectedLanguage"));
      // console.log(selectedLanguage);
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
            controls
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
