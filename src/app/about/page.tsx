"use client"
import { useRouter } from 'next/navigation';

export default function About() {
 const router = useRouter();

 return (
   <div className="min-h-screen bg-gray-100 p-8">
     <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
       <h1 className="text-3xl font-bold mb-6">65007905 ธนกร สิงห์ก้อม</h1>
       <p className="text-gray-600 mb-6">
         ยินดีต้อนรับเข้าสู่ระบบ คุณมีสิทธิ์ใช้งานระบบนี้แล้ว
       </p>
       <button
         onClick={() => router.push('/')}
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
       >
         กลับหน้าหลัก
       </button>
     </div>
   </div>
 );
}