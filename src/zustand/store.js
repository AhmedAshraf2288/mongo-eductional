import Cookies from "js-cookie";
import { create } from "zustand";

const authData = Cookies.get("biology_auth_data");
const theme = localStorage.getItem('theme');

const store = (set) => ({
  modalsStates: {},
  theme: theme || 'light',
  authData: authData ? JSON.parse(authData) : "",
  navBarOpened: false,
  courseContentOpened: false,
  filters: {
    courses: { search: "", orderBy: "" },
    blogs: { search: "", orderBy: "" },
  },
  quizOpened: false,
  setQuizOpened: (value) => {
    set(() => ({ quizOpened: value }));
  },
  editFilters: (filterName, value) =>
    set((state) => ({ filters: { ...state.filters, [filterName]: value } })),
  editModalState: (modal, state) =>
    set((store) => ({
      modalsStates: { ...store.modalsStates, [modal]: state },
    })),
  setNavBarOpened: (value) => set(() => ({ navBarOpened: value })),
  setCourseContentOpened: (value) =>
    set(() => ({ courseContentOpened: value })),
  pagination: {},
  editPagination: (paginationName, value) => {
    set((store) => ({
      pagination: { ...store.pagination, [paginationName]: value },
    }));
  },
  setAuthData: (data) => {
    set(() => ({ authData: data }));
    Cookies.set("biology_auth_data", JSON.stringify(data));
  },
  toggleTheme: () => {
    set((store) => {
      const newTheme = store.theme == 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme)
      return { theme: newTheme }
    });
  },
});

export const useStore = create(store);
