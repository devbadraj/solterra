import ThemeToggle from '@/components/ThemeSwitcher';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import UserDropdown from '@/components/home/UserDropdown';

export default function UserHeader() {
  return (
    <header className="bg-sidebar outline-border flex h-12 w-full items-center justify-between gap-2 outline-1">
      <div className="flex flex-1 items-center gap-2 px-2 md:px-4 lg:px-6">
        <SidebarTrigger className="md:-ml-2" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
      </div>
      <div className="flex gap-2 px-2 md:gap-3 md:px-4 lg:px-6">
        <ThemeToggle />
        <UserDropdown />
      </div>
    </header>
  );
}
