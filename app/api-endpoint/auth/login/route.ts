import { cookies } from "next/headers";

export async function POST(request: Request) {
  let id = (await request.json()).id;

  // request body로 id를 전달받지 못한 경우, 쿠키에서 확인한다.
  if (!id) {
    const cookieStore = cookies();
    const token = cookieStore.get("TTG_TOKEN");
    if (token && token.value) {
      console.log("> token으로 대체 로그인합니다: ", token.value);
      id = token.value;
    }
  }

  const resData = {
    status: 200,
    resBody: Object.create({}),
  };

  if (!id || id !== "111") {
    resData.status = 403;
  } else {
    resData.resBody.msg = "로그인 성공!!";
    resData.resBody.id = id;
  }

  return new Response(JSON.stringify(resData.resBody), {
    status: resData.status,
    headers:
      resData.status === 200
        ? {
            "Set-Cookie": `TTG_TOKEN=${id}; Path=/; Max-Age=3600; HttpOnly`,
          }
        : { "Set-Cookie": "TTG_TOKEN=; Path=/; Max-Age=0;" },
  });
}
