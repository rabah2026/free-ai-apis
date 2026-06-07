import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مرشد واجهات الذكاء الاصطناعي — واجهات الذكاء الاصطناعي المجانية للمبتدئين",
  description: "اكتشف واجهات الذكاء الاصطناعي الرسمية مع طبقات مجانية وأرصدة مجانية وتوثيق واضح وأمثلة عملية.",
};

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return <div dir="rtl" lang="ar">{children}</div>;
}
