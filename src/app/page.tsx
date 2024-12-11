import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button><Link href="/editor/123">Start Designing</Link></Button>
    </div>
  );
}
