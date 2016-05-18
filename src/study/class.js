

console.log( '========= class =============')
//
class Foo {
  constructor() {
  		 this.x = 1 ;
    	//return {} ;
    	// return Object.create(null);
  }
}

console.log(  ' new  Foo() instanceof Foo: ', new Foo() instanceof Foo ) ;


 
console.log( '========= class end  =============')
export default {};