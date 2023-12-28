import {
  ADD_SURVEY,
  SEARCH_SURVEY,
  SET_ACTIVE_SURVEYS,
  SET_ARCHIVED_SURVEYS,
  SET_CHECK_SURVEY,
  SET_ENABLE_SURVEY,
  SET_INACTIVE_SURVEYS,
  SET_DISABLE_SURVEY,
  SET_UNCHECK_SURVEY,
  SET_SURVEY_STATUS,
  SET_SURVEY_SAVE_AS_DRAFT,
  SURVEY_SAVE_CHANGES,
  CANCEL_SURVEY,
  SURVEY_LIST_VIEW,
  SURVEY_GRID_VIEW,
  SET_PIN_SURVEY,
  SET_UN_PIN_SURVEY,
  SURVEY_SELECT_CAMPAIGN,
  SURVEY_ADD_MORE_CAMPAIGN,
  SURVEY_SET_MENU,
} from "../constants";
import { setMenu } from "../utils";

const initialState = {
  searchSurvey: "",
  allSurveys: [],
  completedSurveys: [],
  publishedSurveys: [],
  archivedSurvey: [],
  surveyView: "",
};

const survey = (state = initialState, action) => {
  switch (action?.type) {
    case ADD_SURVEY:
      return {
        ...state,
        allSurveys: state?.allSurveys?.push(action?.payload),
      };
    case SURVEY_SET_MENU: //based upon survey status, and pinned flag showing other actions excluding current promotion status
      return {
        ...state,
        allSurveys: state?.allSurveys.map((survey) => ({
          ...survey,
          menuItems: setMenu(survey.status, [
            "View",
            survey.pinned ? "Unpin" : "Pin",
            "Edit",
            "Active",
            "Inactive",
            "Archive",
            "Unarchive",
            "Changelogs",
            "Download Response",
          ]),
        })),
      };
    case SET_ACTIVE_SURVEYS:
      return {
        ...state,
        activeSurveys: state?.allSurveys?.filter(
          (camp) => camp?.status === "active"
        ),
      };
    case SET_INACTIVE_SURVEYS:
      return {
        ...state,
        inActiveSurveys: state?.allSurveys?.filter(
          (camp) => camp?.status === "inactive"
        ),
      };
    case SET_ARCHIVED_SURVEYS:
      return {
        ...state,
        archivedSurveys: state?.allSurveys?.filter(
          (camp) => camp?.status === "archived"
        ),
      };
    case SURVEY_LIST_VIEW:
      return {
        ...state,
        surveyView: action?.payload,
      };
    case SURVEY_GRID_VIEW:
      return {
        ...state,
        surveyView: action?.payload,
      };
    case SEARCH_SURVEY:
      const { arrayName, searchKey } = action.payload;
      return (state[arrayName] = state[arrayName].filter((val) =>
        val.name.toLowerCase().includes(searchKey.toLowerCase())
      ));
    case SET_ENABLE_SURVEY:
      return {
        ...state,
        allSurveys: state?.allSurveys?.map((survey) => {
          if (survey?.id === action?.payload?.id) {
            return {
              ...survey,
              enable: true,
            };
          } else {
            return survey;
          }
        }),
      };
    case SET_DISABLE_SURVEY:
      return {
        ...state,
        allSurveys: state?.allSurveys?.map((survey) => {
          if (survey?.id === action?.payload?.id) {
            return {
              ...survey,
              enable: false,
            };
          } else {
            return survey;
          }
        }),
      };
    case SET_CHECK_SURVEY:
      return {
        ...state,
        allSurveys: state?.allSurveys?.map((survey) => {
          if (survey?.id === action?.payload?.id) {
            return {
              ...survey,
              checked: true,
            };
          } else {
            return survey;
          }
        }),
      };
    case SET_UNCHECK_SURVEY:
      return {
        ...state,
        allSurveys: state?.allSurveys?.map((survey) => {
          if (survey?.id === action?.payload?.id) {
            return {
              ...survey,
              checked: false,
            };
          } else {
            return survey;
          }
        }),
      };
    case SET_SURVEY_STATUS:
      return {
        ...state,
        allSurveys: state?.allSurveys?.map((survey) => {
          if (survey?.id === action?.payload?.id) {
            return {
              ...survey,
              status: action?.payload?.status,
            };
          } else {
            return survey;
          }
        }),
      };
    case SET_PIN_SURVEY:
      return {
        ...state,
        allSurveys: state?.allSurveys?.map((survey) => {
          if (survey?.id === action?.payload?.id) {
            return {
              ...survey,
              pinned: true,
            };
          } else {
            return survey;
          }
        }),
      };
    case SET_UN_PIN_SURVEY:
      return {
        ...state,
        allSurveys: state?.allSurveys?.map((survey) => {
          if (survey?.id === action?.payload?.id) {
            return {
              ...survey,
              pinned: false,
            };
          } else {
            return survey;
          }
        }),
      };
    case SURVEY_SELECT_CAMPAIGN:
      return {
        ...state,
        allSurveys: state?.allSurveys?.map((survey) => {
          if (survey?.id === action?.payload.id) {
            return {
              ...survey,
              selectedSurveys:
                survey?.selectedSurveys && survey?.selectedSurveys?.length > 0
                  ? survey?.selectedSurveys?.push(
                      action?.payload.selectedSurveys
                    )
                  : [...action?.payload?.selectedSurveys],
            };
          } else {
            return survey;
          }
        }),
      };
    case SURVEY_ADD_MORE_CAMPAIGN:
      return {
        ...state,
        allSurveys: state?.allSurveys?.map((survey) => {
          if (survey?.id === action?.payload.id) {
            return {
              ...survey,
              selectedSurveys:
                survey?.selectedSurveys && survey?.selectedSurveys?.length > 0
                  ? survey?.selectedSurveys?.push(
                      action?.payload.selectedSurveys
                    )
                  : [...action?.payload?.selectedSurveys],
            };
          } else {
            return survey;
          }
        }),
      };
    case SET_SURVEY_SAVE_AS_DRAFT:
      return {
        ...state,
        allSurveys: state?.allSurveys?.map((survey) => {
          if (survey?.id === action?.payload?.id) {
            return {
              ...survey,
              saveAsDraft: true,
            };
          } else {
            return survey;
          }
        }),
      };
    case SURVEY_SAVE_CHANGES:
      return {
        ...state,
        allSurveys: state?.allSurveys?.map((survey) => {
          if (survey?.id === action?.payload.id) {
            return {
              ...survey,
              ...action?.payload?.survey,
            };
          } else {
            return survey;
          }
        }),
      };
    case CANCEL_SURVEY:
      let index = state?.allSurveys?.findIndex(
        (survey) => survey?.id === action?.payload.id
      );
      state?.allSurveys.splice(index, 1);
      return {
        ...state,
        allSurveys: state?.allSurveys.splice(index, 1),
      };
    default:
      return state;
  }
};

export default survey;
