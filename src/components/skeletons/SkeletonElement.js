 import React from 'react';
 
 const SkeletonElement = ( {type, typeLoader} ) => {

    const classes = `skeleton__${typeLoader}__${type}`;

     return (
         <div className={classes}></div>
     );
 };
 
 export default SkeletonElement;