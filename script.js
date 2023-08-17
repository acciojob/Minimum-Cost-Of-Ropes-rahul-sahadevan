// function calculateMinCost() {
// 	var arr = document.getElementById("rope-lengths").value.split(", ").map(function(item){
// 		return parseInt(item,10);
// 	});
// 	let ans = 0;
// 	arr.sort();
// 	let i =0;
// 	let j =1;

// 	while(arr[j] != Number.MAX_VALUE){
// 		console.log(arr[i],arr[j]);
// 		ans = ans + arr[i]+arr[j];
// 		arr[i] = arr[i]+arr[j];
// 		arr[j] = Number.MAX_VALUE;
// 		arr = sorted(arr.length , arr);
// 	}
// 	document.getElementById("result").innerText = ans;
																		   
  
  
// }  
// function sorted(n,arr){
// 	for(let i=0;i<n;i++){
// 		for(let j=i+1;j<n;j++){
// 			if(arr[i]>arr[j]){
// 				let temp = arr[i];
// 				arr[i] = arr[j];
// 				arr[j] = temp;
// 			}
// 		}
// 	}
// 	return arr;
// }
function calculateMinCost() {
    var arr = document.getElementById("rope-lengths").value.split(", ").map(function(item){
        return parseInt(item, 10);
    });
    let ans = 0;
    arr.sort(function(a, b) {
        return a - b;
    });
    let i = 0;
    let j = 1;

    while (arr[j] !== Number.MAX_VALUE) {
        console.log(arr[i], arr[j]);
        ans = ans + arr[i] + arr[j];
        arr[i] = arr[i] + arr[j];
        arr[j] = Number.MAX_VALUE;
        arr = sorted(arr.length, arr);
    }
    document.getElementById("result").innerText = ans;
}

function sorted(n, arr) {
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

