// script.js

document.addEventListener("DOMContentLoaded", function () {
    // قراءة ملف المقالة النصية وعرضه
    fetch('article.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error("لم يتم العثور على الملف");
            }
            return response.text();
        })
        .then(data => {
            // وضع المحتوى في القسم الذي يحمل معرف "content"
            document.getElementById('content').innerHTML = data.replace(/\n/g, '<br>');
        })
        .catch(error => {
            console.error("خطأ:", error);
            document.getElementById('content').innerHTML = "<p>عذراً، حدث خطأ أثناء تحميل المقالة.</p>";
        });
});
