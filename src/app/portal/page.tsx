import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, User } from "lucide-react";

export default async function PortalPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Fetch user profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  // Fetch bookings
  const { data: bookings } = await supabase
    .from("bookings")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-background pt-32 pb-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h1 className="font-serif text-4xl font-bold mb-2">Welcome, {profile?.full_name || 'Client'}</h1>
            <p className="text-muted-foreground">Manage your engagements and bookings securely.</p>
          </div>
          <form action="/auth/signout" method="post">
            <Button variant="outline">Sign Out</Button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Stats */}
          <Card className="border-border shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Bookings</CardTitle>
              <Calendar className="h-4 w-4 text-emerald" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{bookings?.filter(b => b.status !== 'completed' && b.status !== 'cancelled').length || 0}</div>
            </CardContent>
          </Card>
          <Card className="border-border shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Engagements</CardTitle>
              <FileText className="h-4 w-4 text-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{bookings?.length || 0}</div>
            </CardContent>
          </Card>
          <Card className="border-border shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Account Status</CardTitle>
              <User className="h-4 w-4 text-cobalt" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald text-sm uppercase mt-1">Active</div>
            </CardContent>
          </Card>
        </div>

        {/* Bookings List */}
        <div className="mt-12">
          <h2 className="font-serif text-2xl font-bold mb-6">Your Bookings</h2>
          {bookings && bookings.length > 0 ? (
            <div className="grid gap-4">
              {bookings.map((booking) => (
                <Card key={booking.id} className="border-border">
                  <CardContent className="p-6 flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <div>
                      <h3 className="font-semibold text-lg">{booking.service_id.replace(/-/g, ' ')}</h3>
                      <p className="text-sm text-muted-foreground">{booking.engagement_type} • {new Date(booking.created_at).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                        booking.status === 'completed' ? 'bg-emerald/10 text-emerald' :
                        booking.status === 'scheduled' ? 'bg-cobalt/10 text-cobalt' :
                        booking.status === 'cancelled' ? 'bg-destructive/10 text-destructive' :
                        'bg-gold/10 text-gold'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-dashed border-2 border-border bg-transparent">
              <CardContent className="p-12 text-center">
                <p className="text-muted-foreground mb-4">You don't have any bookings yet.</p>
                <a href="/booking">
                  <Button className="bg-emerald text-white hover:bg-emerald-dark">
                    Schedule a Consultation
                  </Button>
                </a>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
