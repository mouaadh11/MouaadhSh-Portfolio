import { useState } from "react";
import { LogOut, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { seedPortfolioData } from "@/data/seedPortfolioData";
import { useAuth } from "@/hooks/useAuth";
import { seedDefaultPortfolioData } from "@/services/portfolioService";
import AdminCollectionManager from "./AdminCollectionManager";
import AdminProfileForm from "./AdminProfileForm";
import { adminCollectionConfigs } from "./adminConfig";

const tabs = [
  { id: "profile", label: "Profile" },
  ...adminCollectionConfigs.map((config) => ({
    id: config.collectionName,
    label: config.label,
  })),
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isSeeding, setIsSeeding] = useState(false);
  const { user, logout } = useAuth();
  const activeConfig = adminCollectionConfigs.find(
    (config) => config.collectionName === activeTab,
  );

  async function handleSeed() {
    if (!window.confirm("Seed Firestore with the default portfolio content? Existing matching IDs will be overwritten.")) {
      return;
    }

    setIsSeeding(true);

    try {
      await seedDefaultPortfolioData(seedPortfolioData);
      toast.success("Default content seeded.");
      window.location.reload();
    } catch (caughtError) {
      toast.error(caughtError instanceof Error ? caughtError.message : "Unable to seed content.");
    } finally {
      setIsSeeding(false);
    }
  }

  async function handleLogout() {
    await logout();
    toast.success("Logged out.");
  }

  return (
    <main className="min-h-screen w-full bg-black px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Admin</p>
            <h1 className="mt-2 text-3xl font-black">Portfolio CMS</h1>
            <p className="mt-2 text-sm text-gray">{user?.email}</p>
          </div>
          <div className="flex flex-wrap gap-2 text-gray ">
            <Button
              type="button"
              variant="outline"
              onClick={() => void handleSeed()}
              disabled={isSeeding}
            >
              <RefreshCw />
              {isSeeding ? "Seeding..." : "Seed default content"}
            </Button>
            <Button type="button" variant="outline" onClick={() => void handleLogout()}>
              <LogOut />
              Logout
            </Button>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="h-fit rounded-2xl border border-white/10 bg-white/10 p-3">
            <nav className="flex gap-2 overflow-x-auto lg:flex-col">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 rounded-lg px-4 py-2 text-left text-sm font-semibold transition-colors ${
                    activeTab === tab.id
                      ? "bg-orange text-black"
                      : "text-gray hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          <div>
            {activeTab === "profile" ? (
              <AdminProfileForm />
            ) : activeConfig ? (
              <AdminCollectionManager config={activeConfig} />
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
