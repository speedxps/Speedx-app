// وظيفة تسجيل الخروج
function logout() {
  // مسح بيانات المستخدم من localStorage
  localStorage.removeItem('loggedInUser');
  
  // إعادة توجيه المستخدم إلى صفحة تسجيل الدخول
  window.location.href = "../html/login.html";
}

// التحقق من أن المستخدم مسجل دخوله عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function() {
  // إذا لم يكن هناك مستخدم مسجل دخوله، إعادة التوجيه إلى صفحة تسجيل الدخول
  if (!localStorage.getItem('loggedInUser')) {
    window.location.href = "../html/login.html";
  }
});
