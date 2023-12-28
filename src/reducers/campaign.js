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
  } from "../constants";

const initialState = {
  searchCampaign: "",
  allCampaigns: [],
  activeCampaigns: [],
  inActiveCampaigns: [],
  archivedCampaigns: [],
  campaignView: "",
};

const campaign = (state = initialState, action) => {
  switch (action?.type) {
    case ADD_CAMPAIGN:
      return {
        ...state,
        allCampaigns: state?.allCampaigns?.push(action?.payload),
      };
    case SET_ACTIVE_CAMPAIGNS:
      return {
        ...state,
        activeCampaigns: state?.allCampaigns?.filter(
          (camp) => camp?.status === "active"
        ),
      };
    case SET_INACTIVE_CAMPAIGNS:
      return {
        ...state,
        inActiveCampaigns: state?.allCampaigns?.filter(
          (camp) => camp?.status === "inactive"
        ),
      };
    case SET_ARCHIVED_CAMPAIGNS:
      return {
        ...state,
        archivedCampaigns: state?.allCampaigns?.filter(
          (camp) => camp?.status === "archived"
        ),
      };
    case CAMPAIGN_LIST_VIEW:
      return {
        ...state,
        campaignView: action?.payload,
      };
    case CAMPAIGN_GRID_VIEW:
      return {
        ...state,
        campaignView: action?.payload,
      };
    case SEARCH_CAMPAIGN:
      return {
        ...state,
        searchCampaign: action?.payload,
      };
    case SET_ENABLE_CAMPAIGN:
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
    case SET_DISABLE_CAMPAIGN:
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
    case SET_CHECK_CAMPAIGN:
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
    case SET_UNCHECK_CAMPAIGN:
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
    case SET_CAMPAIGN_STATUS:
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
    case SET_CAMPAIGN_SAVE_AS_DRAFT:
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
    case CAMPAIGN_SKIP_PROMOTION:
      return {
        ...state,
        allCampaigns: state?.allCampaigns?.map((campaign) => {
          if (campaign?.id === action?.payload.id) {
            return {
              ...campaign,
              skipPromotion: true,
            };
          } else {
            return campaign;
          }
        }),
      };
    case CAMPAIGN_ADD_PROMOTIONS:
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
    case CAMPAIGN_SKIP_SURVEY:
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
    case CAMPAIGN_ADD_SURVEY:
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
    case CAMPAIGN_SAVE_CHANGES:
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
    case CANCEL_CAMPAIGN:
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
