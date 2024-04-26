import { CommonStyles } from "@/components/commonStyles";
import cachedKeys from "@/consts/cachedKeys";
import useGetListCats from "@/hooks/cats/useGetListCats";
import useFiltersHandler from "@/hooks/useFilters";

const PaginationDemo = () => {
  const { filters, handleChangePage } = useFiltersHandler({ page: 1, page_size: 10 });
  const { data } = useGetListCats(filters, { refetchKey: cachedKeys.listCats });

  return (
    <div>
      <div className="" style={{ display: "flex", flexWrap: "wrap" }}>
        {data?.map((item) => {
          return (
            <div className="">
              <CommonStyles.Image src={item.url} width={item.width} height={item.height} data={data} />
            </div>
          );
        })}
      </div>
      <CommonStyles.Pagination totalPage={10} currentPage={1} handleChangePage={handleChangePage} />
    </div>
  );
};

export default PaginationDemo;
