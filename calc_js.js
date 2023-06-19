function clearScreen() {
    document.getElementById("result").value = ' ';
    
    historyCalc(' ');
    history = '';
    
}
 
function display(value) {
    document.getElementById("result").value += value;
    historyCalc(value);
    
}
 
function calculate() {
    let a = document.getElementById("result").value;
    let b = eval(a);
    document.getElementById("result").value = b;
    historyCalc('=' + b);

    
} 

let history = '';
function historyCalc(val){
    history += val;
    document.getElementById('history').innerHTML = history;


}