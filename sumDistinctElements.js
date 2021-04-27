function sumDistinctElements1 (set1,set2){
    let arr=[];
    let sum =null;
    for(let el in set1)
    {
            if (set2.has(el))
            {
                set2.delete(el);
                set1.delete(el);
            }
            else
            {
                sum += el;

            }
    }
    for(let el in set)
    {
        sum+= el;
    }
    console.log("Distinct Elements Sum : ",toString(sum)); 
}

/*--------------------------------------------------------------------------------------------------------*/

function sumDistinctElements2 (set1,set2){
    console.log("set1:",toString(set1));
    console.log("set2:",toString(set2));
    const myMap = new Map();
    let sum =null ;
    for(let i=0; i<set1.size ;i++)
    {
        let element =set1[i];
        if (myMap.has(element))
        {
            let count = myMap.get(element);
            myMap.set (element, count+1);
        }
        else
        {
            myMap.set(element, 1);
        }
    }
    for(let i=0; i<set2.size ;i++)
    {
        let element =set2[i];
        if (myMap.has(element))
        {
            let count = myMap.get(element);
            myMap.set (element, count+1);
        }
        else
        {
            myMap.set(element, 1);
        }
    }
    for(let key in myMap)
    {
        if (myMap[key]==1)
        {
            sum+=parseInt(key);
        }
    }
    console.log("Distinct Elements Sum : ",toString(sum));

}
