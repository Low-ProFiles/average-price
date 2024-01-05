import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  display: "swap",
  variable: "--font-pretendard",
  src: [
    {
      path: "./fonts/Pretendard-Thin.woff2",
      weight: "100",
      style: "thin",
    },
    {
      path: "./fonts/Pretendard-ExtraLight.woff2",
      weight: "200",
      style: "thin",
    },
    {
      path: "./fonts/Pretendard-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "./fonts/Pretendard-Regular.woff2",
      weight: "400",
      style: "thin",
    },
    {
      path: "./fonts/Pretendard-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "semiBold",
    },
    {
      path: "./fonts/Pretendard-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/Pretendard-ExtraBold.woff2",
      weight: "800",
      style: "thin",
    },
    {
      path: "./fonts/Pretendard-Black.woff2",
      weight: "900",
      style: "black",
    },
  ],
});

export const metadata: Metadata = {
  title: "적립식 주식 계산기",
  description: "지금 갖고 있는 내 주식, 이 기간 동안 샀다면 지금은 얼마일까?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>
        <div className="w-full min-w-[430px] h-screen grid place-content-center bg-blue-50 max-[430px]:bg-white">
          <div className="w-[30vw] h-[80vh] min-w-[430px] min-[430px]:shadow-xl rounded-2xl	bg-white">
            <div className="p-[4rem]">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
