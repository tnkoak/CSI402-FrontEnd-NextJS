"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
const router = useRouter();
const [isChecking, setIsChecking] = useState(false);

const CheckPermission = () => {
  setIsChecking(true);
  setTimeout(() => {
    const hasPermission = Math.random() > 0.5;
    if(hasPermission) {
      alert('มีสิทธิ์ใช้งาน');
      router.push('/about');
    } else {
      alert('ไม่มีสิทธิ์ใช้งาน');
    }
    setIsChecking(false);
  }, 1000);
};

return (
  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="flex flex-col items-center gap-4 sm:gap-6 text-center sm:text-3xl sm:font-extrabold bg-white my-[auto] rounded p-8">
      <label htmlFor="username" className="text-1xl text-gray-500">กรุณาตรวจสอบสิทธ์</label>
      <button 
        onClick={CheckPermission}
        disabled={isChecking}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {isChecking ? 'กำลังตรวจสอบ...' : 'ตรวจสอบสิทธ์ผู้ใช้'}
      </button>
    </div>
  </div>
);
}