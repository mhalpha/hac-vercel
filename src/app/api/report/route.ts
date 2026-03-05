import { NextRequest, NextResponse } from 'next/server';

const AZURE_URL =
  'https://prod-07.australiasoutheast.logic.azure.com:443/workflows/7029692bc9c7478bb177c7f2669e5f40/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=yX289pvxnzb74V5Mmc-zBFyDiYJMB62bN9wZkcmCwrE';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const response = await fetch(AZURE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  return NextResponse.json({ ok: response.ok }, { status: response.status });
}
