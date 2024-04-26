import React from "react";
import { Tab, Tabs } from "@mui/material";
import { useTheme } from "@mui/styles";

type Tab = {
  label: string;
  value: string;
};
interface ITabs {
  listTabs: Tab[];
  onChangeTab: (
    event: React.SyntheticEvent<Element, Event>,
    value: any
  ) => void;
  value: unknown;

  shouldDisabled?: string[];

  shouldHidden?: string[];
}

const CommonTabs = (props: ITabs) => {
  const { listTabs, onChangeTab, value, shouldDisabled, shouldHidden } = props;
  const theme = useTheme();

  return (
    <Tabs
      value={value}
      onChange={onChangeTab}
      aria-label="basic tabs"
      sx={{
        "& .MuiTabs-scroller": {
          "& span": {
            background: theme.custom.text.blue,
          },
        },
      }}
    >
      {listTabs.map((tab) => {
        if (shouldHidden?.includes(tab.value)) return null;

        return (
          <Tab
            key={tab.value}
            label={tab.label}
            value={tab.value}
            disabled={shouldDisabled?.includes(tab.value)}
            sx={{
              fontSize: "20px",
              fontWeight: 600,
              "&.Mui-selected": {
                color: theme.custom.text.blue,
              },
              "&:focus": {
                outline: "none",
              },
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default React.memo(CommonTabs);
