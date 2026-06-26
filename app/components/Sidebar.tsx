"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const navItems = [
  { key: "dashboard", href: "/" },
  { key: "stock", href: "/stock" },
  { key: "purchases", href: "/purchases" },
  { key: "sales", href: "/sales" },
  { key: "ledger", href: "/ledger" },
  { key: "attendance", href: "/attendance" },
  { key: "analysis", href: "/analysis" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <aside className="w-64 min-h-screen bg-sidebar flex flex-col border-r border-primary/30">
      <div className="px-6 py-6 border-b border-primary/30">
        <h1 className="text-beige text-xl font-bold tracking-wide">
          {t("appName")}
        </h1>
        <p className="text-soft text-xs mt-1">{t("appSubtitle")}</p>
      </div>
      <nav className="flex flex-col gap-1 px-3 py-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors
              ${
                pathname === item.href
                  ? "bg-primary text-beige"
                  : "text-soft hover:bg-primary/20 hover:text-beige"
              }`}
          >
            {t(item.key)}
          </Link>
        ))}
      </nav>
    </aside>
  );
}