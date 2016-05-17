
// 被 import  到  client.js 中; 来 运行;



var createPromise = ( a ) => {
  return  new Promise((resolve, reject)=> {
    resolve(a )
  });
}

 

var  f =   async  function ( arg ) {
 
  var result   =   await   createPromise( 11 );

  console.log(" result = " , result )

   var  result2 =    await  createPromise( " 22 result "+ result )
 	
 	console.log( 'arg runt' ,result2)

 	return  result2
};

 
var  ret  = f( console.log );

ret.then( (a )=>{
	console.log( "all  run result = " , a )
})


console.log(  "async fun return = " ,  ret );




export  default {};

