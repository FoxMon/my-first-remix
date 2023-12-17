import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

import { AboutDetail } from "~/components/AboutDetail";

/**
 * 서버 사이드 렌더링
 *
 * CSR의 경우 JS 불러오기 전까지 빈 화면 봐야 하는데,
 * 서버 사이드 렌더링을 하게 되면 JS 전에 이미 페이지 볼 수 있음.
 *
 * 빈 페이지가 아니기 때문에 SEO에도 좋음
 *
 * `Remix`에서는 데이터 fetching의 경우 loader와 useLoaderData Hook 사용
 * `json` 함수의 역할은 content-type을 application/json으로 설정
 * 또한 loader의 경우 이미 데이터가 로딩 되어 있는 것을 보장
 */
export const loader = async () => {
  const res = await fetch("https://reqres.in/api/users?page=2");
  const data = await res.json();

  return json(data);
};
export default function About() {
  const datas = useLoaderData();
  console.log(datas);

  return (
    <div>
      About
      <AboutDetail />
    </div>
  );
}
