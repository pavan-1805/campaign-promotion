import {
  ADD_PROMOTION,
  SEARCH_PROMOTION,
  SET_ACTIVE_PROMOTIONS,
  SET_ARCHIVED_PROMOTIONS,
  SET_CHECK_PROMOTION,
  SET_ENABLE_PROMOTION,
  SET_INACTIVE_PROMOTIONS,
  SET_DISABLE_PROMOTION,
  SET_UNCHECK_PROMOTION,
  SET_PROMOTION_STATUS,
  SET_PROMOTION_SAVE_AS_DRAFT,
  PROMOTION_ADD_MORE_CAMPAIGN,
  PROMOTION_SKIP_SURVEY,
  PROMOTION_ADD_MORE_SURVEY,
  PROMOTION_SAVE_CHANGES,
  CANCEL_PROMOTION,
  PROMOTION_LIST_VIEW,
  PROMOTION_GRID_VIEW,
  PROMOTION_SELECT_CAMPAIGN,
  PROMOTION_SET_MENU,
  SET_PIN_PROMOTION,
  SET_UN_PIN_PROMOTION,
} from "../constants";
import { setMenu } from "../utils";

const initialState = {
  searchPromotion: "",
  allPromotions: [],
  completedPromotions: [],
  publishedPromotions: [],
  archivedPromotion: [],
  promotionView: "",
};

const promotions = (state = initialState, action) => {
  switch (action?.type) {
    case ADD_PROMOTION:
      return {
        ...state,
        allPromotions: state?.allPromotions?.push(action?.payload),
      };
    case PROMOTION_SET_MENU: //based upon promotion status, and pinned flag showing other actions excluding current promotion status
      return {
        ...state,
        allPromotions: state?.allPromotions.map((promotion) => ({
          ...promotion,
          menuItems: setMenu(promotion.status, [
            "View",
            promotion.pinned ? "Unpin" : "Pin",
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
    case SET_ACTIVE_PROMOTIONS:
      return {
        ...state,
        activePromotions: state?.allPromotions?.filter(
          (camp) => camp?.status === "active"
        ),
      };
    case SET_INACTIVE_PROMOTIONS:
      return {
        ...state,
        inActivePromotions: state?.allPromotions?.filter(
          (camp) => camp?.status === "inactive"
        ),
      };
    case SET_ARCHIVED_PROMOTIONS:
      return {
        ...state,
        archivedPromotions: state?.allPromotions?.filter(
          (camp) => camp?.status === "archived"
        ),
      };
    case PROMOTION_LIST_VIEW:
      return {
        ...state,
        promotionView: action?.payload,
      };
    case PROMOTION_GRID_VIEW:
      return {
        ...state,
        promotionView: action?.payload,
      };
    case SEARCH_PROMOTION:
      const { arrayName, searchKey } = action.payload;
      return (state[arrayName] = state[arrayName].filter((val) =>
        val.name.toLowerCase().includes(searchKey.toLowerCase())
      ));
    case SET_ENABLE_PROMOTION:
      return {
        ...state,
        allPromotions: state?.allPromotions?.map((promotion) => {
          if (promotion?.id === action?.payload?.id) {
            return {
              ...promotion,
              enable: true,
            };
          } else {
            return promotion;
          }
        }),
      };
    case SET_DISABLE_PROMOTION:
      return {
        ...state,
        allPromotions: state?.allPromotions?.map((promotion) => {
          if (promotion?.id === action?.payload?.id) {
            return {
              ...promotion,
              enable: false,
            };
          } else {
            return promotion;
          }
        }),
      };
    case SET_CHECK_PROMOTION:
      return {
        ...state,
        allPromotions: state?.allPromotions?.map((promotion) => {
          if (promotion?.id === action?.payload?.id) {
            return {
              ...promotion,
              checked: true,
            };
          } else {
            return promotion;
          }
        }),
      };
    case SET_UNCHECK_PROMOTION:
      return {
        ...state,
        allPromotions: state?.allPromotions?.map((promotion) => {
          if (promotion?.id === action?.payload?.id) {
            return {
              ...promotion,
              checked: false,
            };
          } else {
            return promotion;
          }
        }),
      };
    case SET_PROMOTION_STATUS:
      return {
        ...state,
        allPromotions: state?.allPromotions?.map((promotion) => {
          if (promotion?.id === action?.payload?.id) {
            return {
              ...promotion,
              status: action?.payload?.status,
            };
          } else {
            return promotion;
          }
        }),
      };
    case SET_PROMOTION_SAVE_AS_DRAFT:
      return {
        ...state,
        allPromotions: state?.allPromotions?.map((promotion) => {
          if (promotion?.id === action?.payload?.id) {
            return {
              ...promotion,
              saveAsDraft: true,
            };
          } else {
            return promotion;
          }
        }),
      };
    case PROMOTION_SELECT_CAMPAIGN:
      return {
        ...state,
        allPromotions: state?.allPromotions?.map((promotion) => {
          if (promotion?.id === action?.payload.id) {
            return {
              ...promotion,
              selectedCampaigns:
                promotion?.selectedCampaigns &&
                promotion?.selectedCampaigns?.length > 0
                  ? promotion?.selectedCampaigns?.push(
                      action?.payload.selectedCampaigns
                    )
                  : [...action?.payload?.selectedCampaigns],
            };
          } else {
            return promotion;
          }
        }),
      };
    case PROMOTION_ADD_MORE_CAMPAIGN:
      return {
        ...state,
        allPromotions: state?.allPromotions?.map((promotion) => {
          if (promotion?.id === action?.payload.id) {
            return {
              ...promotion,
              selectedCampaigns:
                promotion?.selectedCampaigns &&
                promotion?.selectedCampaigns?.length > 0
                  ? promotion?.selectedCampaigns?.push(
                      action?.payload.selectedCampaigns
                    )
                  : [...action?.payload?.selectedCampaigns],
            };
          } else {
            return promotion;
          }
        }),
      };
    case PROMOTION_SKIP_SURVEY:
      return {
        ...state,
        allPromotions: state?.allPromotions?.map((promotion) => {
          if (promotion?.id === action?.payload.id) {
            return {
              ...promotion,
              skipSurvey: true,
            };
          } else {
            return promotion;
          }
        }),
      };
    case PROMOTION_ADD_MORE_SURVEY:
      return {
        ...state,
        allPromotions: state?.allPromotions?.map((promotion) => {
          if (promotion?.id === action?.payload.id) {
            return {
              ...promotion,
              selectedSurveys:
                promotion?.selectedSurveys &&
                promotion?.selectedSurveys?.length > 0
                  ? promotion?.selectedSurveys?.push(
                      action?.payload.selectedSurveys
                    )
                  : [...action?.payload?.selectedSurveys],
            };
          } else {
            return promotion;
          }
        }),
      };
    case PROMOTION_SAVE_CHANGES:
      return {
        ...state,
        allPromotions: state?.allPromotions?.map((promotion) => {
          if (promotion?.id === action?.payload.id) {
            return {
              ...promotion,
              ...action?.payload?.promotion,
            };
          } else {
            return promotion;
          }
        }),
      };
    case CANCEL_PROMOTION:
      let index = state?.allPromotions?.findIndex(
        (promotion) => promotion?.id === action?.payload.id
      );
      state?.allPromotions.splice(index, 1);
      return {
        ...state,
        allPromotions: state?.allPromotions.splice(index, 1),
      };
    case SET_PIN_PROMOTION:
      return {
        ...state,
        allPromotions: state?.allPromotions?.map((promotion) => {
          if (promotion?.id === action?.payload?.id) {
            return {
              ...promotion,
              pinned: true,
            };
          } else {
            return promotion;
          }
        }),
      };
    case SET_UN_PIN_PROMOTION:
      return {
        ...state,
        allPromotions: state?.allPromotions?.map((promotion) => {
          if (promotion?.id === action?.payload?.id) {
            return {
              ...promotion,
              pinned: false,
            };
          } else {
            return promotion;
          }
        }),
      };
    default:
      return state;
  }
};

export default promotions;
