export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function POST(request: Request) {
  const { name, email, interest, message, subscribe } = await request.json();
  console.log(name, email, interest, message, subscribe);
  return new Response(null, { status: 200 });
}

export async function GET() {
  return new Response(null, { status: 200 });
}
