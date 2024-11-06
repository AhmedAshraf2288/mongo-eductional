import { useNavigate } from "react-router";
import { useGenericQuery } from "../hooks/useGenericQuery";
import { toast } from "react-toastify";

export function useHomeData() {
  return useGenericQuery({ keys: ["home"], apiEndpoint: "home" });
}

export function useGovernratesData() {
  return useGenericQuery({ keys: ["governrates"], apiEndpoint: "governrates" });
}

export function useEducationLevelsData() {
  return useGenericQuery({
    keys: ["education-levels"],
    apiEndpoint: "education-levels",
  });
}

export function useProfileInfoData() {
  return useGenericQuery({
    keys: ["profile", "info"],
    apiEndpoint: "student/profile",
  });
}
export function useProfileWalletData() {
  return useGenericQuery({
    keys: ["profile", "wallet"],
    apiEndpoint: "student/my-wallet",
    paginated: true
  });
}
export function useProfileInvoices() {
  return useGenericQuery({
    keys: ["profile", "invoices"],
    apiEndpoint: "student/invoices",
    paginated: true
  });
}
export function useProfileSubscriptions() {
  return useGenericQuery({
    keys: ["profile", "enrollments"],
    apiEndpoint: "student/enrollments",
    paginated: true
  });
}
export function useProfileViewsData() {
  return useGenericQuery({
    keys: ["profile", "views"],
    apiEndpoint: "student/views",
    paginated: true
  });
}
export function useProfileLogsData() {
  return useGenericQuery({
    keys: ["profile", "logs"],
    apiEndpoint: "student/auth-logs",
  });
}
export function useProfileCoursesData() {
  return useGenericQuery({
    keys: ["profile", "courses"],
    apiEndpoint: "user/enrolled-courses",
  });
}
export function useProfileExamsData() {
  return useGenericQuery({
    keys: ["profile", "exams"],
    apiEndpoint: "student/quizzes-results",
  });
}
export function useProfileExamsResultData(id) {
  return useGenericQuery({
    keys: ["profile", "exams", "results", id],
    apiEndpoint: `student/answers?type=quiz&submission_id=${id}`,
    paginated: true,
    paginationName: "studentExamResults"
  });
}
export function useProfileAssignmentsData() {
  return useGenericQuery({
    keys: ["profile", "assignments"],
    apiEndpoint: "student/assignemnts-results",
  });
}
export function useProfileAssignmentResultData(slug) {
  return useGenericQuery({
    keys: ["profile", "assignments", "results", slug],
    apiEndpoint: `student/answers?type=assignment&slug=${slug}`,
    paginated: true,
    paginationName: "studentAssignmentResults"
  });
}

export function useMyLeariningData() {
  return useGenericQuery({
    keys: ["my-learning"],
    apiEndpoint: "my-learning",
    paginated: true,
  });
}

export function useCategoryData(id) {
  return useGenericQuery({
    keys: ["educ_level", id],
    apiEndpoint: `home?educ_level=${id}`,
    filterName: "educ_level",
  });
}

export function useSettingsData() {
  return useGenericQuery({
    keys: ["settings"],
    apiEndpoint: "settings",
  });
}

export function useSingleCourseData(slug) {
  const navigate = useNavigate();

  return useGenericQuery({
    keys: ["single-course", slug],
    apiEndpoint: `courses/${slug}`,
    onError: (error) => {
      if (error.response && error.response.status === 404) {
        navigate("/courses", { replace: true });
      }
      toast.error(error.response?.data?.message || error.message);
    },
  });
}

export function useWatchCourseData(slug) {
  const navigate = useNavigate();

  return useGenericQuery({
    keys: ["watch-course", slug],
    apiEndpoint: `my-learning/watch/${slug}`,
    onError: (error) => {
      if (error.response && error.response.status === 404) {
        navigate("/profile/my-courses", { replace: true });
      }
      toast.error(error.response?.data?.message || error.message);
    },
  });
}

export function useSingleWatchItemData(itemSlug, type, quizOpened) {
  return useGenericQuery({
    keys: ["watch-course", "item", itemSlug, quizOpened],
    apiEndpoint: `my-learning/item?type=${type}&slug=${itemSlug}`,
    disabled: !itemSlug || (quizOpened == false),
  });
}
export function useSingleWatchItemDataLink(token) {
  return useGenericQuery({
    keys: ["item-link", token],
    apiEndpoint: `student/exams/access/${token}`,
    disabled: !token,
  });
}

export function useSingleQuizInfoData(itemSlug, type) {
  return useGenericQuery({
    keys: ["watch-course", "item-basic-info", itemSlug],
    apiEndpoint: `my-learning/item-info?type=${type}&slug=${itemSlug}`,
    disabled: !itemSlug,
  });
}

export function useStudentPoints() {
  return useGenericQuery({
    keys: ["student-points"],
    apiEndpoint: "student-points",
    paginated: true
  });
}

export function useLatestNotifications() {
  return useGenericQuery({
    keys: ["latest-notifications"],
    apiEndpoint: "notifications/latest",
  });
}

export function useNotifications() {
  return useGenericQuery({
    keys: ["notifications"],
    apiEndpoint: "notifications",
    paginated: true,
  });
}