import { CommonStyles } from "@/components/commonStyles";
import Container from "@/components/commonStyles/Container/Container";
import { Box } from "@mui/material";
import { isString } from "lodash";
import queryString from "query-string";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Common from "./Children/Common";
import Form from "./Children/Form";
import PaginationDemo from "./Children/Pagination";
import Table from "./Children/Table";

type Tab = "form" | "common" | "table" | "pagination";

const Components = () => {
  const history = useNavigate();
  useEffect(() => {
    if (!window.location.search) {
      const pathName = window.location.pathname;
      history(pathName + `?tab=form`);
    }
  }, []);

  const renderActiveTab = (tab: Tab) => {
    const tabs = { form: <Form />, common: <Common />, table: <Table />, pagination: <PaginationDemo /> };
    return tabs[tab];
  };

  const pathQuery = window.location.search;

  const tab: Tab | any = useMemo(() => {
    const searchs = queryString.parse(pathQuery);
    const searchTab = searchs.tab;

    if (isString(searchTab)) {
      return searchTab;
    }

    return tabsComponent[0].value;
  }, [pathQuery]);

  const onChangeTab = (event: any, tab: Tab) => {
    const pathName = window.location.pathname;
    history(pathName + `?tab=${tab}`);
  };

  return (
    <Container>
      <CommonStyles.CommonTabs listTabs={tabsComponent} value={tab} onChangeTab={onChangeTab} />
      <Box sx={{ marginTop: "32px" }}>{renderActiveTab(tab)}</Box>
    </Container>
  );
};

export default Components;

const tabsComponent = [
  { label: "Form", value: "form" },
  { label: "Common", value: "common" },
  { label: "Table", value: "table" },
  { label: "Pagination", value: "pagination" },
];
