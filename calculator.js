let cal = {

  sum : function(){
    this.res = this.n + this.m;
    console.log(this.res)
  },
  sub : function(){
    this.res = this.n - this.m;
    console.log(this.res)
  },
  mul : function(){
    this.res = this.n * this.m;
    console.log(this.res)
  },
  div : function(){
    this.res = this.n / this.m;
    console.log(this.res)
  },
};

let sum1 = {
  n : 10,
  m : 20,
  res :0,
}


cal.sum.call(sum1)
cal.sub.call(sum1)
cal.mul.call(sum1)
cal.div.call(sum1)


let cal2 = {
  sum: function(a,b){
    let res = a + b;
    console.log(res)
  },
  sub: function(a,b){
    let res = a - b;
    console.log(res)
  },
  mul: function(a,b){
    let res = a * b;
    console.log(res)
  },
  div: function(a,b){
    let res = a / b;
    console.log(res)
  }
};

let sum2 ={
    
}
 
let arr = [4,5]

cal2.sum.apply(sum2,arr)
cal2.sub.apply(sum2,arr)
cal2.mul.apply(sum2,arr)
cal2.div.apply(sum2,arr)



let cal3 = {
  sum: function(a,b){
    let res = a + b;
    console.log(res)
  },
  sub: function(a,b){
    let res = a - b;
    console.log(res)
  },
  mul: function(a,b){
    let res = a * b;
    console.log(res)
  },
  div: function(a,b){
    let res = a / b;
    console.log(res)
  },
};

let fn = function(a,b){
  console.log(a);
  console.log(b);
  console.log(this);
}

let obj = {
  'a' :20,
  'b' : 10
}
let new_fn = cal3.div.bind(obj);
new fn();

let new_par = fn.bind()
new_par(10,20)

