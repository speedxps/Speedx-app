// التحقق من تسجيل الدخول
function checkLoginStatus() {
  const loggedInUser = localStorage.getItem('loggedInUser');
  
  if (!loggedInUser) {
    // إذا لم يكن المستخدم مسجلاً دخوله، إعادة التوجيه إلى صفحة تسجيل الدخول
    window.location.href = "../html/login.html";
  } else {
    // إذا كان المستخدم مسجلاً دخوله، عرض اسمه
    document.getElementById('welcomeMessage').innerText = `مرحبًا، ${loggedInUser}`;
  }
}

// تسجيل الخروج
function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = "../html/login.html";
}

// عند تحميل الصفحة، تحقق من حالة تسجيل الدخول
document.addEventListener("DOMContentLoaded", checkLoginStatus);
