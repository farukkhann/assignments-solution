// Your task is to create a function calculate_subscription() which will take the following
// arguments:
// 1. expiry_date: String of format dd/mm/yyyy
// 2. months_to_buy: Integer which will be in between 1 and 11 (both inclusive)
// 3. monthly_cost: Integer. Cost of subscription per month

const moment =require("moment")
moment().format()
// var start = moment("2018-03-5", "YYYY-MM-DD");
// var end = moment("2018-05-5", "YYYY-MM-DD");




// console.log(x)
// console.log(Math.floor(y))


// The function should return:
// 1. new_expiry: New expiry date of the user
// 2. cost: Cost of the subscription


calculate_subscription("3/06/2022", 3, 400)

function calculate_subscription(expiry_date,months_to_buy,monthly_cost){
    
    let per_day_cost=monthly_cost/30

    let str=expiry_date
    let arr=str.split("/").map(Number)
    arr[1]=arr[1]+1

    let option1=arr
    option1[0]=1
    option1=option1.join("/")
    let option2=arr
    option2[0]=15
    option2=option2.join("/")
    

    let start=moment(expiry_date,'DD/MM/YYYY')
    let end1=moment(option1,'DD/MM/YYYY')
    let end2=moment(option2,'DD/MM/YYYY')
    
    
    let ans1=moment.duration(end2.diff(start)).asDays();
    let ans2=moment.duration(end1.diff(start)).asDays()


    let difference1=Math.abs(30-ans1)
    let difference2=Math.abs(30-ans2)

    let first_month_cost;
    let total_days;
    if(difference1<difference2){

        first_month_cost=ans1*per_day_cost
        total_days=ans1
    }
    else{
        first_month_cost=ans2*per_day_cost
        total_days=ans2
    }
    
    // console.log(first_month_cost)

    let remaining_total=(months_to_buy-1)*monthly_cost
    let total_cost=remaining_total+first_month_cost

    total_days+=(months_to_buy-1)*30
    var new_date = moment(expiry_date, "DD/MM/YYYY").add(total_days, 'days').format('DD/MM/YYYY')
    console.log(new_date)
    return (total_cost,new_date)
    
}