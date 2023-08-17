function calculateMinCost() {
    var input = document.getElementById("rope-lengths").value;
    var ropeLengths = input.split(", ").map(function(item) {
        return parseInt(item, 10);
    });

    ropeLengths.sort(function(a, b) {
        return a - b;
    });

    var totalCost = 0;

    while (ropeLengths.length > 1) {
        var combinedLength = ropeLengths.shift() + ropeLengths.shift();
        totalCost += combinedLength;
        ropeLengths.push(combinedLength);
        ropeLengths.sort(function(a, b) {
            return a - b;
        });
    }

    document.getElementById("result").innerText = "Minimum cost: " + totalCost;
}

