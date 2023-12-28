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
  SURVEY_ADD_PROMOTIONS,
  SURVEY_SKIP_SURVEY,
  SURVEY_ADD_SURVEY,
  SURVEY_SAVE_CHANGES,
  CANCEL_SURVEY,
  SURVEY_LIST_VIEW,
  SURVEY_GRID_VIEW,
  SURVEY_SKIP_PROMOTION,
  SET_PIN_SURVEY,
  SET_UN_PIN_SURVEY,
  SURVEY_SELECT_CAMPAIGN,
  SURVEY_ADD_MORE_CAMPAIGN,
  SURVEY_SET_MENU,
} from "../constants";

export function addCampaign(payload) {
  return { type: ADD_SURVEY, payload };
}
export function surveySetMenu(payload) {
  return { type: SURVEY_SET_MENU, payload };
}
export function setActiveCampaign(payload) {
  return { type: SET_ACTIVE_SURVEYS, payload };
}
export function setInactiveCampaign(payload) {
  return { type: SET_INACTIVE_SURVEYS, payload };
}
export function setArchivedCampaign(payload) {
  return { type: SET_ARCHIVED_SURVEYS, payload };
}
export function setSurveyListView(payload) {
  return { type: SURVEY_LIST_VIEW, payload };
}
export function setSurveyGridView(payload) {
  return { type: SURVEY_GRID_VIEW, payload };
}
export function searchCampaign(payload) {
  return { type: SEARCH_SURVEY, payload };
}
export function setEnableCampaign(payload) {
  return { type: SET_ENABLE_SURVEY, payload };
}
export function setDisableCampaign(payload) {
  return { type: SET_DISABLE_SURVEY, payload };
}
export function setCheckCampaign(payload) {
  return { type: SET_CHECK_SURVEY, payload };
}
export function setUnCheckCampaign(payload) {
  return { type: SET_UNCHECK_SURVEY, payload };
}
export function setCampaignStatus(payload) {
  return { type: SET_SURVEY_STATUS, payload };
}
export function setPinSurvey(payload) {
  return { type: SET_PIN_SURVEY, payload };
}
export function setUnPinSurvey(payload) {
  return { type: SET_UN_PIN_SURVEY, payload };
}
export function setCampaignSaveAsDraft(payload) {
  return { type: SET_SURVEY_SAVE_AS_DRAFT, payload };
}
export function skipPromotion(payload) {
  return { type: SURVEY_SKIP_PROMOTION, payload };
}
export function campaignAddPromotions(payload) {
  return { type: SURVEY_ADD_PROMOTIONS, payload };
}
export function campaignSkipSurvey(payload) {
  return { type: SURVEY_SKIP_SURVEY, payload };
}
export function campaignAddSurvey(payload) {
  return { type: SURVEY_ADD_SURVEY, payload };
}
export function campaignSaveChanges(payload) {
  return { type: SURVEY_SAVE_CHANGES, payload };
}
export function cancelcampaign(payload) {
  return { type: CANCEL_SURVEY, payload };
}
c;
export function promotionSelectCampaign(payload) {
  return { type: SURVEY_SELECT_CAMPAIGN, payload };
}
export function promotionAddMoreCampaign(payload) {
  return { type: SURVEY_ADD_MORE_CAMPAIGN, payload };
}
