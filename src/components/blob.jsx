export const BlobEffect = function (event, parent){ 
    const {clientY, clientX} = event;
    const blob = parent.querySelector('.blob');
  

    blob.animate({
       left :`${clientX}px`,
       top: `${clientY}px`
    }, {duration:3000, fill: 'forwards'})

}
