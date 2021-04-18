 import React from 'react';
 
 const SkeletonElement = ( {type} ) => {

    const classes = `skeleton__${type}`

     return (
         <div className={classes}></div>
     );
 };
 
 export default SkeletonElement;