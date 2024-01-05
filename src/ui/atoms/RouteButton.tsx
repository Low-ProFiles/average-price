"use client";
import { useRouter } from "next/navigation";

const RouteButton = ({ url }: { url: string }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(url);
  };
  return (
    <button
      className="w-full rounded bg-blue-500 mt-[6rem] h-[2rem] text-gray-50"
      onClick={() => {
        handleClick();
      }}
    >
      확인하기
    </button>
  );
};

export default RouteButton;
