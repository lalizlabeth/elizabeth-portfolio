import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

// export function PageTemplate({ children }) {
//   return <div></div>;
// }
export default function PageTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
