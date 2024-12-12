const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY");
const arcticDataFile = "arctic-data.json";
const formattedDataFile = "arctic-formatted-data.json";

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error(
    "Missing required environment variables SUPABASE_URL and/or SUPABASE_ANON_KEY"
  );
  Deno.exit(1);
}

// Fetch and save the raw data
const response = await fetch(
  `${SUPABASE_URL}/rest/v1/places?select=*&order=name.asc`,
  {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  }
);

if (!response.ok) {
  console.error("Error fetching data:", response.statusText);
  Deno.exit(1);
}

const places = await response.json();
console.log(`- Fetched places data: (${places.length} records)`);

// Save raw data
await Deno.writeTextFile(arcticDataFile, JSON.stringify(places));
console.log(`- Wrote raw data to ${arcticDataFile}`);

// Save formatted data
await Deno.writeTextFile(formattedDataFile, JSON.stringify(places, null, 2));
console.log(`- Wrote formatted data to ${formattedDataFile}`);
