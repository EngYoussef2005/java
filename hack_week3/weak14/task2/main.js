// إنشاء الـ Function التي تقوم بإنشاء الـ Popup
function createPopup() {
  // إنشاء عناصر الـ HTML برمجياً
  let div = document.createElement("div");
  div.className = "popup";

  let h2 = document.createElement("h2");
  h2.textContent = "Welcome";

  let p = document.createElement("p");
  p.textContent = "Welcome To Elzero Web School";

  let button = document.createElement("button");
  button.className = "close-btn";
  button.textContent = "X";

  // عند الضغط على زر الإغلاق، يتم حذف الـ Popup من الصفحة
  button.onclick = function () {
    div.remove();
  };

  // تجميع العناصر داخل الـ Div الرئيسي
  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(button);

  // إضافة الـ Popup إلى جسم الصفحة (body)
  document.body.appendChild(div);
}

// تشغيل الـ Function بعد 5 ثوانٍ من تحميل الصفحة
setTimeout(createPopup, 5000);