// Windmill Script Example
// Type: Typescript

import { w } from "windmill-client";

export async function main(
  webhook_url: string = "https://hooks.slack.com/services/..."
) {
  console.log("Starting data processing...");

  // Mock fetching data
  const data = await fetchData();
  
  // Process data
  const processed = data.map(item => ({
      ...item,
      processed_at: new Date().toISOString()
  }));

  // Send notification if items processed > 0
  if (processed.length > 0) {
      await fetch(webhook_url, {
          method: "POST",
          body: JSON.stringify({ text: `Processed ${processed.length} items.` })
      });
  }

  return processed;
}

async function fetchData() {
    return [
        { id: 1, name: "Task A" },
        { id: 2, name: "Task B" }
    ];
}
