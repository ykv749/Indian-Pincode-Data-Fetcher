let i=0;

function pinclick(pin){
    
    pin=pin.toString();
    // Validation
    if(pin.length!=6){
        console.log(pin.length+' error');
        document.getElementById('disp').innerHTML='Enter a Valid PinCode';
    }
    else {
        //Fetch URL
        var url=`https://api.postalpincode.in/pincode/${pin}`;
        
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            
            if(data[0].Message=="No records found"){
                document.getElementById('disp').innerHTML="PinCode Doesn't exist!!"; 
            }

            else {
                //document.getElementById('disp').innerHTML=JSON.stringify(data);
                let temp='<table><tr><th>Name</th><th>Branch Type</th><th>Block</th><th>State</th></tr>';

                console.log(data[0].Message);
                for(each of data[0].PostOffice){
                    temp+=`<tr><td>${each.Name}</td> <td>${each.BranchType}</td> <td>${each.Block}</td> <td>${each.State}</td><tr/>`;
                    console.log(each.Name, each.BranchType, each.Block, each.State);
                }

                temp+='</table>';

                document.getElementById('disp').innerHTML=temp;  
            }

        });
        
    }
   
}

function makeTableHTML(myArray) {

    var result = "<table border=1>";
    for(var i=0; i<myArray.length; i++) {
        result += "<tr>";
        for(var j=0; j<myArray[i].length; j++){
            result += "<td>"+myArray[i][j]+"</td>";
        }
        result += "</tr>";
    }
    result += "</table>";

    return result;
}

function temp(){
    i++;
    i%=3;
    let arr=['red','yellow','white'];
    document.body.style.backgroundColor = arr[i];
}
