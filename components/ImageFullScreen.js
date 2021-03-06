import React from "react";
import {
    AppRegistry,
    Animated,
    Dimensions,
    Image,
    ImageBackground,
    Platform,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import './styles'
import { Button, Overlay } from 'react-native-elements';
import { WebBrowser, Component } from "expo";
import { getTheme } from 'react-native-material-kit';
import MapView from "react-native-maps";
import axios from 'axios';
import { connect } from 'react-redux';
import {
    renderPhotos,
    changeCardVisibility,
    selectImageCard,
    insertPhotoWithIndex,
    deletePhoto,
    reflectStateChange,
    replaceAllMarkers,
    updateImageFullScreen,
} from '../action';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;
let changedTitle
let changedDescription

class ImageFullScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            description: null,
            fullSizeImage: null,
            displayImageFull: false,
        }
    }
    componentDidMount() {
        const copyImageUrl = this.props.markers[this.props.selectedImageIndex].image.uri.slice(0);
        const replaceTarget = /.jpg/gi;
        const fullSizeImageUrl = copyImageUrl.replace(replaceTarget, '-full.jpg');
        this.setState({ fullSizeImage: { uri: `${fullSizeImageUrl}` } })
    }



    render() {

        return (
            <ImageBackground
                source={this.state.fullSizeImage}
            />
        );
    }
}

const theme = getTheme();

const styles = StyleSheet.create({
    alignButtons: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
    },
    buttonDelete: {
        flex: 1,
        marginHorizontal: 5,
    },
    buttonExit: {
        flex: 1,
        marginHorizontal: 5,
    },
    buttonUpload: {
        flex: 1,
        marginHorizontal: 5,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'space-between',
        padding: 10,
        elevation: 2,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: '100%',
        width: '100%',
    },
    cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    popUpImage: {
        maxWidth: "100%",
        height: "100%",
        flex: 1,
    },
    popUpModal: {
        padding: 10,
        elevation: 2,
        backgroundColor: "#FFF",
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        width: CARD_HEIGHT * 2,
        height: CARD_HEIGHT * 2,
        overflow: "visible",
    },
    popupContent: {
        flex: 6,
    },
    textTitle: {
        flex: 1,
    },
    textDescription: {
        flex: 4,
    },
})

const mapStateToProps = state => ({
    displayImageFull: state.displayImageFull,
    markers: state.markers,
    region: state.region,
    visible: state.visible,
    selectedImageIndex: state.selectedImageIndex,
    stateChanged: state.stateChanged,
    userId: state.userId
})

const mapDispatchToProps = dispatch => ({
    changeCardVisibility: visibility => {
        const action = changeCardVisibility(visibility)
        dispatch(action)
    },
    selectImageCard: index => {
        const action = selectImageCard(index)
        dispatch(action)
    },
    insertPhotoWithIndex: photo => {
        const action = insertPhotoWithIndex(photo)
        dispatch(action)
    },
    deletePhoto: index => {
        const action = deletePhoto(index)
        dispatch(action)
    },
    reflectStateChange: change => {
        const action = reflectStateChange(change)
        dispatch(action)
    },
    renderPhotos: photos => {
        const action = renderPhotos(photos);
        dispatch(action)
    },
    replaceAllMarkers: photos => {
        const action = replaceAllMarkers(photos)
        dispatch(action)
    },
    updateImageFullScreen: boolean => {
        const action = updateImageFullScreen(boolean)
        dispatch(action)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageFullScreen)