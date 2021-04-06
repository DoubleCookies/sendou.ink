import { Radio, RadioGroup, Select, Stack } from "@chakra-ui/react";
import { t } from "@lingui/macro";
import { RankedMode } from "@prisma/client";
import Top500Table from "app/xrank/components/Top500Table";
import HeaderBanner from "components/layout/HeaderBanner";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Top500PlacementsByMonth } from "../service";
import MyHead from "../../../components/common/MyHead";

export interface XSearchPageProps {
  placements: Top500PlacementsByMonth;
  monthOptions: { label: string; value: string }[];
}

const XSearchPage = ({ placements, monthOptions }: XSearchPageProps) => {
  const [variables, setVariables] = useState<{
    month: number;
    year: number;
    mode: RankedMode;
  }>({
    month: Number(monthOptions[0].value.split(",")[0]),
    year: Number(monthOptions[0].value.split(",")[1]),
    mode: "SZ" as RankedMode,
  });

  const router = useRouter();

  useEffect(() => {
    router.replace(
      `/xsearch/${variables.year}/${variables.month}/${variables.mode}`
    );
  }, [variables]);

  //TODO: layout can be persistent between route changes
  return (
    <>
      <MyHead title={t`Top 500 Browser`} />
      <Select
        value={`${variables.month},${variables.year}`}
        onChange={(e) => {
          const [month, year] = e.target.value.split(",");

          setVariables({
            ...variables,
            month: Number(month),
            year: Number(year),
          });
        }}
        mb={4}
        maxW={64}
      >
        {monthOptions.map((monthYear) => (
          <option key={monthYear.value} value={monthYear.value}>
            {monthYear.label}
          </option>
        ))}
      </Select>
      <RadioGroup
        value={variables.mode}
        onChange={(value) =>
          setVariables({ ...variables, mode: value as RankedMode })
        }
        mt={4}
        mb={8}
      >
        <Stack direction="row">
          <Radio value="SZ">{t`SZ`}</Radio>
          <Radio value="TC">{t`TC`}</Radio>
          <Radio value="RM">{t`RM`}</Radio>
          <Radio value="CB">{t`CB`}</Radio>
        </Stack>
      </RadioGroup>
      <Top500Table placements={placements} />
    </>
  );
};

XSearchPage.header = (
  <HeaderBanner
    icon="xsearch"
    title="Top 500 Browser"
    subtitle="History of X Rank"
  />
);

export default XSearchPage;
