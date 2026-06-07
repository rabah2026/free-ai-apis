import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "عن الموقع وسياسة التحقق | مرشد واجهات الذكاء الاصطناعي",
  description: "كيف نتحقق من معلومات الواجهات البرمجية والتزامنا بالإشارة إلى مصادر المزوّدين الرسمية فقط.",
};

export default function ArAboutPage() {
  return (
    <div dir="rtl" className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-white mb-6">عن الموقع وسياسة التحقق</h1>
      <div className="space-y-8 text-[#7d94b5] text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-white mb-3">ما هو هذا الموقع</h2>
          <p>مرشد واجهات الذكاء الاصطناعي هو دليل موجّه للمبتدئين يضم واجهات الذكاء الاصطناعي الرسمية. هدفنا مساعدة المطورين الجدد في العثور على واجهات موثوقة — مع معلومات صادقة عن الطبقات المجانية والأسعار ومستوى الصعوبة.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-white mb-3">مصادر رسمية فقط</h2>
          <p>كل مزوّد مدرج في الموقع يرتبط فقط بالموقع الرسمي للمزوّد والتوثيق الرسمي. لا نرتبط بأي وسيط غير رسمي أو موقع يدّعي توفير مفاتيح API مجانية.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-white mb-3">الأسعار والطبقات المجانية تتغير</h2>
          <p>تتغير الطبقات المجانية والأسعار وحدود المعدل بشكل متكرر. نضع تاريخ آخر تحقق في كل صفحة مزوّد. هذا هو التاريخ الذي تحققنا فيه من المعلومات مقابل المصادر الرسمية.</p>
          <p className="mt-3 font-medium text-amber-300">تحقق دائمًا من صفحة التسعير الرسمية قبل بناء تطبيق يعتمد على طبقة مجانية.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-white mb-3">كيف نتعامل مع المعلومات غير المؤكدة</h2>
          <p>إذا لم تكن الطبقة المجانية للمزوّد موثقة بوضوح أو لم نتمكن من التحقق منها من المصادر الرسمية، فإننا نضع علامة «راجع الأسعار» بدلًا من التخمين أو اختراع أرقام. نفضل الصدق على الثقة الزائفة.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-white mb-3">ما لا نقوم به</h2>
          <ul className="space-y-2">
            <li>• لا نبيع مفاتيح API ولا نوفر الوصول لأي خدمة ذكاء اصطناعي.</li>
            <li>• لا نوصي بمواقع «مفاتيح API مجانية» غير رسمية — فهي غالبًا غير آمنة.</li>
            <li>• لا ندّعي أن أي واجهة برمجية لديها وصول «مجاني غير محدود» ما لم تنص الوثائق الرسمية على ذلك بوضوح.</li>
            <li>• لا تربطنا علاقات تابعة مع أي مزوّد مدرج.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-bold text-white mb-3">إخلاء المسؤولية</h2>
          <div className="bg-amber-950/30 border border-amber-900/50 rounded-xl p-4 text-amber-300">
            قد تتغير الحدود المجانية والأسعار. تحقق دائمًا من صفحة التسعير الرسمية قبل الاستخدام في الإنتاج. يقدم هذا الموقع معلومات لأغراض تعليمية فقط.
          </div>
        </section>
      </div>
    </div>
  );
}
