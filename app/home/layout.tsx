import UserHeader from '@/components/home/Header';
import { ReactNode } from 'react';
import { AppSidebar } from '@/components/home/Sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="overflow-hidden">
        <UserHeader />
        <div className="min-h-[100vh] flex-1 md:min-h-min">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
