import React, { useCallback } from "react";
import { cloneDeep, isArray } from "lodash";

function useFiltersHandler(initialFilters: any) {
  const [filters, setFilters] = React.useState<any>(initialFilters);
  const [rowsSelected, setRowsSelected] = React.useState<(string | number)[]>([]);

  const handleChangePage = (value: number) => {
    setFilters((prev: object) => {
      return {
        ...prev,
        page: value,
      };
    });
  };

  const resetToInitialFilters = useCallback(() => {
    setFilters(cloneDeep(initialFilters));
  }, [initialFilters]);

  const handleSelectAll = useCallback((data: any) => {
    setRowsSelected((prev) => {
      if (isArray(prev) && prev.length === data.length) {
        return [];
      }
      return data;
    });
  }, []);

  const handleSelectOne = useCallback((data: any) => {
    setRowsSelected((prev) => {
      if (isArray(prev)) {
        const foundIndex = prev.findIndex((elm: any) => elm?.id === data?.id);
        if (foundIndex !== -1) {
          const nextSelectedRow = cloneDeep(prev);
          nextSelectedRow.splice(foundIndex, 1);
          return nextSelectedRow;
        } else {
          return [...prev, data];
        }
      }
      return prev;
    });
  }, []);

  return {
    filters,
    rowsSelected,
    setRowsSelected,
    setFilters,
    resetToInitialFilters,
    handleSelectAll,
    handleSelectOne,
    handleChangePage,
  };
}
export default useFiltersHandler;
