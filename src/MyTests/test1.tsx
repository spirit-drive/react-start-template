const arr: Array<number> = [];

arr.push(1);
console.log(arr);

interface Iobj {
    name: string;
    surname: string;
}

const getdata = (data: Iobj, age: string | number, height?: number) => {
    return { ...data, age: age, height: height };
};

//  console.log(
getdata(
    {
        name: 'Pavel',
        surname: 'Pinchuk',
    },
    10
);
// )

const arr2: Iobj[] = [];
arr2.push({
    name: 'Pavel',
    surname: 'Pinchuk',
});

console.log(arr2); // [{"name": "Pavel","surname": "Pinchuk"}]
