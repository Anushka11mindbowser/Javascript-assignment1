var url = "https://run.mocky.io/v3/010e898c-a05c-4a0a-b947-2a65b5a267c5";

var userData = [];

const d = new Date();
let time = d.getHours();
let c;
var avatar = document.createElement("img");


//console.log(userData)





function greet(c) {

    if (time >= 06 && time < 12) {
        return "Good Morning, " + c;
    } else if (time >= 12 && time < 17) {
        return "Good Afternoon, " + c;
    } else if (time >= 17 && time < 21) {
        return "Good Evening, " + c;
    } else {
        return "Hope you had a good Day, " + c;
    }

}




function deleteData(index) {
    for (let i = 0; i < userData.length; i++) {
        if (index === i) {
            userData.splice(i, 1);
            tableData(userData);
        }
    }
}






function displayData(index) {
    // console.log(this.userData[index]);
    c = this.userData[index].first_name;




    document.getElementById('img1').src = this.userData[index].avatar;
    document.getElementById('greeting').innerHTML = greet(c);


    document.getElementById("fname").innerHTML = (this.userData[index].first_name);
    document.getElementById("lname").innerHTML = (this.userData[index].last_name);
    document.getElementById("uid").innerHTML = (this.userData[index].uid);
    document.getElementById("dob").innerHTML = (this.userData[index].date_of_birth);
    document.getElementById("emp").innerHTML = (this.userData[index].employment.title);
    document.getElementById("country").innerHTML = (this.userData[index].address.country);
    document.getElementById("crecard").innerHTML = (this.userData[index].credit_card.cc_number);
    document.getElementById("subs").innerHTML = (this.userData[index].subscription.status);







}
// window.onload = () => {


//     //userdata[i]

//     fetch(url).then(res => {
//         res.json().then(data => {
//             console.log(data);
//             this.userData = userData.push(data);
//             if (userData.length > 0) {
//                 console.log("Anushka" + userData)
//                 var temp = "";



//                




















//             }
//         })
//     })
// }

async function getData(url) {
    await fetch(url).then((data) => {
        return data.json();
    }).then((objdata) => {
        // console.log(objdata);
        objdata.map((values) => {
            userData.push(values);
        })
        console.log(userData);
        tableData(userData);
        //getUserData(0);
    }).catch((err) => {
        alert("Problem Fetching User Data ! :( ");
        console.log(err);
    })
}

getData(url);

function tableData(data1) {
    let temp = ""
    data1.forEach((element, i) => {
        //console.log(i)

        temp += `<tr onclick=displayData(${i})>`;
        temp += "<td>" + element.first_name + "</td>";
        temp += "<td>" + element.last_name + "</td>";
        temp += "<td>" + element.username + "</td>";
        temp += "<td>" + element.employment.title + "</td>";
        temp += "<td>" + element.address.country + "</td>";
        temp += `<td onclick=deleteData(${i})>` + "Remove" + "</td>";
        temp += "</tr>";


    });



    document.getElementById('data').innerHTML = temp;
}