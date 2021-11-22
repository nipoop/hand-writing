function Foo(){
    getName = function(){
        console.log(1);
    }
    return this;
}
Foo.getName = function(){
    console.log(2);
}
Foo.prototype.getName = function(){
    console.log(3);
}
var getName = function(){
    console.log(4);
}
function getName(){
    console.log(5);
}

Foo.getName();//输出2.
//调用Foo函数作为对象动态添加的属性方法 getName
//Foo.getName = function(){console.log(2);}

getName();//输出4.
//这里Foo函数还没有执行，getName还没有被覆盖
//所以这里还是最上面的getName=function(){console.log(4);}

Foo().getName();//输出1
//Foo()执行，先覆盖全局的getName，再返回this
//this是window，Foo().getName()就是调用window.getName
//此时全局的getName已被覆盖成function(){console.log(1);}
//所以输出为1
//从这里开始window.getName已被覆盖为function(){console.log(1);}

getName();//输出1
//window.getName(),输出1

new Foo.getName();//输出2
//new 就是找构造函数(),由构造函数结合性，这里即使Foo无参，也不能省略(),所以不是Foo().getName()
//所以Foo.getName为一个整体，等价于new (Foo.getName)();
//而 Foo.getName其实就是函数function(){console.log(2);}的引用
//那么new (Foo.getName)()，就是在以Foo.getName为构造函数，实例化对象。
//就类似于 new Person();Person是一个构造函数


new Foo().getName();//输出3
//new就是找构造函数()，等价于(new Foo() ).getName();
//执行new Foo() => 以Foo为构造函数，实例化一个对象
//(new Foo() ).getName;访问这个实例化对象的getName属性
//实例对象自己并没有getName属性，构造的时候也没有添加，找不到，就到原型中找
//发现Foo.prototype.getName = fucntion(){console.log(3);}
//原型中有，找到了，所以执行(new Foo() ).getName()结果为3

new new Foo().getName();//输出为3
//new就是找构造函数()，等价于new ( (new Foo() ).getName ) ()
//先看里面的（new Foo() ).getName
//new Foo() 以Foo为构造函数，实例化对象
//new Foo().getName 找实例对象的 getName 属性,自己没有，就去原型中找
//发现 Foo.prototype.getName = function() {console.log(3);}
//所以里层（new Foo() ).getName就是以Foo为构造函数实例出的对象的一个原型属性
//属性值为一个函数function(){console.log(3);}的引用
//所以外层new ( (new Foo() ).getName )()在以函数function(){console.log(3);}为构造函数，构造实例
//构造过程中执行了console.log(3),输出3
