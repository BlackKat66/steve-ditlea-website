export async function POST(req: Request) {
  const data = await req.json();

  console.log({ data });
  
  return new Response("Your email has been sent!", {
    status: 200
  })
}