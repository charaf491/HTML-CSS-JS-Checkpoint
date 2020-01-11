
var test=0;


function display(x) 
{
var ch=document.getElementById("display");
k=0;
if (x=='res') 
{
    ch.value="";
}
else if ((x!="-") && (x!="+") && (x!="*") && (x!="/") && (x!="=") ) // x est un chiffre
{   if (test==0)
    {
        ch.value=ch.value+x;
    }
    else /*test==1*/
    {
        ch.value=x;
        test=0;
    }
    // 3+8   = (test=1)  11 + 
}
//3+5=8 (test=1) + (test) 3 = 3 ?    
else // x est un signe
{
    if (ch.value!="")
    {   test=0;
        var valeur=ch.value;
        var dernier= valeur.substr(valeur.length - 1); 
        if ((dernier!="-") && (dernier!="+") && (dernier!="*") && (dernier!="/") && (dernier!="=") )
        {
            var signe=0;
            for(i=0;i<valeur.length;i++)
            {   
                if (!((valeur[i]>="0")&& (valeur[i]<="9") )) 
                {
                    signe=1;
                }
            }
            if(signe==0) // il n'ya qu'un nombre : 9
            {   if (x!="=")
                ch.value=ch.value+x;//ajout du signe : 9+

            }
            else{ // ilya un nombre et un signe : 9+3 
                if(x=="=") // 9+3=
                {
                    ch.value=Compter(valeur); // 12
                    test=1;
                }
               //8 click 5 
                else /* signe differente de = */
                {
                    ch.value=Compter(valeur);
                    ch.value=ch.value+x;
                }
               
            }
        }
    }  

}

function Compter(valeur)
{
    for(i=0;i<valeur.length;i++)
    { if ((valeur.charAt(i)=="+") || (valeur.charAt(i)=="-") ||(valeur.charAt(i)=="/") ||(valeur.charAt(i)=="*") ||(valeur.charAt(i)=="=") )
    { 
        var signe=valeur[i];
        var op1=valeur.substr(0,i);
        var op2=valeur.substr(i+1,valeur.length-i);
    }     
    }
    var a=parseInt(op1);
    var b=parseInt(op2);
    if (signe=="+") 
    {
        return a+b;
    }
    else if (signe=="-") 
    {
        return a-b;
    }
    else if (signe=="*") 
    {
        return a*b;
    }
    else if (signe=="/") 
    {
        return a/b;
    }
}
/*
"56" 
+
*/
}
