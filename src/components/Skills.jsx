import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function Skills() {
    return (
        <div className="container mt-5">
            <h1>My Skills</h1>
        <div className="progress mb-4">
  <div className="progress-bar bg-secondary" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">HTML-CSS-JAVASCRIPT</div>
</div>
<div className="progress mb-4">
  <div className="progress-bar bg-primary" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">REACT JS</div>
</div>
<div className="progress mb-4">
  <div className="progress-bar bg-warning" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">NEXT JS</div>
</div>
<div className="progress mb-4">
  <div className="progress-bar bg-danger" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">EXPRESS JS</div>
</div>
<div className="progress mb-4">
  <div className="progress-bar bg-info" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">STRAPI CMS</div>
</div>
<div className="progress mb-4">
  <div className="progress-bar bg-danger" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">SQLITE - POSTGRESQL</div>
</div>
<div className="progress mb-4">
  <div className="progress-bar bg-success" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">PYTHON</div>
</div>
<div className="progress mb-4">
  <div className="progress-bar bg-info" role="progressbar" style={{width: "60%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">JAVA</div>
</div>

</div>
    );
}
  
export default Skills;


// import React from 'react'
// import Rating from '@material-ui/lab/Rating';
// import { Box, Typography } from '@material-ui/core';
// import LinearProgress from '@material-ui/core/LinearProgress';


// const Skills = () => {
//     return (
//         <div>
//            <Box component="fieldset" mb={3} borderColor="transparent">
//         <Typography component="legend">Read only</Typography>
//         <Rating name="read-only" value={4} readOnly />
//       </Box> 
//       <Box display="flex" alignItems="center">
          
//       <Box width="100%" mr={1}>
//       <Typography component="legend">React</Typography>  
//         <LinearProgress variant="determinate"/>
//       </Box>
//       <Box minWidth={35}>
//         <Typography variant="body2" color="textSecondary">{`70%`}</Typography>
//       </Box>
//     </Box>
//     <Box display="flex" alignItems="center">
          
//       <Box width="100%" mr={1}>
//       <Typography component="legend">HTML</Typography>  
//         <LinearProgress variant="determinate"/>
//       </Box>
//       <Box minWidth={35}>
//         <Typography variant="body2" color="textSecondary">{`70%`}</Typography>
//       </Box>
//     </Box>
//         </div>
//     )
// }

// export default Skills
