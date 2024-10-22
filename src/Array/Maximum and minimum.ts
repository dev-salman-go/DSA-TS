const getMinMax = (arr: number[]) =>{
    if(arr?.length>0){
        let max = arr[0]
        let min = arr[0]

        for(let i=0; i< arr.length; i++){
            if (arr[i] > max){
                max = arr[i]
            }
            if(arr[i] < min){
                min = arr[i]
            }
        }
        return {min, max}
    }
}

const testArray = [3, 5, 4, 1, 9]
const minMaxRes = getMinMax(testArray)
console.log("🚀 ~ minMaxRes:", minMaxRes)

// Space Complexity = O(1) as we used just 2 vars
// Time complexity = O(n) as we iterate entire array