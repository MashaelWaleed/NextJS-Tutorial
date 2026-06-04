import { Card } from "@/components/card";
import Link from "next/link";
export default function Notifications() {
  return (
    <Card>
      <h2>Notifications</h2>
      <p>You have 3 new notifications.</p>
      <div>
        <Link href="/complex-dashboard/archived">
           Archived 
        </Link>
      </div>
    </Card>
  );
}
