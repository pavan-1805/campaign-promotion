const initialState =  {
    searchCampaign: '',
    allCampaigns:[],
    activeCampaigns:[],
    inActiveCampaigns:[],
    archivedCampaigns:[],
    campaignView:'',
}

const campaign = (state = initialState, action) => {
    console.log('state:',state);
    switch (action.type) {
        case 'ADD_CAMPAIGN':
            return {
                ...state,
                allCampaigns: state.allCampaigns.push(action.payload)
            }
        case 'SET_ACTIVE_CAMPAIGNS':
            return {
                ...state,
                activeCampaigns: state.allCampaigns.filter(camp=>camp.status === 'active')
            }
        case 'SET_INACTIVE_CAMPAIGNS':
            return {
                ...state,
                inActiveCampaigns: state.allCampaigns.filter(camp=>camp.status === 'inactive')
            }
        case 'SET_ARCHIVED_CAMPAIGNS':
            return {
                ...state,
                archivedCampaigns: state.allCampaigns.filter(camp=>camp.status === 'archived')
            }
        case 'LIST_VIEW':
            return {
                ...state,
                campaignView: action.payload
            }
        case 'GRID_VIEW':
            return {
                ...state,
                campaignView: action.payload
            }
        default:
            return state;
    }

}

export default campaign