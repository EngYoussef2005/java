// 1. جلب العناصر الأساسية من الـ DOM
let form = document.forms[0];
let elementsCount = document.querySelector("[name='elements']");
let elementsText = document.querySelector("[name='texts']");
let elementType = document.querySelector("[name='type']");
let resultsDiv = document.querySelector(".results");

// 2. الاستماع لحدث الضغط على زر الإنشاء (Submit)
form.onsubmit = function (e) {
  // منع إعادة تحميل الصفحة
  e.preventDefault();

  // حذف أي عناصر قديمة تم إنشاؤها مسبقاً
  resultsDiv.innerHTML = "";

  // 3. عمل Loop بعدد العناصر الذي أدخله المستخدم
  for (let i = 1; i <= elementsCount.value; i++) {
    
    // إنشاء العنصر بناءً على الاختيار (Div أو Section)
    let myElement = document.createElement(elementType.value.toLowerCase());
    
    // إضافة الـ Class والـ Title
    myElement.className = "box";
    myElement.title = "Element";
    
    // إضافة الـ ID بزيادة الرقم تلقائياً (id-1, id-2, ...)
    myElement.id = `id-${i}`;
    
    // وضع النص الذي كتبه المستخدم داخل العنصر
    let myText = document.createTextNode(elementsText.value);
    myElement.appendChild(myText);
    
    // إدراج العنصر الجديد داخل الـ results div
    resultsDiv.appendChild(myElement);
  }
};