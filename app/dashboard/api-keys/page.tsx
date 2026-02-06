"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, RefreshCw, Eye, EyeOff } from "lucide-react";

export default function ApiKeysPage() {
  const [showKey, setShowKey] = useState(false);
  const [copied, setCopied] = useState(false);

  const maskedKey = "axn_live_********************************************";
  const fullKey = "axn_live_sk_1234567890abcdefghijklmnopqrstuvwxyz123456";

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">API Keys</h1>
        <p className="mt-2 text-muted-foreground">
          Manage your AxonNexus API authentication keys
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your API Key</CardTitle>
          <CardDescription>
            Use this key to authenticate your requests to the AxonNexus API
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="flex-1 rounded-md border border-input bg-muted px-4 py-3 font-mono text-sm">
                {showKey ? fullKey : maskedKey}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowKey(!showKey)}
              >
                {showKey ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleCopy}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            {copied && (
              <p className="text-xs text-green-500">Copied to clipboard!</p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="destructive" size="sm">
              <RefreshCw className="mr-2 h-4 w-4" />
              Regenerate Key
            </Button>
          </div>

          <div className="rounded-lg border border-orange-500/50 bg-orange-500/10 p-4">
            <div className="flex items-start space-x-3">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/20">
                <span className="text-xs font-bold text-orange-500">!</span>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-orange-500">
                  Keep your API key secure
                </h4>
                <p className="text-sm text-muted-foreground">
                  Never share your API key publicly or commit it to version control.
                  Anyone with this key can make requests on your behalf and consume your quota.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Documentation</CardTitle>
          <CardDescription>
            Learn how to integrate AxonNexus into your applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Authentication</h3>
              <div className="rounded-lg bg-muted p-4 font-mono text-xs">
                <code>
                  curl https://api.axonnexus.com/v1/chat \<br />
                  &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY" \<br />
                  &nbsp;&nbsp;-H "Content-Type: application/json" \<br />
                  &nbsp;&nbsp;-d '{"{"}"model": "gpt-4", "messages": [...]{"}"}'
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
