// البيانات الافتراضية للمستخدمين
const users = [
  { username: "0599999999", role: "مشترك", email: "user1@example.com", subscription: "شهري", plan: "50GB", date: "2023-01-01", price: "50" },
  { username: "0588888888", role: "مشترك", email: "user2@example.com", subscription: "سنوي", plan: "100GB", date: "2022-06-15", price: "120" },
  { username: "admin", role: "مدير", email: "admin@example.com", subscription: "غير محدد", plan: "غير محدد", date: "2021-08-01", price: "0" }
];

// إضافة المستخدمين إلى صفحة الإدارة
function displayUsers() {
  const table = document.getElementById("usersTableBody");
  table.innerHTML = ""; // تنظيف الجدول قبل إضافة المستخدمين

  users.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.username}</td>
      <td>${user.role}</td>
      <td>${user.email}</td>
      <td>${user.subscription}</td>
      <td>${user.plan}</td>
      <td>${user.date}</td>
      <td>${user.price} ₪</td>
      <td>
        <button class="action-btn" onclick="editUser(${index})">✏️ تعديل</button>
        <button class="action-btn" onclick="deleteUser(${index})">🗑️ حذف</button>
      </td>
    `;
    table.appendChild(row);
  });
}

// حذف المستخدم
function deleteUser(index) {
  if (confirm("هل أنت متأكد من حذف المستخدم؟")) {
    users.splice(index, 1);
    displayUsers(); // إعادة تحميل المستخدمين بعد الحذف
  }
}

// تعديل بيانات المستخدم
function editUser(index) {
  const user = users[index];
  const newUsername = prompt("أدخل اسم المستخدم الجديد:", user.username);
  const newEmail = prompt("أدخل البريد الإلكتروني الجديد:", user.email);
  const newSubscription = prompt("أدخل نوع الاشتراك الجديد:", user.subscription);
  const newPlan = prompt("أدخل نوع الباقة الجديد:", user.plan);
  const newPrice = prompt("أدخل السعر الجديد:", user.price);

  if (newUsername && newEmail && newSubscription && newPlan && newPrice) {
    user.username = newUsername;
    user.email = newEmail;
    user.subscription = newSubscription;
    user.plan = newPlan;
    user.price = newPrice;
    displayUsers(); // إعادة تحميل المستخدمين بعد التعديل
  }
}

// عرض المستخدمين عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", displayUsers);
