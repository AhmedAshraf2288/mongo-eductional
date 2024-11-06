import { useNavigate, useParams } from "react-router";
import { useCallback, useLayoutEffect, useMemo } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import PaginationButton from "../../features/components/Pagination/PaginationButton/PaginationButton";
import { useStore } from "../../zustand/store";

export default function Pagination({ pagination, route, paginationName }) {
  const statePageNum = useStore((state) => state.pagination[paginationName]);
  const editPagination = useStore((state) => state.editPagination);
  let { page } = useParams();
  const navigate = useNavigate();
  page = (route ? page : statePageNum) || 1;

  useLayoutEffect(() => {
    if ((route && page > +pagination.last_page) || page < 0) {
      navigate(`/${route}/1`);
    }
  }, [navigate, page, pagination, route]);

  const updatePage = useCallback(
    (pageNum) => {
      if (route) {
        navigate(`/${route}/${pageNum}`);
      } else {
        editPagination(paginationName, pageNum);
      }
    },
    [navigate, route]
  );

  const pageElements = useMemo(() => {
    let elements = [];
    let total = 5;
    let gap = parseInt((total - 1) / 2);
    let start = Math.max(1, +page - gap),
      end = Math.min(pagination.last_page, +page + gap);
    if (end - start + 1 < 5) {
      if (+page - gap < 1) {
        end = Math.min(pagination.last_page, end + (1 - (+page - gap)));
      }
      if (+page + gap > pagination.last_page) {
        start = Math.max(1, start - (+page + gap - pagination.last_page));
      }
    }
    for (let i = start; i <= end; i++) {
      
      elements.push(
        <PaginationButton
          active={page == i}
          key={`${route}-pages-${i}`}
          onClick={() => updatePage(i)}
        >
          {i}
        </PaginationButton>
      );
    }
    return elements;
  }, [pagination.last_page, page, route, updatePage]);

  return (
    <div className="pagination d-flex justify-content-center gap-2 mt-3">
      {page > 1 && (
        <PaginationButton
          key={`prev-page-${route}`}
          onClick={() => updatePage(+page - 1)}
        >
          <GrFormNext />
        </PaginationButton>
      )}
      {pagination.last_page != 1 ? pageElements : ""}
      {page < pagination.last_page && (
        <PaginationButton
        key={`next-page-${route}`}
        onClick={() => updatePage(+page + 1)}
        >
        <GrFormPrevious />
        </PaginationButton>
      )}
    </div>
  );
}
