import { createAuthService } from "@/src/app/services/auth.service";
import { Menu, Button, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
// import {
//   IconSettings,
//   IconSearch,
//   IconPhoto,
//   IconMessageCircle,
//   IconTrash,
//   IconArrowsLeftRight,
// } from "@tabler/icons-react";

const _authSvc = createAuthService();

export default function UserMenu() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await _authSvc.logout();
      console.log({ response });
      router.push(
        `/auth/login`,
      );
    } catch (error: unknown) {
      console.log({ error });
    }
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button color="primary">My Account</Button>
      </Menu.Target>

      <Menu.Dropdown>
        {/* <Menu.Label>Application</Menu.Label> */}
        <Menu.Item
        // leftSection={<IconSettings size={14} />}
        >
          Settings
        </Menu.Item>
        <Menu.Item
        // leftSection={<IconMessageCircle size={14} />}
        >
          Messages
        </Menu.Item>

        <Menu.Divider />

        {/* <Menu.Label>Danger zone</Menu.Label> */}
        <Menu.Item
          color="red"
          // leftSection={<IconTrash size={14} />}
          onClick={handleLogout}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
