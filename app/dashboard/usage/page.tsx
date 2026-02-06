import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle2, XCircle } from "lucide-react";

const usageData = [
  {
    date: "2026-02-06 14:23:15",
    endpoint: "/v1/chat/completions",
    status: "success",
  },
  {
    date: "2026-02-06 14:15:42",
    endpoint: "/v1/embeddings",
    status: "success",
  },
  {
    date: "2026-02-06 13:58:31",
    endpoint: "/v1/chat/completions",
    status: "success",
  },
  {
    date: "2026-02-06 13:42:09",
    endpoint: "/v1/models",
    status: "success",
  },
  {
    date: "2026-02-06 12:31:55",
    endpoint: "/v1/chat/completions",
    status: "error",
  },
  {
    date: "2026-02-06 11:15:23",
    endpoint: "/v1/embeddings",
    status: "success",
  },
  {
    date: "2026-02-06 10:47:18",
    endpoint: "/v1/chat/completions",
    status: "success",
  },
  {
    date: "2026-02-06 09:22:41",
    endpoint: "/v1/images/generations",
    status: "success",
  },
  {
    date: "2026-02-06 08:55:07",
    endpoint: "/v1/chat/completions",
    status: "success",
  },
  {
    date: "2026-02-06 08:12:34",
    endpoint: "/v1/completions",
    status: "success",
  },
  {
    date: "2026-02-05 22:44:19",
    endpoint: "/v1/chat/completions",
    status: "success",
  },
  {
    date: "2026-02-05 21:33:52",
    endpoint: "/v1/embeddings",
    status: "error",
  },
  {
    date: "2026-02-05 20:18:27",
    endpoint: "/v1/chat/completions",
    status: "success",
  },
  {
    date: "2026-02-05 19:05:13",
    endpoint: "/v1/models",
    status: "success",
  },
  {
    date: "2026-02-05 18:42:46",
    endpoint: "/v1/chat/completions",
    status: "success",
  },
];

export default function UsagePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Usage</h1>
        <p className="mt-2 text-muted-foreground">
          Monitor your API request history and performance
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
            <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.4%</div>
            <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247ms</div>
            <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Your latest API requests and their status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Endpoint</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usageData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-mono text-xs">
                    {item.date}
                  </TableCell>
                  <TableCell className="font-mono text-sm">
                    {item.endpoint}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {item.status === "success" ? (
                        <>
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span className="text-sm capitalize text-green-500">
                            {item.status}
                          </span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-4 w-4 text-red-500" />
                          <span className="text-sm capitalize text-red-500">
                            {item.status}
                          </span>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
