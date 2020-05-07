


function average() {

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("redblue");
    ctx.drawImage(img, 0, 0);
    var imgData = ctx.getImageData(0, 0, c.width, c.height);
    console.log(imgData);
    ctx.putImageData(imgData, 0, 0);

    var Color1 = "#e74c3c";
    var Color2 = "#f1c40f";

    var AverageColor = "#";
    for (var i = 0; i < 3; i++) {
        var sub1 = Color1.substring(1 + 2 * i, 3 + 2 * i);
        var sub2 = Color2.substring(1 + 2 * i, 3 + 2 * i);

        console.log(sub1);
        console.log(sub2);
        var v1 = parseInt(sub1, 16);
        var v2 = parseInt(sub2, 16);

        console.log(v1);

        var v = Math.floor((v1 + v2) / 2); //Berekening van de gemiddelde kleur
        var sub = v.toString(16).toUpperCase();

        console.log(sub);

        AverageColor += sub;
    }
    document.getElementById("block1").style.backgroundColor = Color1;
    document.getElementById("block1").innerHTML = Color1;
    document.getElementById("block2").style.backgroundColor = Color2;
    document.getElementById("block2").innerHTML = Color2;
    document.getElementById("output").style.backgroundColor = AverageColor;
    document.getElementById("output").innerHTML = AverageColor;
}


