// //การแสดงผลในหน้าเว็บไซต์
// document.write("Hello World")

// //หน้าต่างแจ้งเตือน
// alert("Hello World")
// alert("สวัสดีค่ะ")

// //แสดงใน console
// console.log("ทดสอบระบบสำเร็จ")

// //ตัวแปรแบบที่ใช้งานได้ทุกส่วน
// var Fullname = "Aittiphon";

// //ตัวแปรแบบ ไม่เปลี่ยนแปลงค่า
// const number = 20; 

// //แสดงข้อมูลของตัวแปร
// document.write(Fullname);
// document.write(number);

// //แปลงจากข้อความ เป็นตัวเลข

// // let result = "123abc";
// // let total = parseInt(result);

// // document.write(total); 



// //  แปลงจากตัวเลขเป็น ข้อความ
// let Num = 123;
// let result = Num.toString();
// document.write(result);

// //เช็คชนิดตัวแปร
// let total = typeof(result);
// document.write(total);


// // let num = 12312121;
// // let Text = typeof(num);

// // document.write(Text);

// // document.write(typeof(num));



// // let number2 = "";
// // let number3 = null ;


//     // อยากแปลงค่าอายุ 
//     // ถ้า อายุ 18 ปี ขึ้นไป ให้ขึ้นคำว่า "บรรลุนิติภาวะ"
//     // ถ้าน้อยว่า ให้ขึ้นคำว่า "ยังไม่บรรลุนิติภาวะ"

//     var age = 18;

//     if (age >= 18){
//         document.write("บรรลุนิติภาวะ");
//     } else if (age >= 12){
//         document.write("มีผู้ปกครอง");
//     } else {
//         document.write("ดูแลโดยผู้ปกครอง");
//     }



// // ตัดเกรดคะแนน
// // โดยถ้าคะแนนมากกว่า 100 ให้ขึ้นคำว่า สอบผ่าน
// // แต่ถ้าน้อยกว่า ให้ขึ้นคำว่า สอบตก ไปสอบใหม่นะ




// // เขียนโปรแกรม แปลงค่าอุณหภูมิ
// // โดยให้มีการเปรียบเทียบดังนี้
// //  - ถ้าอุณหภูมิมากกว่า 30 องศา ให้ขึ้นคำว่า ร้อนมากครับ
// //  - ถ้าอุณหภูมิมากกว่า 10 องศา ให้ขึ้นคำว่า เริ่มหนาวแล้ว
// //  - ถ้าอุณหภูมิต่ำกว่านั้น ให้ขึ้นคำว่า น้ำร้อนเย็นหมดแล้ว




// // - Switch Case 
// // - for
// // - Do 
// // - While



// // แปลงค่าตัวเลขให้เป็นเดือน 
// var mouth = 8;
// switch (mouth) {
//     case 1 : 
//         document.write("มกราคม");
//     break;

//     case 2 : 
//         document.write("กุมภาพันธ์");
//     break;

//     case 3 : 
//         document.write("มีนาคม");
//     break;

//     case 4 : 
//         document.write("เมษายน");
//     break;

//     default :
//         document.write("ไม่ตรงกับเงื่อนไขใด ๆ");
//     break;
// }






// // แปลงจากเลขเป็น วัน
// // โดยให้เริ่มที่เลข 1 เป็นวันจันทร์ แล้วไล่ไปจนถึงวันอาทิตย์



// // สมมุติ อยากแสดงคำว่า สวัสดี 4 ครั้ง
// // i = 0 > คือ กำหนดค่าที่จะให้นับเริ่มต้น
// // i < 4 คือ ตั้งค่าให้มีการทำซ้ำ 4 ครั้ง
// // i = i + 1 คือ เพิ่มค่าตัวจำนวนนับทีละ 1


// for (i = 1 ; i < 5 ; i = i + 1){
//     document.write(" สวัสดี "); 
//     document.write(i); 
// }


//แสดงคำว่า  อยากกลับบ้าน 
// จำนวน 13 ครั้ง โดยมีตัวเลขแสดงด้วย
// แสดงเลข 1 เป็นลำดับแรก




//ฟังก์ชันแบบไม่มมีการรับค่า
// function showmessage() {
//     alert("ยินดีต้อนรับ");
// }

// showmessage(); //การเรียกใช้งานฟังก์ชัน

// //ฟังก์ชันแบบมีการรับค่า
// function cal(number){
//     return document.write(number * 2);
// }

// cal(40); //เรียกใช้งานของฟังก์ชัน

// function showname(realname, surname){
//     return document.write(realname + " " + surname);
// }

// showname("อิทธิพล", "สมเสมอ"); //เรียกใช้งานของฟังก์ชัน




function changecolor(){
    let name = document.getElementById("Test-1");
    name.style.color = "red";
    name.style.backgroundColor = "yellow";
}

function test(){
    let result = document.querySelector(".Test-2");
    result.setAttribute("class", "light");
}

let mode = document.querySelector(".mode");

function drakmode(){
    mode.setAttribute("class", "drak");
}

function lightmode(){
    mode.setAttribute("class", "light");
}





function changetext(){
    let text = document.getElementById("change-text").value;
    let result = document.getElementById("showtext");

    result.innerHTML = text;
}


