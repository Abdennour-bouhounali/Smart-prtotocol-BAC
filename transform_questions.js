const fs = require('fs');

const items = JSON.parse(fs.readFileSync('left_cols.json', 'utf8'));
let content = fs.readFileSync('src/sections/BacIntelligence.jsx', 'utf8');

const transform = (str) => {
    let s = str.trim();
    
    // Verbs that already make it a question
    const verbs = ["بين", "ادرس", "أثبت", "اثبت", "عين", "ناقش", "استنتج", "أحسب", "احسب", "حل", "استعمل", "أوجد", "اوجد", "اشتق", "فسر", "شكل", "أكتب", "اكتب", "أرسم", "حدد", "برهن", "مثل"];
    
    let firstWord = s.split(' ')[0];
    if (verbs.includes(firstWord)) return str;

    // Masdars -> Verbs
    const masdarMap = {
        "إثبات": "أثبت",
        "إيجاد": "أوجد",
        "برهان": "برهن",
        "حصر": "احصر",
        "استغلال": "استغل",
        "دراسة": "ادرس",
        "استنتاج": "استنتج",
        "مناقشة": "ناقش",
        "حساب": "احسب",
        "استخدام": "استخدم",
        "تحديد": "حدد",
        "البرهان": "برهن",
        "المكاملة": "كامل",
        "تكوين": "ما احتمال تكوين",
        "سحب": "ما احتمال سحب",
        "نسحب": "ما احتمال أن نسحب"
    };

    if (masdarMap[firstWord]) {
        return str.replace(firstWord, masdarMap[firstWord]);
    }

    // Specific Nouns mapping
    if (s.startsWith("كسر يحوي")) return str.replace("كسر يحوي", "احسب نهاية كسر يحوي");
    if (s.startsWith("نهاية")) return str.replace("نهاية", "احسب نهاية");
    if (s.startsWith("النهاية")) return str.replace("النهاية", "احسب النهاية");
    if (s.startsWith("مشتقة")) return str.replace("مشتقة", "احسب مشتقة");
    if (s.startsWith("جدول تغيرات")) return str.replace("جدول تغيرات", "شكل جدول تغيرات");
    if (s.startsWith("التغيرات")) return str.replace("التغيرات", "ادرس التغيرات");
    if (s.startsWith("التناقض")) return str.replace("التناقض", "فسر التناقض");
    if (s.startsWith("المتتالية")) return str.replace("المتتالية", "ادرس المتتالية");
    if (s.startsWith("متتاليتان") || s.startsWith("متتاليتين")) return "ادرس " + s;
    if (s.startsWith("جداء حدود")) return str.replace("جداء", "احسب جداء");
    if (s.startsWith("القيمة المتوسطة")) return str.replace("القيمة", "احسب القيمة");
    if (s.startsWith("تكامل")) return str.replace("تكامل", "احسب تكامل");
    if (s.startsWith("العبارة المركبة")) return str.replace("العبارة", "أوجد العبارة");
    if (s.startsWith("تحويل نقطي")) return str.replace("تحويل", "عين تحويل");
    if (s.startsWith("المتغير العشوائي")) return str.replace("المتغير", "ادرس المتغير");
    if (s.startsWith("التوزيع الاحتمالي")) return str.replace("التوزيع", "عين التوزيع");
    if (s.startsWith("لعبة قمار")) return str.replace("لعبة", "ادرس لعبة");
    if (s.startsWith("الدالة المساعدة")) return str.replace("الدالة", "استخدم الدالة");
    if (s.startsWith("الحصول على")) return str.replace("الحصول", "ما احتمال الحصول");
    if (s.startsWith("احتمال")) return str.replace("احتمال", "احسب احتمال");
    if (s.startsWith("تقاطع")) return str.replace("تقاطع", "ادرس تقاطع");
    if (s.startsWith("المسافة")) return str.replace("المسافة", "احسب المسافة");
    if (s.startsWith("مجموعة النقط")) return str.replace("مجموعة", "عين مجموعة");
    if (s.startsWith("معادلة")) return str.replace("معادلة", "عين معادلة");
    if (s.startsWith("القاسم المشترك")) return str.replace("القاسم", "عين القاسم");
    if (s.startsWith("التعداد العكسي")) return str.replace("التعداد", "استعمل التعداد");
    if (s.startsWith("التفسير الهندسي")) return str.replace("التفسير", "ما هو التفسير");
    if (s.startsWith(" يدرس في الجزء")) return str; // special context

    return str; // fallback
};

items.forEach(oldStr => {
    const newStr = transform(oldStr);
    if (oldStr !== newStr) {
        // replace exactly inside <div className="left-col">...</div>
        // escape for regex
        const escapedOld = oldStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`<div className="left-col">${escapedOld}</div>`, 'g');
        content = content.replace(regex, `<div className="left-col">${newStr}</div>`);
    }
});

fs.writeFileSync('src/sections/BacIntelligence.jsx', content);
console.log('Transformation applied.');
