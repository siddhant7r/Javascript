let employee={
    emp_name:"Sid",
    emp_age:12,
    emp_id:120,
    empbankstatus:{
        salary:1000,
        bank_name:"rbi"
    },
    emp_function:function(){
        console.log("object Function");
    },

    emp_array:[1,"abc",4.5]

}

// for(let k in employee){
//     console.log(k);
// }

// for(let k in employee){
//     console.log(employee[k]);
// }

// for(let k in employee){
//     console.log(k + " = " + employee[k]);
// }

//console.log(employee.empbankstatus.bank_name)

// let k=Object.keys(employee)
// console.log(k)

// let v=Object.values(employee)
// console.log(v)

console.log(employee.emp_array[1]);


