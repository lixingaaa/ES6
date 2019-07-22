// import命令，用于加载profile.js文件，并从中输入变量
// import命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。
import {
  firstName,
  lastName,
  year
} from './profile.js';

function setName(element) {
  element.textContent = firstName + ' ' + lastName;
}

// 如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。
import {
  lastName as surname
} from './profile.js';

// import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。
// a = {}; // Syntax Error : 'a' is read-only;

// 上面代码中，脚本加载了变量a，对其重新赋值就会报错，因为a是一个只读的接口。但是，如果a是一个对象，改写a的属性是允许的。
// 这种写法很难查错，建议凡是输入的变量，都当作完全只读，轻易不要改变它的属性。
// a.foo = 'hello'; // 合法操作

// import后面的from指定模块文件的位置，可以是相对路径，也可以是绝对路径，.js后缀可以省略。如果只是模块名，不带有路径，那么必须有配置文件，告诉 JavaScript 引擎该模块的位置。
// util是模块文件名，由于不带有路径，必须通过配置，告诉引擎怎么取到这个模块。
// import {myMethod} from 'util';

// 注意，import命令具有提升效果，会提升到整个模块的头部，首先执行。
// foo();
// import { foo } from 'my_module';
// 上面的代码不会报错，因为import的执行早于foo的调用。这种行为的本质是，import命令是编译阶段执行的，在代码运行之前。

// 由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。
// 报错
// import { 'f' + 'oo' } from 'my_module';

// // 报错
// let module = 'my_module';
// import { foo } from module;

// // 报错
// if (x === 1) {
//   import { foo } from 'module1';
// } else {
//   import { foo } from 'module2';
// }

// 逐一指定要加载的方法
import {
  area,
  circumference
} from './circle';

console.log('圆面积：' + area(4));
console.log('圆周长：' + circumference(14));

// 整体加载的写法如下
import * as circle from './circle';
console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));

// 注意，模块整体加载所在的那个对象（上例是circle），应该是可以静态分析的，所以不允许运行时改变。下面的写法都是不允许的。
// 下面两行都是不允许的
// circle.foo = 'hello';
// circle.area = function () {};