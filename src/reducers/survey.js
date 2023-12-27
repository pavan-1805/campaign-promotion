const initialState =  {
    searchPromotion: '',
    allPromotions:[],
    completedPromotions:[],
    publishedPromotions:[],
    archivedPromotion:[],
    promotionView:''
}

const survey = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PROMOTION':
            return {
                ...state,
                allPromotions: state.allPromotions.push(action.payload)
            }
        case 'SET_ACTIVE_PROMOTIONS':
            return {
                ...state,
                completedPromotions: state.allPromotions.filter(camp=>camp.status === 'completed')
            }
        case 'SET_INACTIVE_PROMOTIONS':
            return {
                ...state,
                publishedPromotions: state.allPromotions.filter(camp=>camp.status === 'published')
            }
        case 'SET_ARCHIVED_PROMOTIONS':
            return {
                ...state,
                archivedPromotion: state.allPromotions.filter(camp=>camp.status === 'archived')
            }
        case 'LIST_VIEW':
            return {
                ...state,
                promotionView: action.payload
            }
        case 'GRID_VIEW':
            return {
                ...state,
                promotionView: action.payload
            }
        default:
            return state;
    }

}

export default survey