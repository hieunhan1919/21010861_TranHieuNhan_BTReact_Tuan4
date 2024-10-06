import React from 'react';
import { Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { images } from '../constants/images';
import { TextInput } from 'react-native';

export default function Cau2b() {
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Image source={images.USB} style={styles.images} />
                <Text style={styles.title}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
            </View>
            <View>
                <Text style={styles.titleFeedback}>Cực kỳ hài lòng</Text>
                <View style={styles.startContainer}>
                    <Image source={images.Start} style={styles.imagesStart} />
                    <Image source={images.Start} style={styles.imagesStart} />
                    <Image source={images.Start} style={styles.imagesStart} />
                    <Image source={images.Start} style={styles.imagesStart} />
                    <Image source={images.Start} style={styles.imagesStart} />
                </View>
            </View>
            <View style={styles.addHinhAnh}>
                <Image source={images.Camera} style={styles.imagesCamera} />
                <TouchableOpacity>
                    <Text style={styles.addHinhAnhText}>Thêm hình ảnh</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.infoLikeContainer}>
                <Text style={styles.infoLike}>
                    Hãy chi sẻ những điều mà bạn thích về sản phẩm
                </Text>
                <Text style={styles.link}>
                    https://meet.google.com/nsj-ojwi-xpp
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.submitButton} >
                    <Text style={styles.submitButtonText}>Gửi</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        padding: 20,
    },
    images: {
        height: 70,
        width: 70,
        marginHorizontal: 10,
        overflow: 'hidden',
    },
    title: {
        fontSize: 16,
        fontWeight: 700,
        fontFamily: 'Roboto-Bold',
        lineHeight: 18.75,
    },
    titleFeedback: {
        fontSize: 18,
        fontWeight: 700,
        fontFamily: 'Roboto-Bold',
        lineHeight: 21.09,
        textAlign: 'center',
    },
    imagesStart: {
        height: 39,
        width: 39,
        marginHorizontal: 10,
        overflow: 'hidden',
    },
    startContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        padding: 20,
    },
    addHinhAnh: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        padding: 20,
        borderWidth: 1,
        width: "90%",
        borderRadius: 10,
    },
    addHinhAnhText: {
        fontSize: 18,
        fontWeight: 700,
        fontFamily: 'Roboto-Bold',
        lineHeight: 21.09,
        textAlign: 'center',
    },
    imagesCamera: {
        height: 32,
        width: 32,
        marginHorizontal: 10,
        overflow: 'hidden',
        borderColor: '#1511EB',
    },
    submitButton: {
        width: 290,
        height: 50,
        backgroundColor: '#0D5DB6',
        justifyContent: 'center',
        alignItems: 'space-around',
        margin: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#1511EB',
    },
    submitButtonText: {
        fontSize: 20,
        fontWeight: 700,
        fontFamily: 'Roboto-Bold',
        lineHeight: 23.44,
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#ffffff',
    },
    infoLikeContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        width: "90%",
        height: 200,
        marginVertical: 30,
    },

    infoLike: {
        fontSize: 18,
        fontWeight: 700,
        fontFamily: 'Roboto-Bold',
        lineHeight: 21.09,
        textAlign: 'center',
    },
    link: {
        fontSize: 18,
        fontWeight: 700,
        fontFamily: 'Roboto-Bold',
        lineHeight: 21.09,
        textAlign: 'center',
        color: '#0D5DB6',
    }
});