(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;b="<center>",c=document,d=1,e=10,f=[],g=[],h=[],i=[],a=5;while(a--)b+="<button id=C"+a+" onclick=F("+a+")></button> ";c.write(b+"<h3 id=I></h3><button id=D onclick=D()>"),a=52;while(a--)i[a]="<h1 style=width:2em;color:"+(a>25&&"red")+">"+String.fromCharCode([3,0,5,6][a/13|0]+9824)+"A23456789TJQK".split("")[a%13]+"<h6>…";D=function(){if(!(d=!d)){a=52;while(a--)g[a]=f[a]=0}a=5;while(a--)if(!d||g[a]){while(f[k=Math.random()*52|0]);f[k]=1,t=c.getElementById("C"+a),t.style.opacity=1,t.innerHTML=i[k],h[a]=k+13}if(d){l=[0,0,0,0],m=[],n=o=p=q=r=s=0,h.sort(),a=13;while(a--)m[a]=0;a=13;while(a--)m[h[a]%13]++,l[h[a]/13|0]++;a=13;while(a--)j=m[a],j==2?n++:j==3?o++:j==4&&p++;a=13;while(a--)l[a]==5&&(q=1);h[4]-h[1]==3&&h[4]-h[0]==12&&q?s=8:h[4]-h[0]==4&&q&&(s=7),a=5;while(a--)h[a]=h[a]%13+13;h.sort(),s||(p?s=6:o&&n?s=5:q?s=4:h[4]-h[3]!=1||h[3]-h[2]!=1||h[2]-h[1]!=1||h[1]-h[0]!=1&&h[4]-h[0]!=12?o?s=2:n==2&&(s=1):s=3)}c.getElementById("D").innerHTML=d?"New Game":"Trade Selected Cards",c.getElementById("I").innerHTML=(d?"You lose0Two Pairs0Three0Straight0Flush0Full House0Four0Straight Flush0Royal Flush".split(0)[s]+"!<h3>"+(e+=s*2):".<h3>"+ --e)+"0$"},F=function(a){d||(c.getElementById("C"+a).style.opacity=(g[a]=!g[a])?.3:1)},D()})()