// تحميل الإشعارات من localStorage
function loadNotifications() {
  const notifications = JSON.parse(localStorage.getItem('notifications')) || [];

  const notificationsTable = document.getElementById("notificationsTable");
  notificationsTable.innerHTML = ""; // تنظيف الجدول قبل إضافة الإشعارات

  notifications.forEach((notification, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${notification.title}</td>
      <td>${notification.message}</td>
      <td>${notification.date}</td>
      <td><button class="action-btn" onclick="markAsRead(${index})">تمت القراءة</button></td>
    `;
    notificationsTable.appendChild(row);
  });
}

// إضافة إشعار
function addNotification() {
  const title = document.getElementById("notificationTitle").value;
  const message = document.getElementById("notificationMessage").value;
  const date = new Date().toLocaleString();

  if (title && message) {
    const newNotification = {
      title,
      message,
      date,
      status: "غير مقروء"
    };

    let notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    notifications.push(newNotification);
    localStorage.setItem('notifications', JSON.stringify(notifications));

    loadNotifications(); // إعادة تحميل الإشعارات بعد إضافة إشعار جديد
  } else {
    alert("يرجى ملء جميع الحقول.");
  }
}

// تغيير حالة الإشعار إلى "تمت القراءة"
function markAsRead(index) {
  const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
  notifications[index].status = "تمت القراءة";
  localStorage.setItem('notifications', JSON.stringify(notifications));

  loadNotifications(); // إعادة تحميل الإشعارات بعد التحديث
}

// تحميل الإشعارات عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", loadNotifications);
