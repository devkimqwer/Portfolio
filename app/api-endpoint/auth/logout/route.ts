export async function GET(request: Request) {
  const resData = {
    status: 200,
    resBody: Object.create({}),
  };

  return new Response(JSON.stringify(resData.resBody), {
    status: resData.status,
    headers: { "Set-Cookie": "TTG_TOKEN=; Path=/; Max-Age=0;" },
  });
}
