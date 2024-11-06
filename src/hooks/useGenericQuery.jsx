import { toast } from "react-toastify";
import Cookies from "js-cookie";
import useAxios from "./useAxios";
import { useCallback } from "react";
import { useStore } from "../zustand/store";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export const useGenericQuery = ({
  keys,
  apiEndpoint,
  filterName,
  filtersEndPoint,
  paginated,
  paginationName,
  onError,
  moreHeaders,
  disabled
}) => {
  const axios = useAxios();
  const authData = useStore((state) => state.authData);
  const setAuthData = useStore((state) => state.setAuthData);

  const filters = useStore((state) => state.filters[filterName] || {});
  const statePagination = useStore((state) => state.pagination[paginationName]);
  const {page} = useParams();
  const currPage = paginationName ? statePagination : page;
  
  let link = apiEndpoint;
  const alreadyHaveQuery = link.includes("?");
  if (filters) {
    const filterQuery = getFiltersQuery(filters);
    if (filterQuery && filterQuery != "") {
      link = `${filtersEndPoint || apiEndpoint}${
        alreadyHaveQuery ? "&" : "?"
      }${filterQuery}`;
      if (paginated) {
        link += `&page=${+currPage || 1}`;
      }
    } else if (paginated) {
      link += `${alreadyHaveQuery ? "&" : "?"}page=${+currPage || 1}`;
    }
  }

  const messageError = useCallback(
    (err) => {
      if (authData != "") toast.error(err.response.data.message);
      if (err.response.status == 401) {
        Cookies.set("biology_auth_data", "");
        setAuthData("");
      }
    },
    [authData, setAuthData]
  );

  const queryKey = [...keys];
  if (filterName) queryKey.push(filters);
  if (paginated) queryKey.push(currPage ? +currPage : 1);

  return useQuery({
    queryKey: queryKey,
    queryFn: () => {
      if(disabled) return null;
      return axios
        .get(link, { headers: moreHeaders || {} })
        .then((data) => {
          if (paginated) return data.data;
          return data.data.data || data.data;
        })
        .catch(onError || messageError);
    },
  });
};

function getFiltersQuery(filterObj) {
  let filterQuery = [];
  for (let key in filterObj) {
    if (filterObj[key] != "") filterQuery.push(`${key}=${filterObj[key]}`);
  }
  filterQuery = filterQuery.join("&");
  return filterQuery;
}
