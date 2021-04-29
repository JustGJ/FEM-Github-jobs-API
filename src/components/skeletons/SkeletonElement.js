 import React from 'react';
 
 const SkeletonElement = ( {type, typeLoader} ) => {

    const classes = `wave skeleton__${typeLoader}__${type}`;

     return (
         <div style={{position: "relative", overflow:'hidden'} } className={classes}></div>
     );
 };
 
 export default SkeletonElement;