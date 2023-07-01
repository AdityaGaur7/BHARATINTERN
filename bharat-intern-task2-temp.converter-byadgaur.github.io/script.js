
var f1 = () => {
    var inp = document.getElementById('inputtemp').value;
    var out = document.getElementById('outputtemp').value;
    var iunit = document.getElementById('inputunit').value;
    var ounit = document.getElementById('outputunit').value;



    if (iunit == ounit) {
        document.getElementById('outputtemp').value = inp;
        return ;

    }
    if(iunit=="celsius"){
        if(ounit=="fahrenheit"){
            var temp =  (9/5*inp)+32;
            document.getElementById('outputtemp').value =temp ;

        }else if(ounit=="kelvin"){
            var temp =  parseFloat(inp)+273.15;
            document.getElementById('outputtemp').value =temp;

        }
    }else if(iunit=="fahrenheit"){
        if(ounit=="celsius"){
            var temp =  (inp-32)*5/9;
            document.getElementById('outputtemp').value =temp ;

        }else if(ounit=="kelvin"){
            var temp =  (inp-32)*5/9 + 273.15;
            document.getElementById('outputtemp').value =temp;

        }
    }
    else if(iunit=="kelvin"){
        if(ounit=="celsius"){
            var temp = inp-273.15;
            document.getElementById('outputtemp').value =temp;

        }if(ounit=="fahrenheit"){
            var temp= ((inp-273)*9/5)+32;
            document.getElementById('outputtemp').value =temp;

        }
    }

}

function f2(){
    document.querySelector('.content').style.display="block";
    document.querySelector('.home').style.display="none";

}