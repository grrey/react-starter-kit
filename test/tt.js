
// 被 import  到  client.js 中; 来 运行;



console.log(new Promise((resolve, reject)=> {
  resolve(123)
}));

var createPromise = ( a ) => {
    return  new Promise((resolve, reject)=> {
      resolve(a )
    });

}


var  f =   async  function () {
   var t  =   await   createPromise( 222 );
   console.log( t );
  return  t ;
};





