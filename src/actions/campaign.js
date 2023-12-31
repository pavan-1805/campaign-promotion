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
  CAMPAIGN_SKIP_SURVEY,
  CAMPAIGN_ADD_SURVEY,
  CAMPAIGN_SAVE_CHANGES,
  CANCEL_CAMPAIGN,
  CAMPAIGN_LIST_VIEW,
  CAMPAIGN_GRID_VIEW,
  CAMPAIGN_SKIP_PROMOTION,
  CAMPAIGN_SET_MENU,
} from "../constants";

export function addCampaign(payload) {
  return { type: ADD_CAMPAIGN, payload }; // payload = {...campaign fields data}
}
export function campaignSetMenu(payload) {
    return { type: CAMPAIGN_SET_MENU, payload };
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
export function setCampaignListView(payload) { // payload = 'list'
  return { type: CAMPAIGN_LIST_VIEW, payload };
}
export function setCampaignGridView(payload) { // payload = 'grid'
  return { type: CAMPAIGN_GRID_VIEW, payload };
}
export function searchCampaign(payload) { // payload = {arrayName: 'activeCampaigns', searchKey: 'Christmas'}
  return { type: SEARCH_CAMPAIGN, payload };
}
export function setEnableCampaign(payload) { //payload = {id: clicked_campaignId}
  return { type: SET_ENABLE_CAMPAIGN, payload };
}
export function setDisableCampaign(payload) { //payload = {id: clicked_campaignId}
  return { type: SET_DISABLE_CAMPAIGN, payload };
}
export function setCheckCampaign(payload) { //payload = {id: clicked_campaignId}
  return { type: SET_CHECK_CAMPAIGN, payload };
}
export function setUnCheckCampaign(payload) { //payload = {id: clicked_campaignId}
  return { type: SET_UNCHECK_CAMPAIGN, payload };
}
export function setCampaignStatus(payload) { //payload = {id: clicked_campaignId, status: 'inactive'}
  return { type: SET_CAMPAIGN_STATUS, payload };
}
export function setCampaignSaveAsDraft(payload) { //payload = {id: clicked_campaignId}
  return { type: SET_CAMPAIGN_SAVE_AS_DRAFT, payload };
}
export function skipPromotion(payload) { //payload = {id: clicked_campaignId}
  return { type: CAMPAIGN_SKIP_PROMOTION, payload };
}
export function campaignAddPromotions(payload) { //payload = {id: clicked_campaignId, promotions: [...newly added promotions]}
  return { type: CAMPAIGN_ADD_PROMOTIONS, payload };
}
export function campaignSkipSurvey(payload) { //payload = {id: clicked_campaignId}
  return { type: CAMPAIGN_SKIP_SURVEY, payload };
}
export function campaignAddSurvey(payload) { //payload = {id: clicked_campaignId, surveys: [...newly added surveys]}
  return { type: CAMPAIGN_ADD_SURVEY, payload };
}
export function campaignSaveChanges(payload) { //payload = {id: clicked_campaignId, campaign: {updated fields}}
  return { type: CAMPAIGN_SAVE_CHANGES, payload };
}
export function cancelCampaign(payload) { //payload = {id: clicked_campaignId}
  return { type: CANCEL_CAMPAIGN, payload };
}
