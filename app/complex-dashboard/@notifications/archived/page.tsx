import { Card } from "@/components/card";
import Link from "next/link";
export default function ArchivedNotifications() {
  return (
    <Card>
      <h2>Archived Notifications</h2>
      <p>Here are your archived notifications.</p>

      <div>
        <Link href="/complex-dashboard">
          Default
        </Link>
      </div>
    </Card>
  );
}
