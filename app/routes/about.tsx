import { useLoaderData } from "@remix-run/react";

// chakra
import { Box, Flex } from "@chakra-ui/react";

// components
import { AboutDetail } from "~/components/AboutDetail";

interface User {
  id: string;

  avatar: string;

  email: string;

  first_name: string;

  last_name: string;
}

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
export const loader = async (): Promise<User[]> => {
  const res = await fetch("https://reqres.in/api/users?page=2");
  const data = await res.json();

  return data.data;
};

export default function About() {
  const datas: User[] = useLoaderData();

  return (
    <Flex
      w="100%"
      h="100%"
      minH="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Flex
          w="100%"
          h="100%"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          gap="20px"
        >
          {datas.map((data: User) => (
            <AboutDetail
              key={data.id}
              avatar={data.avatar}
              email={data.email}
              first_name={data.first_name}
              last_name={data.last_name}
            />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
