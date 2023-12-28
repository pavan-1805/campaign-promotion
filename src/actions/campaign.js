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
  SKIP_PROMOTION,
  CAMPAIGN_ADD_PROMOTIONS,
  SKIP_SURVEY,
  CAMPAIGN_ADD_SURVEY,
  CAMPAIGN_SAVE_CHANGES,
  CANCEL_CAMPAIGN,
} from "../constants";

export function addCampaign(payload) {
  return { type: ADD_CAMPAIGN, payload };
}
export function setActiveCampaign(payload) {
  return { type: SET_ACTIVE_CAMPAIGNS, payload };
}
export function setInactiveCampaign(payload) {
  return { type: SET_INACTIVE_CAMPAIGNS, payload };
}
export function setArchivedCampaign(payload) {
  return { type: SET_ARCHIVED_CAMPAIGNS, payload };
}
export function setArchivedCampaign(payload) {
  return { type: LIST_VIEW, payload };
}
export function setArchivedCampaign(payload) {
  return { type: GRID_VIEW, payload };
}
export function searchCampaign(payload) {
  return { type: SEARCH_CAMPAIGN, payload };
}
export function setEnableCampaign(payload) {
  return { type: SET_ENABLE_CAMPAIGN, payload };
}
export function setDisableCampaign(payload) {
  return { type: SET_DISABLE_CAMPAIGN, payload };
}
export function setCheckCampaign(payload) {
  return { type: SET_CHECK_CAMPAIGN, payload };
}
export function setUnCheckCampaign(payload) {
  return { type: SET_UNCHECK_CAMPAIGN, payload };
}
export function setCampaignStatus(payload) {
  return { type: SET_CAMPAIGN_STATUS, payload };
}
export function setCampaignSaveAsDraft(payload) {
  return { type: SET_CAMPAIGN_SAVE_AS_DRAFT, payload };
}
export function skipPromotion(payload) {
  return { type: SKIP_PROMOTION, payload };
}
export function skipPromotion(payload) {
  return { type: SKIP_PROMOTION, payload };
}
export function campaignAddPromotions(payload) {
  return { type: CAMPAIGN_ADD_PROMOTIONS, payload };
}
export function skipSurvey(payload) {
  return { type: SKIP_SURVEY, payload };
}
export function campaignAddSurvey(payload) {
  return { type: CAMPAIGN_ADD_SURVEY, payload };
}
export function campaignSaveChanges(payload) {
  return { type: CAMPAIGN_SAVE_CHANGES, payload };
}
export function cancelcampaign(payload) {
  return { type: CANCEL_CAMPAIGN, payload };
}
