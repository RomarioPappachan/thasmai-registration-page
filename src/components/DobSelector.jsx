// import React from 'react';
// import dayjs from 'dayjs';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { TextField } from '@mui/material';

// function DobSelector() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker
//         defaultValue={dayjs('2022-04-17')}
//         minDate={dayjs('1930-01-01')}
//         maxDate={dayjs()}
//         format="DD/MM/YYYY"
//         slots={{
//           textField: (params) => (
//             <TextField
//               {...params}
//               InputLabelProps={{ shrink: false }} // Hides the label on focus
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   height: '3rem',
//                   backgroundColor: 'white', // Set background color to white
//                   color: 'black', // Set text color to black
//                   borderRadius: '0.5rem', // Set border-radius to 0.5rem (8px)
//                   '&:hover': {
//                     backgroundColor: 'white', // Keep white background on hover
//                   },
//                   '&.Mui-focused': {
//                     outline: 'none', // No outline on focus
//                     boxShadow: 'none', // Remove shadow
//                     backgroundColor: 'white', // Ensure background remains white on focus
//                   },
//                   '& fieldset': {
//                     border: 'none', // Remove outline border
//                   },
//                 },
//               }}
//             />
//           ),
//         }}
//       />
//     </LocalizationProvider>
//   )
// }

// export default DobSelector



// import dayjs from 'dayjs';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

// export default function DobSelector() {
//   // Function to check if a date is in the future
//   const isFutureDate = (date) => dayjs().isBefore(date);

//   // Function to disable dates outside the range 1930-01-01 to current year - 5 years
//   const shouldDisableDate = (date) => {
//     const minDate = dayjs('1930-01-01');
//     const maxDate = dayjs().subtract(5, 'year');
//     return isFutureDate(date) || date.isBefore(minDate) || date.isAfter(maxDate);
//   };

//   // Set default date to current year - 5 years
//   const defaultDate = dayjs().subtract(5, 'year');

  

//   return (
//     <LocalizationProvider 
//       dateAdapter={AdapterDayjs} 
//       sx={{ m: 0, width: "100%", mt: 0, border: 0, borderRadius: "0.5rem", height: "3.1rem", boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.5) !important"}}
//     >
//       <DesktopDatePicker
//         label="DOB"
//         // eslint-disable-next-line no-unused-vars
//         // onChange={(newDate) => {console.log("onchange"); setTog(false); setDob(newDate); const currentDate = dayjs(); console.log(newDate,"do");
//         //   if (newDate && newDate.isValid() && !shouldDisableDate(newDate)) {
//         //     // Check if the date is valid and within the allowed range
//         //     if (currentDate.diff(newDate, 'year') < 18) {
//         //       setconfirmAge(true);
//         //       setInvalidAge(false);
//         //     } else {
//         //       setconfirmAge(false);
//         //       setInvalidAge(false);
//         //     }
//         //   } else if (newDate && newDate.isValid() && shouldDisableDate(newDate)) {
//         //     if (currentDate.diff(newDate, 'year') < 5 ) {
//         //       setconfirmAge(false);
//         //       setInvalidAge(true);
//         //       setDob(false);
//         //       setTog(true);
//         //     } else {
//         //       setconfirmAge(false);
//         //       setDob(false);
//         //       setTog(true);
//         //     }
//         //   } else {
//         //     // If the entered date is not valid or outside the range, reset the confirmAge state to false.
//         //     setconfirmAge(false);
//         //     setDob(false);
//         //     setTog(true);
//         //   }
//         // }}
//         shouldDisableDate={ shouldDisableDate}
//         format="DD/MM/YYYY"
//         minDate = { dayjs('1930-01-01') }
//         maxDate={ dayjs().subtract(5, 'year') }  // Set max date to current year - 5 years
//         defaultDate={defaultDate}  // Set default date to current year - 5 years
//         sx={{ 
//           bgcolor: "#fff", 
//           borderRadius: "5px", 
//           m: 0, 
//           border: "0", 
//           width: '100%',
//           height: '100%',
//           '& .MuiInputLabel-root': {
//             color: '#000',      // Set placeholder text color to black
//             fontWeight: 400,   // Set placeholder text font weight to 500
//           },}}
//       />
//     </LocalizationProvider>
//   );
// }

import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function DobSelector({ handleDateOfBirth }) {


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="DOB"
        // defaultValue={dayjs('2022-04-17')}
        minDate={dayjs('1930-01-01')} // Setting the minimum date
        onChange={(newValue) => {
          handleDateOfBirth(dayjs(newValue).format('YYYY-MM-DD'));
        }}
        sx={{
          width: '100%', // Full width
          height: '100%', // Full height
          backgroundColor: 'white', // White background
          borderRadius: '0.5rem', // Rounded corners
          '& .MuiInputLabel-root': {
            color: 'black',
            fontWeight: 600,
            fontSize: '1rem',
            fontFamily: 'Poppins'
          },
          '& .MuiOutlinedInput-root': {
            border: 'none', // No border
            outline: 'none', // No outline
            '& fieldset': {
              border: 'none', // No fieldset border
            },
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none', // No notched outline
          },
          '&:focus': {
            outline: 'none', // No focus outline
          },
        }}
        
      />
    </LocalizationProvider>
  );
}