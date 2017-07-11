module.exports = function main() {
    console.log("Debug Info");
    return 'Hello World!';
    var a = '9';
	a = Number(a);
	var b = '4';
	b = Number(b);
	c = Math.floor(a/b);
	d = a-b*c;
    return 'd';
};
