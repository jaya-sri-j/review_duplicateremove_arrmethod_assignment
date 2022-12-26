var array=[10,20,30,40,50,60,70,30,40,10];
document.write("<h1>GIVEN ARRAY</h1>",array);
function removeDuplicate(x)
{
	for(i=0;i<x.length-1;i++)
	{
		j=i+1;
		while ( x[i]!=x[j] && j!=x.length)
		{
			j++;
		}
		if(x[i]==x[j])
		{
			x.splice(i,1);
			i=-1;
		}
	}
	
	document.write("<h1>AFTER REMOVING DUPLICATES</h1>",x);
}
removeDuplicate(array);
