window.onload = function() {

    console.info("Time for Server Learning!");

    let data;
    document.getElementById("submitbuttonexample").onclick = datafrominput;

    function datafrominput() {
        data = document.getElementById("inputexample").value;
        console.log(data); 
        document.getElementById("datadisplay").innerHTML = `${data}`;
    }

    
}