const initialState = {
    markers: [],
    region: {
        latitude: 35.6591246694541,
        longitude: 139.728567802469,
        latitudeDelta: 0.04864195044303443,
        longitudeDelta: 0.040142817690068
    },
    GPS: [],
    visible: false,
    selectedImageIndex: null,
    displayImageFull: false,
    capture: null,
    userId: 5,
    createGroupVisible: false,
    groupDatePickerVisible: false,
    groupStartDate: "",
    groupEndDate: "",
    groupTitle: null,
    groupDescription: null,
    pictureGroups: []
};

const reducer = (state = initialState, action) => {
    console.log("==================action=================", action);
    console.log("==================state before=================", state);
    switch (action.type) {
        case "RENDER_PHOTO": {
            const stateChanges = { markers: action.photo };
            console.log(
                "=====================stateChanges================",
                stateChanges
            );
            return {
                ...state,
                markers: [...state.markers, action.photo]
            };
        }
        case "RENDER_PHOTOS": {
            const stateChanges = { markers: action.photos };
            "=====================stateChanges================", stateChanges;
            return {
                ...state,
                ...stateChanges
            };
        }
        case "CHANGE_CARDVISIBILITY": {
            const stateChanges = { visible: action.visibility };
            "=====================stateChanges================", stateChanges;
            return {
                ...state,
                ...stateChanges
            };
        }
        case "SELECT_IMAGECARD": {
            const stateChanges = { selectedImageIndex: action.index };
            "=====================stateChanges================", stateChanges;
            return {
                ...state,
                ...stateChanges
            };
        }
        case "INSERT_PHOTOWITHINDEX": {
            const stateChanges = {
                markers: [
                    ...state.markers.slice(0, state.selectedImageIndex),
                    action.photo,
                    ...state.markers.slice(state.selectedImageIndex + 1)
                ]
            };
            "=====================stateChanges================", stateChanges;
            return {
                ...state,
                ...stateChanges
            };
        }
        case "DELETE_PHOTO": {
            const stateChanges = {
                markers: [
                    ...state.markers.slice(0, action.index),
                    ...state.markers.slice(action.index + 1)
                ]
            };
            "=====================stateChanges================", stateChanges;
            return {
                ...state,
                ...stateChanges
            };
        }
        case "REFLECT_STATECHANGE": {
            const stateChanges = { stateChanged: action.change };
            "=====================stateChanges================", stateChanges;
            return {
                ...state,
                ...stateChanges
            };
        }
        case "REPLACE_ALLMARKERS": {
            const stateChanges = { markers: action.photos };
            "=====================stateChanges================", stateChanges;
            return {
                ...state,
                ...stateChanges
            };
        }
        case "RENDER_GPS": {
            const stateChanges = { GPS: action.GPS };
            "=====================stateChanges================", stateChanges;
            return {
                ...state,
                GPS: [...state.GPS, action.GPS]
            };
        }
        case "SET_CAPTURE": {
            const stateChanges = { capture: action.capture };
            return { ...state, ...stateChanges };
        }
        case "SET_USER_ID": {
            const stateChanges = { userId: action.id };
            return { ...state, ...stateChanges };
        }
        case "TOGGLE_CREATE_GROUP_VISIBLE": {
            const stateChanges = { createGroupVisible: !state.createGroupVisible };
            return { ...state, ...stateChanges };
        }
        case "SET_IMAGE_COMMENT": {
            const newCapture = { ...state.capture, comment: action.comment };
            const stateChanges = { capture: newCapture };
            return { ...state, ...stateChanges };
        }
        case "SET_IMAGE_TITLE": {
            const newCapture = { ...state.capture, title: action.title };
            const stateChanges = { capture: newCapture };
            return { ...state, ...stateChanges };
        }
        case "TOGGLE_GROUP_DATE_PICKER_VISIBLE": {
            const stateChanges = {
                groupDatePickerVisible: !state.groupDatePickerVisible
            };
            return { ...state, ...stateChanges };
        }
        case "SET_GROUP_START_DATE": {
            const stateChanges = { groupStartDate: action.date };
            return { ...state, ...stateChanges };
        }
        case "SET_GROUP_END_DATE": {
            const stateChanges = { groupEndDate: action.date };
            return { ...state, ...stateChanges };
        }
        case "SET_GROUP_TITLE": {
            const stateChanges = { groupTitle: action.title };
            return { ...state, ...stateChanges };
        }
        case "SET_GROUP_DESCRIPTION": {
            const stateChanges = { groupDescription: action.description };
            return { ...state, ...stateChanges };
        }
        case "LOAD_GROUPS": {
            const stateChanges = { pictureGroups: action.groups };
            return { ...state, ...stateChanges };
        }
        case "RESET_STATE": {
            return { ...initialState };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
