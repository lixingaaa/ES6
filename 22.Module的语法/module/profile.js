// export var firstName = 'Michael';
// export var lastName = 'Jackson';
// export var year = 1958;

// 其他写法
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;


export {
  firstName,
  lastName,
  year
};

// 上面代码在export命令后面，使用大括号指定所要输出的一组变量。它与前一种写法（直接放置在var语句前）是等价的，但是应该优先考虑使用这种写法。
// 因为这样就可以在脚本尾部，一眼看清楚输出了哪些变量。

// export命令除了输出变量，还可以输出函数或类（class）。
export function multiply(x, y) {
  return x * y;
}

// export输出的变量就是本来的名字，但是可以使用as关键字重命名。
function v1() {}

function v2() {}

// 使用as关键字，重命名了函数v1和v2的对外接口。重命名后，v2可以用不同的名字输出两次。
export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
}

// export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
// export 1; // 报错

// var m = 1;
// export m; // 报错

// 正确的写法
// 写法一
export var m = 1;

// 写法二
var m = 1;
export {
  m
};

// 写法三
var n = 1;
export {
  n as m
};

// function和class的输出，也必须遵守这样的写法。
// 报错
// function f() {}
// export f;

// 正确
export function f() {};

// 正确
function f() {}
export {
  f
};

// export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
// 输出变量foo，值为bar，500 毫秒之后变成baz。
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);