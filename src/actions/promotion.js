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
  } from "../constants";
  
  export function addPromotion(payload) {
    return { type: ADD_PROMOTION, payload };
  }
  export function setActivePromotion(payload) {
    return { type: SET_ACTIVE_PROMOTIONS, payload };
  }
  export function setInactivePromotion(payload) {
    return { type: SET_INACTIVE_PROMOTIONS, payload };
  }
  export function setArchivedPromotion(payload) {
    return { type: SET_ARCHIVED_PROMOTIONS, payload };
  }
  export function setArchivedPromotion(payload) {
    return { type: PROMOTION_LIST_VIEW, payload };
  }
  export function setArchivedPromotion(payload) {
    return { type: PROMOTION_GRID_VIEW, payload };
  }
  export function searchPromotion(payload) {
    return { type: SEARCH_PROMOTION, payload };
  }
  export function setEnablePromotion(payload) {
    return { type: SET_ENABLE_PROMOTION, payload };
  }
  export function setDisablePromotion(payload) {
    return { type: SET_DISABLE_PROMOTION, payload };
  }
  export function setCheckPromotion(payload) {
    return { type: SET_CHECK_PROMOTION, payload };
  }
  export function setUnCheckPromotion(payload) {
    return { type: SET_UNCHECK_PROMOTION, payload };
  }
  export function setPromotionStatus(payload) {
    return { type: SET_PROMOTION_STATUS, payload };
  }
  export function setPromotionSaveAsDraft(payload) {
    return { type: SET_PROMOTION_SAVE_AS_DRAFT, payload };
  }
  export function promotionSelectCampaign(payload) {
    return { type: PROMOTION_SELECT_CAMPAIGN, payload };
  }
  export function promotionAddMoreCampaign(payload) {
    return { type: PROMOTION_ADD_MORE_CAMPAIGN, payload };
  }
  export function promotionSkipSurvey(payload) {
    return { type: PROMOTION_SKIP_SURVEY, payload };
  }
  export function campaignAddSurvey(payload) {
    return { type: PROMOTION_ADD_MORE_SURVEY, payload };
  }
  export function campaignSaveChanges(payload) {
    return { type: PROMOTION_SAVE_CHANGES, payload };
  }
  export function cancelcampaign(payload) {
    return { type: CANCEL_PROMOTION, payload };
  }
  