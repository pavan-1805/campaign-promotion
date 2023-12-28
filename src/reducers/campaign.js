import {
  ADD_CAMPAIGN,
  SEARCH_CAMPAIGN,
  SET_ACTIVE_CAMPAIGNS,
  SET_ARCHIVED_CAMPAIGNS,
  SET_CHECK_CAMPAIGN,
  SET_ENABLE_CAMPAIGN,
  SET_INACTIVE_CAMPAIGNS,
  SET_DISABLE_CAMPAIGN,
  SET_UNCHECK_CAMPAIGN,
  SET_CAMPAIGN_STATUS,
  SET_CAMPAIGN_SAVE_AS_DRAFT,
  CAMPAIGN_ADD_PROMOTIONS,
  CAMPAIGN_ADD_SURVEY,
  CAMPAIGN_SAVE_CHANGES,
  CANCEL_CAMPAIGN,
  CAMPAIGN_LIST_VIEW,
  CAMPAIGN_GRID_VIEW,
  CAMPAIGN_SKIP_PROMOTION,
  CAMPAIGN_SKIP_SURVEY,
  CAMPAIGN_SET_MENU,
} from "../constants";
import { setMenu } from "../utils";

const initialState = {
  allCampaigns: [],
  activeCampaigns: [],
  inActiveCampaigns: [],
  archivedCampaigns: [],
  campaignView: "",
};

const campaign = (state = initialState, action) => {
  switch (action?.type) {
    case ADD_CAMPAIGN: //adding campaign into allCampaigns
      return {
        ...state,
        allCampaigns: state?.allCampaigns?.push(action?.payload),
      };
    case CAMPAIGN_SET_MENU: //based upon campaign status, showing other actions excluding campaign status
      return {
        ...state,
        allCampaigns: state?.allCampaigns.map((camp) => ({
          ...camp,
          menuItems: setMenu(camp.status, [
            "View",
            "Edit",
            "Active",
            "Inactive",
            "Archive",
            "Unarchive",
            "Changelogs",
          ]),
        })),
      };
    case SET_ACTIVE_CAMPAIGNS: //adding campaign into activeCampaigns
      return {
        ...state,
        activeCampaigns: state?.allCampaigns?.filter(
          (camp) => camp?.status === "active"
        ),
      };
    case SET_INACTIVE_CAMPAIGNS: //adding campaign into inactiveCampaigns
      return {
        ...state,
        inActiveCampaigns: state?.allCampaigns?.filter(
          (camp) => camp?.status === "inactive"
        ),
      };
    case SET_ARCHIVED_CAMPAIGNS: //adding campaign into archivedCampaigns
      return {
        ...state,
        archivedCampaigns: state?.allCampaigns?.filter(
          (camp) => camp?.status === "archived"
        ),
      };
    case CAMPAIGN_LIST_VIEW: //changing into list format
      return {
        ...state,
        campaignView: action?.payload,
      };
    case CAMPAIGN_GRID_VIEW: //changing into grid format
      return {
        ...state,
        campaignView: action?.payload,
      };
    case SEARCH_CAMPAIGN: // based upon arrayName(eg: activeCampaigns, inActiveCampaigns, archivedCampaigns) wwill find particular array will search in that array based upon searchKey(user entered search value)
      const { arrayName, searchKey } = action.payload;
      return (state[arrayName] = state[arrayName].filter((val) =>
        val.name.toLowerCase().includes(searchKey.toLowerCase())
      ));
    case SET_ENABLE_CAMPAIGN: //enable campaign based on campaign id
      return {
        ...state,
        allCampaigns: state?.allCampaigns?.map((campaign) => {
          if (campaign?.id === action?.payload?.id) {
            return {
              ...campaign,
              enable: true,
            };
          } else {
            return campaign;
          }
        }),
      };
    case SET_DISABLE_CAMPAIGN: //disable campaign based on campaign id
      return {
        ...state,
        allCampaigns: state?.allCampaigns?.map((campaign) => {
          if (campaign?.id === action?.payload?.id) {
            return {
              ...campaign,
              enable: false,
            };
          } else {
            return campaign;
          }
        }),
      };
    case SET_CHECK_CAMPAIGN: //unchecking campaign based on campaign id
      return {
        ...state,
        allCampaigns: state?.allCampaigns?.map((campaign) => {
          if (campaign?.id === action?.payload?.id) {
            return {
              ...campaign,
              checked: true,
            };
          } else {
            return campaign;
          }
        }),
      };
    case SET_UNCHECK_CAMPAIGN: //unchecking campaign based on campaign id
      return {
        ...state,
        allCampaigns: state?.allCampaigns?.map((campaign) => {
          if (campaign?.id === action?.payload?.id) {
            return {
              ...campaign,
              checked: false,
            };
          } else {
            return campaign;
          }
        }),
      };
    case SET_CAMPAIGN_STATUS: //setting campaign status based on campaign id
      return {
        ...state,
        allCampaigns: state?.allCampaigns?.map((campaign) => {
          if (campaign?.id === action?.payload?.id) {
            return {
              ...campaign,
              status: action?.payload?.status,
            };
          } else {
            return campaign;
          }
        }),
      };
    case SET_CAMPAIGN_SAVE_AS_DRAFT: //setting draft based on campaign id
      return {
        ...state,
        allCampaigns: state?.allCampaigns?.map((campaign) => {
          if (campaign?.id === action?.payload?.id) {
            return {
              ...campaign,
              saveAsDraft: true,
            };
          } else {
            return campaign;
          }
        }),
      };
    case CAMPAIGN_SKIP_PROMOTION: //skipping promotion based on campaign id
      return {
        ...state,
        allCampaigns: state?.allCampaigns?.map((campaign) => {
          if (campaign?.id === action?.payload?.id) {
            return {
              ...campaign,
              skipPromotion: true,
            };
          } else {
            return campaign;
          }
        }),
      };
    case CAMPAIGN_ADD_PROMOTIONS: //adding newly added promotions into campaign based upon campaign id
      return {
        ...state,
        allCampaigns: state?.allCampaigns?.map((campaign) => {
          if (campaign?.id === action?.payload.id) {
            return {
              ...campaign,
              promotions:
                campaign?.promotions && campaign?.promotions?.length > 0
                  ? campaign?.promotions?.push(action?.payload.promotions)
                  : [...action?.payload?.promotions],
            };
          } else {
            return campaign;
          }
        }),
      };
    case CAMPAIGN_SKIP_SURVEY: //skipping survey based on campaign id
      return {
        ...state,
        allCampaigns: state?.allCampaigns?.map((campaign) => {
          if (campaign?.id === action?.payload.id) {
            return {
              ...campaign,
              skipSurvey: true,
            };
          } else {
            return campaign;
          }
        }),
      };
    case CAMPAIGN_ADD_SURVEY: //adding newly added surveys into campaign based upon campaign id
      return {
        ...state,
        allCampaigns: state?.allCampaigns?.map((campaign) => {
          if (campaign?.id === action?.payload.id) {
            return {
              ...campaign,
              surveys:
                campaign?.surveys && campaign?.surveys?.length > 0
                  ? campaign?.surveys?.push(action?.payload.surveys)
                  : [...action?.payload?.surveys],
            };
          } else {
            return campaign;
          }
        }),
      };
    case CAMPAIGN_SAVE_CHANGES: //updating campaign details based on id
      return {
        ...state,
        allCampaigns: state?.allCampaigns?.map((campaign) => {
          if (campaign?.id === action?.payload.id) {
            return {
              ...campaign,
              ...action?.payload?.campaign,
            };
          } else {
            return campaign;
          }
        }),
      };
    case CANCEL_CAMPAIGN: //removing campaign based on id
      let index = state?.allCampaigns?.findIndex(
        (campaign) => campaign?.id === action?.payload.id
      );
      state?.allCampaigns.splice(index, 1);
      return {
        ...state,
        allCampaigns: state?.allCampaigns.splice(index, 1),
      };
    default:
      return state;
  }
};

export default campaign;
