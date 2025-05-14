'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { navigationLink } from '@/constants/navLinks';
import { IconLogout2 } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 px-2">
          <Image
            src="/solterra_logo.png"
            alt="logo.png"
            width={100}
            height={100}
            loading="eager"
            draggable={false}
            unoptimized
            className="size-8"
          />
          <p className="text-primary font-medievalSharp text-2xl font-semibold" onClick={() => window.location.href = '/'}>
            Solterra
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {navigationLink.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className="text-muted-foreground/60 uppercase">
              {item.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton
                      asChild
                      className="group/menu-button bg-secondary data-[active=true]:bg-primary dark:data-[active=true]:bg-primary/70 hover:bg-primary/40 h-9 gap-2 rounded-md font-medium [&>svg]:size-auto"
                      isActive={item.url === pathname}
                    >
                      <Link
                        href={item.url}
                        prefetch={false}
                        target={
                          item.title == 'Help Center' ? '_blank' : '_self'
                        }
                      >
                        {item.icon && (
                          <item.icon
                            className="text-muted-foreground/60 group-data-[active=true]/menu-button:text-accent-foreground"
                            size={22}
                            aria-hidden="true"
                          />
                        )}
                        <p>{item.title}</p>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="data-[active=true]:from-primary/20 data-[active=true]:to-primary/5 hover:bg-destructive/20 h-9 cursor-pointer gap-3 rounded-md font-medium [&>svg]:size-auto">
              <IconLogout2
                className="text-muted-foreground/60 group-data-[active=true]/menu-button:text-primary"
                size={22}
                aria-hidden="true"
              />
              <span>Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
