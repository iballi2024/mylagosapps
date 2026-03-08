import { Box, Image, Space } from "@mantine/core";
import UsersComments from "../../shared/contents/UsersComments/Index";

export default function UsersFeedbacks() {
  return (
    <>
      <UsersComments />
      <Space h={40} />
      <Box
        component="ul"
        display={"flex"}
        className="gap-3 items-center"
        w={300}
        mx={{ base: "auto", md: "unset" }}
      >
        <Box component="li">
          {/* <Text fz={20} fw={700}>
                  AppStore
                </Text> */}
          <Box component="a" href="#">
            <Image
              // src={AppStoreLogo}
              src={"/assets/images/appstore-logo.png"}
              alt="AppStore Logo"
              width={100}
              height={100}
            />
          </Box>
        </Box>
        <Box component="li">
          <Box component="a" href="#">
            <Image
              // src={AppStoreLogo}
              src={"/assets/images/playstore-logo.png"}
              alt="AppStore Logo"
              width={100}
              height={100}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
