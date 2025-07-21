// وظيفة تسجيل الدخول
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;

  // تحقق من صحة رقم الهاتف وكلمة المرور
  if (phone === "0599999999" && password === "password123") {
    // تخزين بيانات الجلسة في localStorage
    localStorage.setItem('loggedInUser', phone);
    // توجيه المستخدم إلى لوحة التحكم
    window.location.href = "../html/admin-dashboard.html";
  } else {
    // إذا كانت البيانات غير صحيحة
    document.getElementById('errorMessage').textContent = "رقم الجوال أو كلمة المرور غير صحيحة.";
  }
});
