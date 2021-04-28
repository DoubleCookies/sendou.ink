import {
  Box,
  Button,
  Flex,
  IconButton,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { useActiveNavItem, useMyTheme, useUser } from "hooks/common";
import { signIn, signOut } from "next-auth/client";
import Image from "next/image";
import Link from "next/link";
import { FiLogIn, FiLogOut, FiMenu } from "react-icons/fi";
import ColorModeSwitcher from "./ColorModeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = ({ openNav }: { openNav: () => void }) => {
  const [isSmall] = useMediaQuery("(max-width: 400px)");
  const [user] = useUser();
  const { secondaryBgColor } = useMyTheme();
  const { colorMode } = useColorMode();
  const activeNavItem = useActiveNavItem();

  return (
    <Box
      display="flex"
      as="header"
      justifySelf="center"
      fontWeight="bold"
      letterSpacing={1}
      justifyContent="space-between"
      alignItems="center"
      mb={1}
      bg={secondaryBgColor}
    >
      <Flex justify="space-between" align="center" width="6rem" px={2}>
        <ColorModeSwitcher /> <LanguageSwitcher />
        <IconButton
          aria-label="Open menu"
          variant="ghost"
          color="current"
          onClick={openNav}
          icon={<FiMenu />}
          _hover={
            colorMode === "dark"
              ? { bg: "white", color: "black" }
              : { bg: "black", color: "white" }
          }
          borderRadius="0"
          size="sm"
          display={["flex", null, null, "none"]}
        />
      </Flex>
      <Flex justify="center" align="center" fontSize="sm" color="white.300">
        <Link href="/">{isSmall ? "s.ink" : "sendou.ink"}</Link>{" "}
        {activeNavItem && (
          <>
            <Box mx={1}>-</Box>{" "}
            <Image
              src={`/layout/${activeNavItem.code}.png`}
              height={24}
              width={24}
              priority
            />
            <Box ml={1}>{activeNavItem.name}</Box>
          </>
        )}
      </Flex>
      <Button
        width="6rem"
        data-cy="color-mode-toggle"
        aria-label="Log in"
        variant="ghost"
        color="current"
        onClick={() => (user ? signOut() : signIn("discord"))}
        leftIcon={user ? <FiLogOut /> : <FiLogIn />}
        _hover={
          colorMode === "dark"
            ? { bg: "white", color: "black" }
            : { bg: "black", color: "white" }
        }
        borderRadius="0"
        size="xs"
        px={2}
        height="30px"
      >
        {user ? "Log out" : "Log in"}
      </Button>
    </Box>
  );
};

export default Header;
