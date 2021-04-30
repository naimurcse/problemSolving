
function x(){
    function y(){
        let a = 10;
        console.log(a);   // Output: 10
    }
    console.log(a); // Output: Error
    y();
}
x();