var nama1 = prompt('Masukkan Nama Anda!!');
if (nama1.trim() === ''){
  console.log('kosong');
} 
  else {
    var nama2 = prompt('Masukkan Nama Pasangan Anda!!');
      if(nama2.trim() === ''){
        console.log('kosong 2');
  } 
    else {
      calc()
  }
}

function calc() {
  anda = nama1.toUpperCase();
  andalength = nama1.length;
  pasangan = nama2.toUpperCase();
  pasanganlength = nama2.length;
  var LoveCount=0;
 
for(Count=0; Count < andalength; Count++) {
    letter1=anda.substring(Count,Count+1);
    if (letter1=='L') LoveCount+=2; 
    if (letter1=='O') LoveCount+=2; 
    if (letter1=='V') LoveCount+=2; 
    if (letter1=='E') LoveCount+=2; 
    if (letter1=='Y') LoveCount+=3; 
    if (letter1=='O') LoveCount+=1; 
    if (letter1=='U') LoveCount+=3;
}
 
for (Count=0; Count < pasanganlength; Count++) {
    letter2=pasangan.substring(Count,Count+1);
    if (letter2=='L') LoveCount+=2;
    if (letter2=='O') LoveCount+=2; 
    if (letter2=='V') LoveCount+=2; 
    if (letter2=='E') LoveCount+=2;
    if (letter2=='Y') LoveCount+=3;
    if (letter2=='O') LoveCount+=1;
    if (letter2=='U') LoveCount+=3; 
}
 
amount=0;
    if (LoveCount> 0) amount=  5-((andalength+pasanganlength)/2)
    if (LoveCount> 2) amount= 10-((andalength+pasanganlength)/2)
    if (LoveCount> 4) amount= 20-((andalength+pasanganlength)/2)
    if (LoveCount> 6) amount= 30-((andalength+pasanganlength)/2)
    if (LoveCount> 8) amount= 40-((andalength+pasanganlength)/2)
    if (LoveCount>10) amount= 50-((andalength+pasanganlength)/2)
    if (LoveCount>12) amount= 60-((andalength+pasanganlength)/2)
    if (LoveCount>14) amount= 70-((andalength+pasanganlength)/2)
    if (LoveCount>16) amount= 80-((andalength+pasanganlength)/2)
    if (LoveCount>18) amount= 90-((andalength+pasanganlength)/2)
    if (LoveCount>20) amount=100-((andalength+pasanganlength)/2)
    if (LoveCount>22) amount=110-((andalength+pasanganlength)/2)
 
if (andalength==0 || pasanganlength==0) amount= "Err";
if (amount < 0) amount= 0;
if (amount >99) amount=99;
 
alert(amount+ "%");
}