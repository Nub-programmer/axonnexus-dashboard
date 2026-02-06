import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Topbar() {
  return (
    <div className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
      <div className="flex-1" />
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarFallback className="bg-primary text-primary-foreground">
            AN
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
