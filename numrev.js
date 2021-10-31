var num=123,rev=0;
//rev number 123 to 321
while(num>0)
{
    rev=(rev*10)+(num%10);
    num=Math.floor(num/10);
}
console.log(rev);
