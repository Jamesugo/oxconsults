import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldAlert, Users, Calendar, LayoutDashboard } from "lucide-react";

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // We know the user is an admin because middleware checks it, 
  // but let's double check role just in case.
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (profile?.role !== 'admin') {
    redirect("/portal");
  }

  // Fetch global stats
  const { count: clientsCount } = await supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('role', 'client');
  const { count: bookingsCount } = await supabase.from('bookings').select('*', { count: 'exact', head: true });
  const { count: insightsCount } = await supabase.from('insights').select('*', { count: 'exact', head: true });

  return (
    <div className="min-h-screen bg-secondary/20 pt-32 pb-16">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShieldAlert className="w-5 h-5 text-destructive" />
              <span className="text-sm font-bold uppercase tracking-wider text-destructive">Admin Access</span>
            </div>
            <h1 className="font-serif text-4xl font-bold">Command Center</h1>
          </div>
          <form action="/auth/signout" method="post">
            <Button variant="outline">Sign Out</Button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Clients</CardTitle>
              <Users className="h-4 w-4 text-emerald" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{clientsCount || 0}</div>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Bookings</CardTitle>
              <Calendar className="h-4 w-4 text-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{bookingsCount || 0}</div>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Published Insights</CardTitle>
              <LayoutDashboard className="h-4 w-4 text-cobalt" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{insightsCount || 0}</div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-background rounded-xl border border-border p-8 text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">CMS Modules</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Select a module to manage content or review client bookings. Full CRUD capabilities are enabled for each entity.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="h-12 px-6">Manage Bookings</Button>
            <Button variant="outline" className="h-12 px-6">Manage Insights</Button>
            <Button variant="outline" className="h-12 px-6">Manage Case Studies</Button>
            <Button variant="outline" className="h-12 px-6">Manage Team</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
