function checkStatus(a, b, c) {
  let name, age, status;
  
  // تجميع المتغيرات حسب نوع البيانات بدلاً من الترتيب الثابت
  let parameters = [a, b, c];
  for (let i = 0; i < parameters.length; i++) {
    if (typeof parameters[i] === "string") {
      name = parameters[i];
    } else if (typeof parameters[i] === "number") {
      age = parameters[i];
    } else if (typeof parameters[i] === "boolean") {
      status = parameters[i];
    }
  }

  // طباعة الرسالة بناءً على حالة العمل (True أو False)
  if (status === true) {
    console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`);
  } else {
    console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`);
  }
}

// Needed Output
checkStatus("Osama", 38, true);  // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true);  // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama");  // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"