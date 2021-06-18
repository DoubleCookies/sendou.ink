import { Box, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import { t, Trans } from "@lingui/macro";
import MyLink from "components/common/MyLink";
import QuadTable from "components/player/QuadTable";
import TwinTable from "components/player/TwinTable";
import XRankTable from "components/player/XRankTable";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import {
  getPlayerWithPlacements,
  GetPlayerWithPlacementsData,
} from "prisma/queries/getPlayerWithPlacements";
import { useState } from "react";
import MyHead from "../../components/common/MyHead";

interface Props {
  player: GetPlayerWithPlacementsData;
}

const PlayerPage = (props: Props) => {
  const player = props.player!;

  const router = useRouter();
  const [tab, setTab] = useState<"XRANK" | "TWIN" | "QUAD">(
    getInitialTabValue()
  );

  const tabs = getTabs();

  return (
    <>
      <MyHead title="Results" />
      {player.user?.discordId && (
        <Box>
          <MyLink href={`/u/${player.user.discordId}`}>
            <Trans>User page</Trans>
          </MyLink>
        </Box>
      )}

      <RadioGroup
        onChange={(value) => {
          router.replace(`?tab=${value}`, undefined, { shallow: true });
          setTab(value as "XRANK" | "TWIN" | "QUAD");
        }}
        value={tab}
      >
        <HStack direction="row" my={8} spacing={6} fontWeight="bold">
          {tabs.includes("XRANK") && (
            <Radio value="XRANK">
              <Trans>X Rank Top 500</Trans>
            </Radio>
          )}
          {tabs.includes("TWIN") && (
            <Radio value="TWIN">
              <Trans>League (Twin)</Trans>
            </Radio>
          )}
          {tabs.includes("QUAD") && (
            <Radio value="QUAD">
              <Trans>League (Quad)</Trans>
            </Radio>
          )}
        </HStack>
      </RadioGroup>

      {tab === "XRANK" && <XRankTable player={player} />}
      {tab === "TWIN" && <TwinTable player={player} />}
      {tab === "QUAD" && <QuadTable player={player} />}
    </>
  );

  function getPlayerName() {
    if (player?.placements.length) return player.placements[0].playerName;

    return "???";
  }

  function getInitialTabValue() {
    if (
      !router.query.tab ||
      typeof router.query.tab !== "string" ||
      !getTabs().includes(router.query.tab)
    )
      return getTabs()[0];

    return router.query.tab as any;
  }

  function getTabs() {
    const result = [];
    if (player.placements.length) result.push("XRANK");
    if (player.leaguePlacements.TWIN.length) result.push("TWIN");
    if (player.leaguePlacements.QUAD.length) result.push("QUAD");

    return result;
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const player = await getPlayerWithPlacements(params!.id as string);

  if (!player) return { notFound: true };

  return {
    props: {
      player: player,
    },
  };
};

export default PlayerPage;
