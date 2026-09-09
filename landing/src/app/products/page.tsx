import { redirect } from "next/navigation";

/** Products tab → primary product (InfraOps) matching Figma Products active state. */
export default function ProductsIndexPage() {
  redirect("/products/infraops");
}
