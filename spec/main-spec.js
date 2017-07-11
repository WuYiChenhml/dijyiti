const main = require('../main/main');
const fs = require('fs')

describe('validate the file exist', () => {

    it('should get HELLOWORLD.md exist in root folder like readme.md', () => {
        fs.exists('./HELLOWORLD.md', (isExist) => {
            expect(isExist).toBe(true);
        })
    });
});
var num1 = 9;
var num2 = 2;
function main(a, b) {
     var result = a % b;
    return result;            //  返回值
};
var ans = main(num1, num2);    // 调用函数，将返回值赋值给变量 ans
console.log(ans);     
