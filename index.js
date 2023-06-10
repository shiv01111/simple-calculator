function add(){
    var act=0 , b=0;
    act=f.clnum.value;
    b=act.charAt(act.length-1);
    if(b=='+'||b=='-' || b=='/' || b=='*')
    {
        f.clnum.value=act.substring(0,act.length-1);
        f.clnum.value+='+';

    }
    else{
        f.clnum.value +='+';

    }
}
function sub(){
    var act=0 , b=0;
    act=f.clnum.value;
    b=act.charAt(act.length-1);
    if(b=='+'||b=='-' || b=='/' || b=='*')
    {
        f.clnum.value=act.substring(0,act.length-1);
        f.clnum.value+='-';

    }
    else{
        f.clnum.value+='-';

    }
}
   
function div(){
    var act=0 , b=0;
    act=f.clnum.value;
    b=act.charAt(act.length-1);
    if(b=='+'||b=='-' || b=='/' || b=='*')
    {
        f.clnum.value=act.substring(0,act.length-1);
        f.clnum.value+='/';

    }
    else{
        f.clnum.value+='/';

    }
}
function mul(){
    var act=0 , b=0;
    act=f.clnum.value;
    b=act.charAt(act.length-1);
    if(b=='+'||b=='-' || b=='/' || b=='*')
    {
        f.clnum.value=act.substring(0,act.length-1);
        f.clnum.value+='*';

    }
    else{
        f.clnum.value+='*';

    }
}