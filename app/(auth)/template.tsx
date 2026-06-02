"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {useState} from "react";





const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <nav>
        <ul>
          {navLinks.map((link) => {
            const isActive =
              link.href === pathname ||
              (pathname.startsWith(link.href) && link.href !== "/");
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isActive ? "text-blue-500" : "text-gray-500"}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}

//one return version
// export default function AuthLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();

//   return (
//     <div>
//       <nav>
//         <ul>
//           {navLinks.map((link) => (
//             <li key={link.href}>
//               <Link
//                 href={link.href}
//                 className={
//                   link.href === pathname ||
//                   (pathname.startsWith(link.href) &&
//                     link.href !== "/")
//                     ? "text-blue-500"
//                     : "text-gray-500"
//                 }
//               >
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       <main>{children}</main>
//     </div>
//   );
// }
