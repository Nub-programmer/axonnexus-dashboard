import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, TrendingUp } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
        <p className="mt-2 text-muted-foreground">
          Here's an overview of your AxonNexus API usage
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API Key Status</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Active</div>
            <p className="text-xs text-muted-foreground mt-1">
              Your API key is configured and ready to use
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
            <p className="text-xs text-muted-foreground mt-1">
              +12% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium">Quick Start Guide</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">1.</span>
                <span>Generate your API key from the API Keys page</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">2.</span>
                <span>Add the key to your application environment variables</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">3.</span>
                <span>Start making requests to the AxonNexus API endpoints</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">4.</span>
                <span>Monitor your usage and performance from the dashboard</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
