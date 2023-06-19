// Q1...
let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ]
studentRecords.map((item) => {
    console.log(item.name.toUpperCase())
})

// Q2...
let record = studentRecords.filter((item)=>{
    return item.marks > 50
})
console.log(record)

// Q3...
let sum = studentRecords.filter((item) =>{
    return (item.id > 120) && (item.marks > 50)
})
console.log(sum)

// Q4...
let sum1 = studentRecords.reduce((preval, currentval) => {
    return preval += currentval.marks
}, 0)
console.log(sum1)

// Q5...
let names = studentRecords.filter((item) => {
    if (item.marks > 50){
        console.log(item.name) 
    }
})

// Q6...
let sum2 = studentRecords.filter((item)=>{
    return item.id > 120
})
let ans = sum2.reduce((preval,currentval)=>{
    return preval.marks += currentval.marks
})
console.log(ans)

// Q7...
let grace = studentRecords.filter((item)=>{
    return item.marks < 50
})
let arr=[]
for(let i=0; i<grace.length;i++){
    let ans = grace[i].marks + 15
    arr.push(ans)
}
let marks = studentRecords.filter((item)=>{
    return item.marks > 50
})
let total = marks.reduce((preval, currentval)=>{
    return preval.marks += currentval.marks
})
let marks2 = arr.filter((item)=>{
    return item > 50
})
let final = marks2[0]+total
console.log(final)

// Q8...
let studentRecords1 = [ 
    {name: 'Shethal', class: 'EA23', rollno : 13},
    {name: 'Sanofer', class: 'EA22', rollno : 23},
    {name: 'Karthiga', class: 'EA23', rollno : 15},
    {name: 'Mathew', class: 'EA21', rollno : 26},
    {name: 'Rahul', class: 'EA19', rollno : 19},
    {name: 'Farhana', class: 'EA20', rollno : 8}]
console.log(studentRecords1)