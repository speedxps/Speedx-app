// تحميل بيانات البلاغات الطارئة من emergency.json
function loadEmergencyReports() {
  const reports = JSON.parse(localStorage.getItem('emergencyReports')) || [];

  const reportTable = document.getElementById("emergencyReportsTable");
  reportTable.innerHTML = ""; // تنظيف الجدول قبل إضافة البلاغات

  reports.forEach((report, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${report.title}</td>
      <td>${report.description}</td>
      <td>${report.status}</td>
      <td><button class="action-btn" onclick="resolveReport(${index})">حل المشكلة</button></td>
    `;
    reportTable.appendChild(row);
  });
}

// إضافة بلاغ طارئ
function addEmergencyReport() {
  const title = document.getElementById("reportTitle").value;
  const description = document.getElementById("reportDescription").value;

  if (title && description) {
    const newReport = {
      title,
      description,
      status: "قيد المعالجة"
    };

    let reports = JSON.parse(localStorage.getItem('emergencyReports')) || [];
    reports.push(newReport);
    localStorage.setItem('emergencyReports', JSON.stringify(reports));

    loadEmergencyReports(); // إعادة تحميل البلاغات بعد إضافة بلاغ جديد
  } else {
    alert("يرجى ملء جميع الحقول.");
  }
}

// تغيير حالة البلاغ إلى "تم الحل"
function resolveReport(index) {
  const reports = JSON.parse(localStorage.getItem('emergencyReports')) || [];
  reports[index].status = "تم الحل";
  localStorage.setItem('emergencyReports', JSON.stringify(reports));

  loadEmergencyReports(); // إعادة تحميل البلاغات بعد تحديث الحالة
}

// تحميل البلاغات عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", loadEmergencyReports);
