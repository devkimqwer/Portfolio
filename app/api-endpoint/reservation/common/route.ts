import { TableReservation } from "@/interface/server/reservation";
import { cookies } from "next/headers";

// 테이블 예약 등록
export async function POST(request: Request) {
  let id;

  const cookieStore = cookies();
  const token = cookieStore.get("TTG_TOKEN");
  if (token && token.value) {
    id = token.value;
  }

  const resData = {
    status: 200,
    resBody: Object.create({}),
  };

  if (!id || id !== "111") {
    resData.status = 403;
  } else {
    const reqJSON = await request.json();
    const reservation: TableReservation = {
      tableID: reqJSON.tableID,
      tableName: reqJSON.tableName,
      userID: id,
      startYYYYMMDDHHMI: reqJSON.startTime,
      durationSec: reqJSON.duration,
    };

    // TODO - DB Insert
    // Sample
    tableReservationListSample.push(reservation);

    resData.resBody.msg = "예약 성공!";
  }

  return new Response(JSON.stringify(resData.resBody), {
    status: resData.status,
  });
}

// 테이블 현황 조회 - 유저 체크 불필요(=open api)
export async function GET(request: Request) {
  const resData = {
    status: 200,
    resBody: Object.create({}),
  };

  // TODO - DB Select
  const tableReservationList: TableReservation[] = tableReservationListSample;

  resData.resBody.msg = "조회 성공!";
  resData.resBody.data = tableReservationList.map((tableReservation) => ({
    tableID: tableReservation.tableID,
    startTime: tableReservation.startYYYYMMDDHHMI,
    duration: tableReservation.durationSec,
  }));

  return new Response(JSON.stringify(resData.resBody), {
    status: resData.status,
  });
}

//
//
//
//
//
// Sample
const tableReservationListSample: TableReservation[] = [
  {
    userID: "111",
    tableID: "table1",
    tableName: "테이블 111",
    startYYYYMMDDHHMI: "202410152100",
    durationSec: 3600,
  },
];
