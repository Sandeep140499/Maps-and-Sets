console.log("connecting");

///"Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"

function duplicateNum(D){
    let num = [new Set(D)];
    
    console.log(num);
}

const string = "abcadeecfb";
duplicateNum(string);


// "Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"

const Count_Occ = (s) => 
{
    let Array = s.split("").sort();
    var p;
    let mapOne = new Map();
    for(let i =0; i<Array.length;i++)
    {
      c=0;
      Array.reduce((acc,curr)=>
      {
        if(curr == Array[i])
        {
          c=acc+1;
        }
        return c;
      }, 0);
      mapOne.set(`${Array[i]}`,c);
    }
    let newArr = [];
    mapOne.forEach((curr,key)=>
    {
    if(curr>=1)
    {
        newArr.push(key + "=" + curr);
    }
    
    });
    return (newArr.join("\n"));
};
console.log(Count_Occ("abcadeecfb"));