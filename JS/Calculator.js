console.log('hello world');

function AddTwoNumber(){
    let n1 = document.getElementById('txt_num1').value
    let n2 = document.getElementById('txt_num2').value
    console.log(n1);
    console.log(n2);
    let result = parseInt(n1) + parseInt(n2)
    console.log(result);
    document.getElementById('result').innerHTML = result;
    
}

function SubTwoNumber(){
    let n1 = document.getElementById('txt_num1').value
    let n2 = document.getElementById('txt_num2').value
    console.log(n1);
    console.log(n2);
    let result = parseInt(n1) - parseInt(n2)
    console.log(result);
    document.getElementById('result').innerHTML = result;
    
}





